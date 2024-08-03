---
aliases:
  - Atributos Multivalorados
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
# Atributos Multivalorados

Atributos multivalorados são atributos em um modelo de dados que podem ter mais de um valor para uma única entidade. Em outras palavras, eles podem armazenar múltiplos valores para uma instância específica da entidade. Isso contrasta com [[23112023183417-atributos-simples|Atributos Simples]], que normalmente armazenam apenas um valor para cada instância da entidade.

Por exemplo, considere uma entidade "Livro" que possui um atributo multivalorado chamado "Autores". Cada livro pode ter mais de um autor, e o atributo "Autores" armazenaria uma lista de valores, representando os diferentes autores associados a esse livro.

A utilização de atributos multivalorados é uma maneira de modelar a complexidade do mundo real, onde certas características de uma entidade podem ter várias instâncias associadas a elas. No entanto, a implementação de atributos multivalorados pode variar dependendo do sistema de gerenciamento de banco de dados utilizado.

Alguns modelos de dados normalizam atributos multivalorados criando uma tabela separada que está relacionada à tabela principal (veja: [[23112023172911-conceito-de-normalização-de-bancos-de-dados|Conceito de Normalização de Bancos de Dados]]), enquanto outros sistemas incorporam listas ou arrays diretamente nos registros das entidades. A escolha depende dos requisitos específicos do sistema e das práticas de modelagem de dados adotadas.

---
## Referencias