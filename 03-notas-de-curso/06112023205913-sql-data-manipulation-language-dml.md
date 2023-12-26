---
aliases:
  - Sql - Data Manipulation Language - DML
tags:
  - sql
  - sql_dml
  - "#revisão"
nome-do-curso: "Bancos de Dados Relacionais e SQL: Do Básico ao Avançado"
link: https://www.udemy.com/course/bancos-de-dados-relacionais-basico-avancado/
topico:
  - 54.48 - Comandos DML
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
# Data Manipulation Query

- É a categoria de comandos SQL responsável pela manipulação dos dados no banco de dados.

### Grupos de comandos DML:
- INSERT
- FILTER
- UPDATE
- DELETE

Exemplos:

```sql
INSERT INTO ENDERECO VALUES(NULL,'RUA JOAQUIM SILVA','ALVORADA','NITEROI','RJ',7);
```

```sql
SELECT * FROM CLIENTE;
```

```sql
SELECT * FROM CLIENTE
WHERE SEXO = 'M';
```

```sql
SET SEXO = 'F'
WHERE ID_CLIENTE = 7;
```

```sql
SELECT * FROM CLIENTE
WHERE ID_CLIENTE = 8;
DELETE FROM CLIENTE WHERE IDCLIENTE = 8;
```

Veja [[06112023212620-sql-data-definition-language-ddl|Sql Data Definition Language DDL]]

---
## Referencias