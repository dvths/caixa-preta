---
aliases:
  - Integridade Referencial
tags:
  - sql
  - sql_integridade_referencial
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Integridade Referencial

A Integridade Referencial é um conceito fundamental em bancos de dados relacionais. Se trata da ideia de que **todas as referências** a dados em outras tabelas sejam consistentes e válidas de maneira que a precisão e a consistência do banco de dados seja garantida.

Integridade Referencial significa não haver inconsistência nos dados, como registros órfãos ou referências a dados que não existem.

A Integridade Referencial é implementada através de um conjunto de regras e procedimentos que, chamamos de [[23112023172911-conceito-de-normalização-de-bancos-de-dados|Normalização]], juntamente com os conceitos de [[23112023170931-chave-estrangeira|Chave Estrangeira]], que são campos em uma tabela que referenciam a [[23112023171427-chave-primária|Chave Primária]] de outra tabela. Quando uma Chave Estrangeira é definida em uma tabela, o banco de dados garante que todas as referências a essa chave primária em outras tabelas sejam válidas.

Isso quer dizer que, caso haja alguma alteração em uma chave primária, o banco de dados garante que as tabelas referenciadas sejam atualizadas automaticamente ou não permite a alteração.




---
## Referencias