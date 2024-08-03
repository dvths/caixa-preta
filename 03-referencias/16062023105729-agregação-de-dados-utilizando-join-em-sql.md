---
nome-do-curso: Google Data Analytics Certification
topico:
  - Como agregar dados para análise
aliases:
  - Agregação de dados utilizando JOIN em SQL
tags:
  - GDCA
  - sql
  - sql_dml
link: https://www.coursera.org/programs/trybe-google-learning-program-hrevt/professional-certificates/google-data-analytics?collectionId=twDTY
local:
  - Coursera
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%
____
# Agregação de dados utilizando JOIN em SQL

- A tabela de junção (ou relação de junção) foi introduzida no SQL para permitir que o usuário especifique uma tabela resultante de uma operação de junção na cláusula FROM.
	- A instrução JOIN combina tabelas através de uma chave primária ou estrangeira para alinhar as informações de ambas as tabelas no processo de junção. Portanto, é uma instrução que está ligada diretamente ao conceito de normalização. 
## Sintaxe do JOIN

```sql
SELECT 
	table_name_1.colunm_name,
	table_name_2.colunm_name
FROM 
	table_name_1
JOIN 
	table_name_2
ON table_name_1.column_name = table_name_2.column_name;
```

- A instrução `ON` indica como as tabelas devem ser correspondidas com relação às informações corretas a serem combinadas a partir delas.

## Formas de execução de instruções de junção

- `INNER JOIN` - É a forma padrão de execução de um instrução `JOIN` em que uma tupla é incluída somente se combinar com a tupla da tabela combinada. Portanto, é o mesmo que escrever apenas `JOIN`.
- `LEFT JOIN` - Nessa instrução todas as tuplas da tabela da esquerda precisa aparecer no resultado. As tuplas que, por acaso, não combinem com a tabela da direita são preenchidas com o valor `NULL`.
- `RIGHT JOIN` - Ao contrário do anterior, todas as tuplas da direita devem aparecer no resultado. As tuplas que não combinam com a tabela da esquerda são preenchidas com o valor `NULL`.
- `FULL OUTHER JOIN` - Retorna todas as tuplas de ambas as tabelas mesmo que não estejam combinando, os valores que não combinam são preenchidos com `NULL`.


![[V3K80lLeRfayvNJS3tX2DQ_c5371083976944c7808132ca392f419d_Screen-Shot-2021-02-07-at-5.14.41-PM.png]]

## Exemplos

1. INNER JOIN (ou apenas JOIN)
```sql
SELECT 
	customers.customer_name,
	orders.ship_date
FROM
	customer
JOIN 
	orders
ON customers.customer_id = orders.customer_id; 
```

2. LEFT JOIN (ou LEFT OUTER JOIN)
```sql
SELECT 
	customers.customer_name,
	sales.sales_rep
FROM
	customer
LEFT JOIN 
	sales
ON customers.customer_id = sales.customer_id; 
```

3. RIGHT JOIN (ou RIGHT OUTER JOIN)
```sql
SELECT 
	sales.sales_rep
	customers.customer_name,
FROM
	sales
LEFT JOIN 
	customers
ON sales.customer_id = customers.customer_id; 
```

4. FULL JOIN (ou FULL OUTER JOIN) 
```sql
SELECT 
	customers.customer_name,
	orders.ship_rep
FROM
	customers	
FULL OUTER JOIN 
	orders
ON customers.customer_id = orders.customer_id; 
```

--- 
## Links para referência

