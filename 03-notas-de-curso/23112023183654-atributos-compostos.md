---
aliases:
  - Atributos Compostos
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
# Atributos Compostos

Em modelagem de dados, um atributo composto é um atributo que pode ser subdividido em partes menores, chamadas subatributos. Esses subatributos, por sua vez, têm características individuais e tipos de dados próprios. Em contraste com [[23112023183417-atributos-simples|Atributos Simples]], atributos compostos são formados por uma coleção de informações relacionadas.

Por exemplo, considere o atributo composto "Endereço" de uma entidade "Cliente". O atributo "Endereço" pode ser subdividido em subatributos como "Rua", "Cidade", "Estado" e "CEP". Cada um desses subatributos representa uma parte específica do endereço completo.

A utilização de atributos compostos é útil quando há a necessidade de representar informações mais detalhadas e estruturadas dentro de uma entidade. Isso ajuda a organizar os dados de forma mais granular e facilita a compreensão e a manipulação das informações.

Em [[23112023195552-diagramas-de-entidade-relacionamento-der|Diagramas de Entidade-Relacionamento (DER)]], os atributos compostos são frequentemente representados por meio de uma estrutura hierárquica para mostrar a relação entre o atributo composto e seus subatributos (veja: [[23112023195019-simbologia-para-modelagem-conceitual-de-bancos-de-dados|Simbologia para Modelagem conceitual de Bancos de Dados]]). A identificação de atributos simples e compostos é crucial durante o processo de design de banco de dados para garantir que a estrutura de dados seja eficiente e atenda aos requisitos do sistema.

---
## Referencias