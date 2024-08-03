---
aliases:
  - Participação Total
tags:
  - sql
  - modelagem_de_databases
  - databases_relacionais
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Participação Total

Participação total é um conceito importante para garantir a [[23112023170829-integridade-referencial|Integridade Referencial]] do banco de dados, impedindo a criação de registros órfãos. O conceito indica que todos os registros de uma tabela devem estar relacionados a todos os registros de uma outra tabela relacionada.

Isso quer dizer que a participação total ocorre quando todos os registros de uma tabela dependem de outros registro em outra tabela para existir não podendo existir nenhum registro na tabela dependente sem uma correspondência na tabela principal. 

Como exemplo, podemos pensar em duas tabelas: "departamento" e "funcionários". Se essa for uma relação de participação total, significa que não podemos ter um "funcionário" sem um departamento e vice-versa.

Nos [[23112023195552-diagramas-de-entidade-relacionamento-der|Diagramas de Entidade-Relacionamento (DER)]], uma participação total é indicada pelo simbolo de uma linha dupla.




---
## Referencias