- [**JOIN no SQL**](https://www.w3schools.com/sql/sql_join.asp): É uma ótima explicação básica das instruções JOIN com exemplos. Precisa relembrar seu conhecimento sobre o que diferentes JOIN fazem? Esse é um excelente recurso para favoritar e consultar quando quiser.  

- [**Instruções JOIN de banco de dados - Introdução aos tipos e conceitos de JOIN**](https://www.essentialsql.com/introduction-database-joins/): É uma introdução bem completa sobre as instruções JOIN. Esse artigo não apenas explica o que são as instruções JOIN e como usá-las, como também aborda de forma detalhada as diferentes situações de quando e por que usar as instruções JOIN. É um ótimo recurso se tiver interesse em saber mais sobre a lógica por trás do uso da JOIN.

- [**Tipos de JOIN SQL explicados em imagens**](https://dataschool.com/how-to-teach-people-sql/sql-join-types-explained-visually/): Esse recurso, que traz uma representação visual das diferentes instruções JOIN, é uma forma muito útil de refletir sobre as instruções JOIN se você for do tipo que aprende com recursos visuais, além de ser uma forma bem bacana de se lembrar dos diferentes tipos. 

- [**JOIN no SQL: como reunir dados com uma JOIN por vez**](https://towardsdatascience.com/sql-join-8212e3eb9fde): Além de contar com uma explicação detalhada sobre as instruções JOIN com exemplos, esse recurso traz exemplos de dados que você pode usar para acompanhar o guia passo a passo. É uma forma útil de praticar as instruções JOIN com dados concretos. 

- [**JOIN no SQL**](https://www.dofactory.com/sql/join): Outro recurso que traz uma explicação clara sobre as instruções JOIN e usa exemplos para demonstrar como elas funcionam na prática. Esses exemplos também combinam as instruções JOIN com a atribuição de alias. É uma ótima oportunidade de ver como as instruções JOIN podem ser combinadas com outros conceitos do SQL que você já aprendeu durante o curso.


## Resolução da atividade prática dessa seção:

A atividade prática de consultas com Join propõe algumas consultas para análise de dados públicos sobre educação fornecidos pelo Banco Mundial e uma curiosidade sobre as vitórias de Michal Jordan no período da faculdade com dados da NCAA (National Collegiate Athletic Association).

Os conjunto dos dados se chamam International Education e NCAA Basketball e podem ser encontrados no Marketplace do BigQuery.

### Exercício 1: Unir as tabelas `country_code` e `international_education`.
#### Resolução

```sql
SELECT
	edu.country_name AS Country,
	edu.value AS Value,
	summary.country_code AS Code
FROM
	`bigquery-public-data.world_bank_intl_education.international_education` AS edu
INNER JOIN
	`bigquery-public-data.world_bank_intl_education.country_summary` AS summary
ON
	summary.contry_code = edu.country_code
```

#### Explicação

Esta é uma consulta `INNER JOIN`. As variáveis `country_name` e `value`, da relação `international_education` são combinadas coma a variável `country_code` da relação `country_summary`. Essa combinação é possível pois a **chave primária** da relação `country_summary`, `country_code` é a **chave estrangeira** na relação `international_education`. Na instrução `ON` declaramos que a agregação das tuplas será feita se essas chaves possuem os mesmos valores. Há também o detalhe do uso de **alias** (`edu`, `summary`, `Country`, `Value` e `Code`) para facilitar a escrita e leitura da query e o entendimento das colunas que serão projetadas. Por fim, o resultado projetado são todas as tuplas que estão relacionadas pelos valores de suas chaves em ambas as relações.

### Exercício 2: Qual a quantia média de dinheiro investida por região na área de educação?

#### Resolução

```sql
SELECT
	AVG(edu.value) AS Avarage_Value,
	summary.region as Region
FROM 
	`bigquery-public-data.world_bank_intl_education.international_education` AS edu
INNER JOIN
	`bigquery-public-data.world_bank_intl_education.country_summary` AS summary
ON
	edu.country_code = summary.country_code
WHERE
	summary.region IS NOT NULL
GROUP BY 
	summary.region
ORDER BY
	Avarage_Value DESC
```

#### Explicação

Mais uma vez, o resultado projetado por essa consulta será todos as tuplas relacionadas pelos valores de suas chaves, como podemos ler na instrução `ON`. Contudo, esta consulta realiza um filtro (`WHERE`) para garantir que sejam projetados apenas os valores diferentes de `NULL`. Além disso, os valores são agrupados (`GROUP BY`) por região (as sete regiões do planeta: América do Norte, Leste da Asia e Pacífico, Sul da Asia, Europa e Asia Central, Oriente Médio e Norte da África, América Latina e Caribe, África Subsaariana) e classificados em ordem decrescente, isto é, do maior para o menor, pelo valor da média de investimento em educação que é calculada na cláusula `SELECT` com a função de agregação `AVG(edu.value)`.   

### Exercício 3: Listar as universidades e faculdades da Divisão I da NCAA, além dos mascotes (se houver) e do número de vitórias e derrotas. . 

#### Resolução

```sql
SELECT  
  seasons.market AS University,
  seasons.name AS Team_Name,
  seasons.wins AS Wins,
  seasons.losses AS Losses,
  seasons.ties AS Ties,
  mascots.mascot AS Team_Mascot
FROM
  `bigquery-public-data.ncaa_basketball.mbb_historical_teams_seasons` AS seasons
LEFT JOIN
  `bigquery-public-data.ncaa_basketball.mascots` AS mascots
ON
  seasons.team_id = mascots.id
WHERE
  seasons.season = 1984
AND
  seasons.division = 1
ORDER BY
  seasons.market
```

#### Explicação

Nessa consulta, projetamos as variáveis `market`, `name`, `wins`, `losses` e `ties`, da tabela `mbb_historical_teams_seasons` que contém os registros de todos os jogos de todas as temporadas da NCAA.
Combinamos essas projeção com a variável `mascot` da tabela `mascots`, que mantém os registros de todos os mascotes das universidades inscritas na NCAA. Como nem todas as universidades inscritas na liga possuem um mascote, elaboramos a query de maneira que possamos visualizar todos os registros da tabela da esquerda (`mbb_historical_teams_seasons`) relacionados com os registros correspondentes da tabela da direita (`mascots`). Usamos a instrução `LEFT JOIN` para retornar as tuplas correspondentes entres ambas as tabelas juntamente com as que não possuem correspondência. Estas últimas são preenchidas com valor `NULL`. Por fim, a query possui uma condição: Queremos todos os registros da temporada de 1984 e que sejam da primeira divisão. A cláusula `WHERE` com o operador lógico `AND` realiza essa operação. Os resultados, então, são organizados em ordem alfabética pela variável `market` que representa a universidade inscrita na liga.

---
