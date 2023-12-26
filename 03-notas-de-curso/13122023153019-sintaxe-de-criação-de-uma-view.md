---
aliases:
  - Sintaxe de criação de uma View
tags:
  - sql
  - sql_views
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Sintaxe de criação de uma View

Considerando um banco de dados hipotéticos de clientes, vamos imaginar um cenário em que precisamos da seguintes informações:
- Nome do cliente
- Nome do produto
- Quantidades
- Preço total de vendas

Uma query adequada seria:

```sql
SELECT 
	CL.nome_cliente AS Cliente,
	PR.nome_produto AS Poduto,
	PE.qtde_produto AS Quantidade,
	PE.cod_pedido AS Pedido,
	PR.preco_produto * PE.qtde_produto AS Fatura
FROM peditos PE
INNER JOIN clientes CL
	ON PE.cod_cliente = CL.cod_cliente
INNER JOIN produtos PR
	ON PE.cod_produto = PR.cod_produto
```

Tendo em vista que esta é uma query mais complexa, para não termos que realizá-la todas as vezes que necessitarmos da informação, podemos então criar uma Visão.

A sintaxe é a seguinte:

```sql
CREATE [OR REPLACE] VIEW <nome_da_view> AS
<querie_realizada>
```

Para criar uma view para a query de exemplo:

```sql
CREATE OR REPLACE VIEW vendas AS
	SELECT 
		CL.nome_cliente AS Cliente,
		PR.nome_produto AS Poduto,
		PE.qtde_produto AS Quantidade,
		PE.cod_pedido AS Pedido,
		PR.preco_produto * PE.qtde_produto AS Fatura
	FROM peditos PE
	INNER JOIN clientes CL
		ON PE.cod_cliente = CL.cod_cliente
	INNER JOIN produtos PR
		ON PE.cod_produto = PR.cod_produto
```

Ao executar essa View, teremos uma tabela virtual chamada vendas. Uma vez criada, poderemos realizar outras queries utilizando apenas os dados armazenados na View:


```sql
SELECT * FROM vendas --retornará todos os resultados armazenados na View
```

```sql
SELECT Cliente, Pedido FROM vendas --retornará apenas as variáveis Cliente e Pedido armazenados na View
```

```sql
SELECT Cliente, SUM(Fatura) 
FROM vendas 
GROUP BY Cliente --retornará a soma da fatura por cada cliente do conjunto de dados armazenados na View
```

## Alterar propriedades das Views

É possível alterar propriedades de uma view com a declaração `ALTER VIEW`:

>[!warning] `ALTER VIEW` não altera o código da view, para isso podemos usas a declaração `REPLACE`, como `CREATE OR REPLACE VIEW vendas AS`. Dessa forma, quando precisar alterar o código da query o banco ira substituir o código atual pelas alterações feitas. 


```sql
ALTER VIEW vendas RENAME TO faturas -- altera o nome da view de "vendas" para "faturas"
```

## Deletar uma View

Para deletar uma view usamos a declaração `DROP VIEW`:

```sql
DROP VIEW IF EXISTS <nome-da-view> CASCADE  -- deleta uma view e todas as views relacionadas a ela, se 
```


---
## Referencias
- [Série PostGres da Boson Treinamentos](https://www.youtube.com/watch?v=dfGltH1GcXM&list=PLucm8g_ezqNoAkYKXN_zWupyH6hQCAwxY&index=25)