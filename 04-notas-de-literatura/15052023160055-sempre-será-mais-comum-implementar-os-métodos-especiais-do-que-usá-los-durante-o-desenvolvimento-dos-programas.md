---
aliases:
  - Sempre será mais comum implementar os métodos especiais do que usá-los durante
titulo_livro: Python Fluente
autor:
  - Luciano Ramalho
ano: 2023
tags:
  - python
  - python_metodos_especiais
topico:
  - Modelo de dados do Python
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

---
# Sempre será mais comum implementar os métodos especiais do que usá-los durante o desenvolvimento dos programas

Ramalho indica que a implementação dos métodos especiais é feita quando "queremos que nossos objetos suportem e interajam com os elementos fundamentais da linguagem" (veja: [[15052023120859-o-que-construímos-na-linguagem-se-comunica-com-os-recursos-fundamentais-da-própria-linguagem-por-meio-de-métodos-especiais|como o que construímos na linguagem se comunica com os recursos fundamentais da própria linguagem]]). Esses elementos fundamentais são:

-   Coleções
-   Acesso a atributos
-   Iteração (incluindo iteração assíncrona com `assync for`
-   Sobrecarga (overloading) de operadores
-   Invocação de funções e métodos
-   Representação e formatação de strings
-   Programação assíncrona usando `await`
-   Criação e destruição de objetos
-   Contextos gerenciados usando instruções `with` ou `async with`

No entanto, ele ressalta que, nosso código não deve conter muitas chamadas diretas à métodos especiais. Isso tem uma razão simples: O [[15052023101415-python-data-model-é-uma-representação-abstrata-da-própria-linguagem-python|python data model é uma representação abstrata da própria linguagem python]] [[#^7c72ee|e existem funções -- desenvolvidas no próprio modelo -- relacionadas a eles para realizarem esse trabalho]] que, segundo o Ramalho, são mais rápidas (como `len()`, `iter()`, `str()` , por exemplo) do que chamadas diretas. 

Isso significa que, [[#^209772|na maior parte das vezes, a chamada a um método especial é implícita]], ou seja, [[15052023120859-o-que-construímos-na-linguagem-se-comunica-com-os-recursos-fundamentais-da-própria-linguagem-por-meio-de-métodos-especiais|o que construímos na linguagem se comunica com os recursos fundamentais da linguagem]]). Nos referimos a essas funções como [funções embutidas](https://docs.python.org/pt-br/3.7/library/functions.html) (built-in)ou funções nativas. Isso porque são funções da própria interface da linguagem que lidam com os tipos embutidos (ou tipos nativos) que, por sua vez, são abstrações criadas a partir de `object` e definem a [hierarquia padrão dos tipos da linguagem](https://docs.python.org/pt-br/3/reference/datamodel.html#the-standard-type-hierarchy).

---
## Referencias:
