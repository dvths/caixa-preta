---
classe:
  - GDAC5
topico:
  - Como agregar dados para análise
nome-do-curso: Google Data Analytics Certification
aliases:
  - As funções COUNT e COUNT DISTINCT na agregação de dados em SQL
instrutor: 
tags:
  - "#sql"
  - GDCA
  - sql_dml
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#GDCA 
____
# As funções COUNT e COUNT DISTINCT na agregação de dados em SQL 

Após compreender o conceito de [[16062023105729-agregação-de-dados-utilizando-join-em-sql|agregação de dados utilizando JOIN em SQL]] , precisamos entender como as funções `COUNT` e `COUNT DISTINCT` podem ser úteis para obtermos os resultados que desejamos.

- A função `COUNT` realiza a contagem de todos os valores que correspondem a uma coluna ou tabela específica, exceto os valores `NULL`.
	- **Sintaxe**
		- `SELECT COUNT(colunm_name) FROM table_name ` retorna todos os valores de `colunm_name`:
		- `SELECT COUNT(*) FROM table_name` retorna todos os valores de `table_name`

- A função `COUNT DISTINCT` realiza a contagem de todas as tuplas distintas, isto é, conta apenas uma vez cada valor em uma coluna:
	- **Sintaxe**
		- `SELECT COUNT(DISTINCT column_name) FROM table_name`