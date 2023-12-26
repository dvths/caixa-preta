---
aliases:
  - Conceito de Normalização de Bancos de Dados
tags:
  - sql
  - sql_normalização
  - sql_integridade_referencial
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Conceito de Normalização de Bancos de Dados

Normalização é o processo de organização dos dados de um banco de dados relacional. Tem o objetivo de eliminar a redundância e garantir a integridade dos dados.

Esse processo de organização dos dados especifica um de regras que devem ser seguidas para que um banco de dados relacional seja considerado normalizado.

Essas regras são divididas em níveis chamados de:

- [[23112023172230-primeira-forma-normal|Regras da Primeira Forma Normal]],
- [[23112023173238-regras-da-segunda-forma-normal|Regras da Segunda Forma Normal]]
- [[23112023173616-regras-da-terceira-forma-normal|Regras da Terceira Forma Normal]].

Existem outros níveis, contudo é muito comum que um banco seja considerado normalizado quando atinge a terceira forma normal.

A normalização é fundamental para que o banco de dados seja coerente e confiável.



---
## Referencias