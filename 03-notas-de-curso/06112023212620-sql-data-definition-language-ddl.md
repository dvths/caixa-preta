---
aliases:
  - Sql Data Definition Language DDL
tags:
  - sql
  - sql_ddl
  - revisão
nome-do-curso: "Bancos de Dados Relacionais e SQL: Do Básico ao Avançado"
topico:
  - 55.49 - Comandos DDL
link: https://www.udemy.com/course/bancos-de-dados-relacionais-basico-avancado/
instrutor: Felipe Mafra
local:
  - Udemy
tipo-curso:
  - online
sr-due: 2023-11-09
sr-interval: 3
sr-ease: 250
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Sql Data Definition Language DDL

- Os comandos DDL são responsáveis pela definição da estrutura dos dados, tipos e criação e manipulação das tabelas do banco de dados.

### Exemplos

```sql
-- Cria uma nova tabela
CREATE TABLE PRODUTO(
	IDPRODUTO INT PRIMARY KEY AUTO_INCREMENT,
	NOME_PRODUTO VARCHAR(30) NOT NULL,
	PRECO INT,
	FRETE FLOAT(10,2) NOT NULL
	);
```

```sql
-- Altera o nome de uma coluna e seu tipo coma restrição NOT NULL
ALTER TABLE PRODUTO
CHANGE PRECO VALOR_UNITARIO INT NOT NULL;
```

```sql
-- Altera apenas o tipo do dado (também pode adicionar a restrição NOT NULL)
ALTER TABLE PRODUTO
MODIFY VALOR_UNITARIO VARCHAR(50) NOT NULL;
```

>[!nota] A utilização de `MODIFY` e `CHANGE` pode ser definida de acordo com a necessidade, ambos os comandos realizam tarefas parecidas, contudo, para modificar o tipo do dado, é preferível utilizar o MODIFY. Note que utilizando CHANGE, teríamos que escrever o nomo da coluna duas vezes para modificar o tipo, isso pode prejudicar a legibilidade. Por isso é preferível utilizar o `MODIFY`.


```sql
-- Adiciona uma coluna na tabela
ALTER TABLE PRODUTO
ADD PESO FLOAT(10,2) NOT NULL;
```

```sql
-- Derruba uma coluna da tabela
ALTER TABLE PRODUTO
DROP COLUMN PESO;
```

```sql
-- Adiciona, derruba e move uma coluna da tabela
ALTER TABLE PRODUTO
ADD COLUMN PESO FLOAT(10,2) NOT NULL
AFTER NOME_PRODUTO;

ALTER TABLE PRODUTO
DROP COLUMN PESO;

ALTER TABLE PRODUTO
ADD COLUMN PESO FLOAT(10,2) NOT NULL
FIRST;
```


---
## Referencias