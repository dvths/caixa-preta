---
aliases:
  - Solucionando questões de Negócios com SQL
tags:
  - sql
  - sql_dml
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%
___
# Solucionando questões de Negócios com SQL

>[!question]- 1) Selecione os dados da tabela de pagamentos onde só apareçam os tipos de pagamento “VOUCHER” e “BOLETO”.
>
>>[!check] Resposta:
>>```sql
>> SELECT payment_type
>> FROM order_payments
>> WHERE payment_type = 'voucher' or  payment_type = 'boleto';
>> ```
>> Outra solução, para evitar o problema de variação nas strings "voucher" e "boleto":
>> ```sql
>> SELECT 
>> FROM order_payments
>> WHERE payment_type LIKE '%ouche%' or  payment_type LIKE '%olet%';
>> ```

>[!question]- 2. Retorne pedidos que foram feitos somente no ano de 2017.
>
>>[!check] Resposta: A melhor forma para buscarmos as linhas que retornem os valores no ano de 2017 é usar o operador **BETWEEN**, pois seu uso é indicado para valores de data e hora, e é uma mão na roda para trabalharmos com o esse tipo de dado.
>>
>>```sql
>>SELECT
>> 	order_id,
>> 	order_purchase_timestamp
>>FROM orders
>>WHERE order_purchase_timestamp
>>BETWEEN '2017-01-01 00:00:00' AND '2017-12-31 23:59:59';
>>```

>[!question]- 3. Retorne a quantidade de itens vendidos em cada categoria por estado em que o cliente se encontra, mostrando somente categorias que tenham vendido uma quantidade de items acima de 1000.
>
>>[!check] Resposta: Precisamos agrupar as linhas do nosso banco de dados pelas categorias e também pelos os estados, mas como fazer isso? **GROUP BY** é a solução! Junto com ele podemos usar cláusulas como o **HAVING** e chamar funções de agregação como somatórios, médias e outras, no nosso caso iremos usar o **COUNT**, para contarmos a quantidade de itens vendidos.
>>
>>```sql
>> SELECT
>>     COUNT(oi.order_item_id) as Quantidade,
>>     p.product_category_name as Categoria,
>>     c.customer_state as Estado
>> FROM order_items oi
>> JOIN products p
>>     ON p.product_id = oi.product_id
>> JOIN orders o
>>     ON o.order_id = oi.order_id
>> JOIN customers c
>>     ON c.customer_id = o.customer_id
>> GROUP BY p.product_category_name, c.customer_state
>> HAVING COUNT(oi.order_item_id) > 1000;
>>```

>[!question]- 4. Mostre o valor vendido total de cada vendedor (seller_id) em cada uma das categorias de produtos, somente retornando os vendedores que nesse somatório e agrupamento venderam mais de $1000. Desejamos ver a categoria do produto e os vendedores. Para cada uma dessas categorias, mostre seus valores de venda de forma decrescente.
>
>>[!check] Resposta: Para essa solução aplicamos os mesmos conceitos da questão anterior, desta vez iremos utilizar o **ORDER BY** para ordenar nossos valores:
>>
>>```sql
>> SELECT
>>     sellers.seller_id as Vendedor,
>>     products.product_category_name as Categoria,
>>     SUM(order_payments.payment_value) as Somatorio
>> FROM sellers
>> JOIN order_items
>>     ON order_items.seller_id = sellers.seller_id
>> JOIN products
>>     ON products.product_id = order_items.product_id
>> JOIN order_payments
>>     ON order_payments.order_id = order_items.order_id
>> GROUP BY sellers.seller_id, products.product_category_name
>> HAVING SUM(order_payments.payment_value) > 1000
>> ORDER BY Categoria, Somatorio DESC;
>>```

