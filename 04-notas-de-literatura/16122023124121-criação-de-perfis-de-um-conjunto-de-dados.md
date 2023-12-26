---
titulo_livro: SQL para Análise de Dados
ano: 2022
autor:
  - Cathy Tanimura
aliases:
  - Criação de perfis de um conjunto de dados
capitulo: 2 - Preparando os dados para análise
topico:
  - "Criação de perfis: Distribuições"
tags:
  - sql
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%


---
# Criação de perfis de um conjunto de dados

- A criação de perfis de dados está relacionada ao conceito de [[08072023233505-analise-exploratória-de-dados|Analise Exploratória de Dados]], ou EDA (Exploratory Data Analysis)

### Distribuições 

Permitem conhecer o intervalo de valores que existe  nos dados e com que frequência eles ocorrem, se há valores nulos, e se existem valores negativos junto com positivos. As distribuições podem ser criadas com [[17052023211923-a-taxonomia-de-tipos-de-dados-importa-para-estruturação-manipulação-e-processamento-correto-dos-dados#^0a5c74|dados contínuos]] ou [[17052023211923-a-taxonomia-de-tipos-de-dados-importa-para-estruturação-manipulação-e-processamento-correto-dos-dados#^b39b96|categóricos]] e também são chamadas de frequências.
-  **Histogramas e frequências**: 
	- **Diagrama de frequência** (ou gráfico de frequência): é uma maneira de visualizar quantas vezes algo ocorre em um conjunto de dados. Geralmente representado por uma gráfico de barras onde o eixo x representa as variáveis que estão sendo contadas e o eixo y representa a frequência (contagem de observações) com que ocorrem. 
	- **Histogramas**: Um histograma é uma maneira de visualizar a distribuição de valores numéricos em um conjunto de dados.

#### Utilização de SQL para criar histogramas e frequências

Para criar uma histograma precisamos contar a frequência de observações de uma determinada variável ou variáveis. Para realizar o agrupamento dessas variáveis, utilizamos a cláusula `GROUP BY`. 

>[!tip] Uma regra básica para não se confundir com o agrupamento de dados: Na cláusula `GROUP BY` são fornecidos os campos que não fazem parte de uma agregação.

1. Para criar um histograma por idade de um dataset de clientes, por exemplo, projetamos o campo idade e contamos a quantidade de clientes, depois fazemos o agrupamento por idade:  

```sql
SELECT 
	age
	, count(customer_id)
FROM tb_customers
GROUP BY 1
;
```

2. Para criar uma consulta que nos retorne a distribuição de pedidos por clientes, podemos contar o número de pedidos feitos por cada cliente e usar esse resultado como categoria para contar o número de clientes. Podemos fazer isso utilizando uma subconsulta:

```sql
SELECT 
	orders
	, count(*)
 (
	SELECT  
		customer_id
		, count(order_id) as orders
	FROM tb_orders
	GROUP BY 1
 ) a
GROUP BY 1
;
```

 - A consulta externa é baseada nos resultados da subconsulta (consulta interna apelidada `a`).
    - Ela agrupa os resultados da subconsulta pelo número de pedidos (`orders`).
    - A categoria resultante é renomeada como `order` na consulta externa.
    - A função de agregação `count(*)` é usada para contar o número de clientes que têm o mesmo número de pedidos.
    - Os resultados finais contêm duas colunas: `order` (número de pedidos) e `num_customers` (número de clientes com esse número específico de pedidos).
	
**Resultado Final:**

- O resultado final fornecerá informações sobre a distribuição do número de pedidos entre os clientes. Cada linha indicará o número de pedidos (`order`) e o número de clientes (`num_customers`) que têm esse número específico de pedidos.

**Exemplo**
Suponha a seguinte tabela:

| orders_id | customer_id |
| --------- | ----------- |
| 1         | A           |
| 2         | B           |
| 3         | A           |
| 4         | C           |
| 5         | B           |
| 6         | A           |
| 7         | B           |
| 8         | C           |
| 9         | A           |
| 10        | B           | 

O resultado esperado é o seguinte:

| orders | num_customers |
| ------ | ------------- |
| 4      | 2             |
| 2      | 1             |

Ou seja, 2 clientes (A e B) realizaram 4 pedidos e um cliente realizou 1 pedido.

>[!tip] Esse tipo de perfil pode ser aplicado sempre que você precisar ver com que frequência certas entidades ou atributos aparecem nos dados

>[!info] Embora o exemplo tenha usado a função agregadora `COUNT`, poderíamos criar perfis de clientes pela soma (`SUM()`), pelo tamanho médio (`AVG()`) do pedido pela data mínima (`MIN()`) ou máxima (`MAX()` (a mais recente)) do pedido.

Outra forma de criar perfil é pela [[16122023211443-discretização-ou-binning|Discretização ou Binning]]. 

----
## Referências 