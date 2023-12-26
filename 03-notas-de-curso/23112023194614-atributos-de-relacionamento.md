---
aliases:
  - Atributos de Relacionamento
tags:
  - sql
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Atributos de Relacionamento

Os atributos de relacionamento são características adicionais associadas a uma associação ou ligação específica entre entidades em um modelo de dados (veja: [[23112023182611-relacionamentos|Relacionamentos]]). Em outras palavras, enquanto os atributos de entidade descrevem as propriedades individuais de uma entidade, os atributos de relacionamento fornecem informações específicas sobre a relação entre duas ou mais entidades.

Por exemplo, considere um relacionamento "Empresta" entre as entidades "Biblioteca" e "Livro". Esse relacionamento pode ter um atributo chamado "Data de Empréstimo", que registra quando um livro foi emprestado da biblioteca. Nesse caso, "Data de Empréstimo" é um atributo de relacionamento que fornece detalhes específicos sobre a instância particular de empréstimo entre uma biblioteca e um livro.

Os atributos de relacionamento são úteis quando a associação entre entidades é mais complexa e requer informações específicas além da simples existência da relação. Esses atributos podem conter dados como datas, quantidades, estados, ou qualquer outra informação relevante para o relacionamento.

Em [[23112023195552-diagramas-de-entidade-relacionamento-der|Diagramas de Entidade-Relacionamento (DER)]], os atributos de relacionamento são geralmente representados ao longo das linhas que conectam as entidades (veja: [[23112023195019-simbologia-para-modelagem-conceitual-de-bancos-de-dados|Simbologia para Modelagem conceitual de Bancos de Dados]]), indicando a natureza e os detalhes da relação. Eles contribuem para uma modelagem mais precisa e rica, capturando informações específicas associadas às interações entre entidades.


---
## Referencias