>[!question]- 5. Selecione todos os itens que foram vendidos, mostrando somente pedidos interestaduais. Queremos saber quantos dias os fornecedores demoram para postar o produto e, se o produto chegou ou não no prazo.
>
>> [!check] Resposta: Para resolvermos esse desafio precisamos fazer uma **Subconsulta/Subquery** e também usar uma expressão condicional do SQL o **CASE**.
>> Primeiro colocaremos no nosso **FROM** o quadrante de dados que vamos fazer nossa seleção e nossa lógica de condição. Colocarei em parênteses e chamarei de PRODUTO.
>> ```sql
>> (SELECT * 
>> FROM order_items
>> JOIN orders
>> 	ON orders.order_id = order_items.order_id
>> JOIN customers 
>> 	ON customers.customer_id = orders.customer_id
>> JOIN sellers
>> 	ON sellers.seller_id = order_items.seller_id
>> WHERE customers.customer_state <>  sellers.seller_state) AS PRODUTO
>> ```
>> Para a construçao do nosso **SELECT** precisamos nos atentar : **1**) Selecionar as informações que o time de negócios demandou **2**) Calcular o tempo de entrega **3**) Averiguar se foi dentro ou não do prazo estipulado.
>> 
>> O _delta_ é a diferença entre o dia que o cliente recebeu o produto e o dia que o produto foi enviado, em outras palavras: quantos dias o cliente demorou para receber o produto.
>> 
>> O _delta 2_ é a diferença entre o dia estimado de entrega do produto e o dia que o produto foi enviado, em outras palavras: o quantitativo de dias esperado para o recebimento.
>> 
>> A subtração entre esses dois deltas nos dirá se o pedido chegou no prazo ou não. Para o retorno nos informar se está dentro ou não do prazo, utilizaremos uma expressão dentro do CASE que nos retornará a informação solicitada. Notem que o produto pode ter 3 status: No prazo; Atrasado e… Produto não enviado, importante atentarmos à todas as possibilidades.
>> 
>> ```sql
>> SELECT
>> 	PRODUTO.product_id as " item",
>> 	PRODUTO.order_delivered_carrier_date as "dia de envio",
>> 	PRODUTO.order_deliveres_customer_date as "dia de recibo",
>> 	PRODUTO.order_estimated_delivery_date,
>> 	PRODUTO.order_deliveres_customer_date - PRODUTO.order_delivered_carrier_date as "delta",
>> 	PRODUTO.order_estimated_delivery_date - PRODUTO.order_delivered_carrier_date as "delta2",
>> 	
>> 	CASE
>> 		WHEN (
>> 			PRODUTO.order_deliveres_customer_date - PRODUTO.order_delivered_carrier_date) - (PRODUTO.order_estimated_delivery_date - PRODUTO.order_delivered_carrier_date) > '0'
>> 		THEN 'ATRASADO'
>> 		
>> 		WHEN (
>> 			PRODUTO.order_deliveres_customer_date - PRODUTO.order_delivered_carrier_date) - (PRODUTO.order_estimated_delivery_date - PRODUTO.order_delivered_carrier_date) < '0'
>> 		THEN 'NO PRAZO'
>> 		ELSE 'não chegou :/'
>> 	END as "Chegou?"
>> ```
>> ### Query Completa:
>> ```sql
>> 
>> SELECT
>> 	PRODUTO." item",
>> 	PRODUTO."dia de envio",
>> 	PRODUTO."dia de recibo",
>> 	PRODUTO.order_estimated_delivery_date,
>> 	PRODUTO."delta",
>> 	PRODUTO."delta2",
>> 	
>> 	CASE
>> 		WHEN (PRODUTO."dia de recibo" - PRODUTO."dia de envio") - (PRODUTO.order_estimated_delivery_date - PRODUTO."dia de envio") > 0
>> 		THEN 'ATRASADO'
>> 		
>> 		WHEN (PRODUTO."dia de recibo" - PRODUTO."dia de envio") - (PRODUTO.order_estimated_delivery_date - PRODUTO."dia de envio") < 0
>> 		THEN 'NO PRAZO'
>> 		ELSE 'não chegou :/'
>> 	END as "Chegou?"
>> FROM (
>>     SELECT
>>         products.product_id as " item",
>>         order_items.order_delivered_carrier_date as "dia de envio",
>>         order_items.order_deliveres_customer_date as "dia de recibo",
>>         order_items.order_estimated_delivery_date,
>>         (order_items.order_deliveres_customer_date - order_items.order_delivered_carrier_date) as "delta",
>>         (order_items.order_estimated_delivery_date - order_items.order_delivered_carrier_date) as "delta2"
>>     FROM order_items
>>     JOIN orders ON orders.order_id = order_items.order_id
>>     JOIN customers ON customers.customer_id = orders.customer_id
>>     JOIN sellers ON sellers.seller_id = order_items.seller_id
>>     WHERE customers.customer_state <> sellers.seller_state
>> ) AS PRODUTO;
>> ```

> [!question]- 6. Retorne as categorias válidas, suas somas totais dos valores de vendas, um ranqueamento de maior valor para menor valor, junto com o somatório acumulado dos valores pela mesma regra do ranqueamento.
> 
>> [!check] Resposta: Agora entramos em um novo conceito no SQL: **Funções de Janelas.** As funções de janela nos permitem criar consultas analíticas mais eficientes, elas operam em uma janela/ partição de um conjunto e retornam um valor para cada linha daquela janela e essa é uma das principais diferenças para o método **GROUP BY**.
>> 
>> Uma janela é definida usando uma especificação de janela, a cláusula **OVER,** em que os três elementos possibilitam o particionamento (**PARTITION BY**), ordenação (**ORDER BY**) e _framing_ **(ROW** ou **RANGE**) do conteúdo da janela.
>> 
>> Deveremos aqui criar também uma subconsulta que será o quadrante de dados que faremos nosso **SELECT** para utilizar o **RANK() OVER e também o SUM() OVER**
>> 
>> ```sql
>> SELECT *,
>>        RANK() OVER (ORDER BY valor DESC),
>>        SUM(valor) OVER (ORDER BY valor DESC)
>> FROM (
>>     SELECT products.product_category_name AS CATEGORIA,
>>            SUM(order_payments.payment_value) AS valor
>>     FROM products
>>     JOIN order_items ON order_items.product_id = products.product_id
>>     JOIN order_payments ON order_payments.order_id = order_items.order_id
>>     GROUP BY products.product_category_name
>> ) AS TAB;
>> 
>> ```



---
## Referencias