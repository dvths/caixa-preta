---
aliases:
  - Python Data Model é uma representação abstrata da própria linguagem Python
titulo_livro: Python Fluente
topico:
  - Modelo de dados do Python
autor:
  - Luciano Ramalho
ano: 2023
tags:
  - python
  - python_data_model
  - python_opp
  - "#revisão"
sr-due: 2023-12-01
sr-interval: 23
sr-ease: 290
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

-- -
# Python Data Model é uma representação abstrata da própria linguagem Python

Um modelo de dados é uma abstração que formaliza, organiza ou padroniza a forma como elementos de dados se relacionam entre si e com entidades do mundo real. Em outras palavras, é o modelo de dados que determina a estrutura dos dados, define como um objeto deve ser construído e como este objeto se comportará tanto como representação de algo, quanto em relação aos objetos que o compõe ou outros objetos externos. 

Conceitualmente, o objetivo de um modelo de dados é dar suporte para o desenvolvimento de um sistema, isto é, um conjunto de elementos, concretos ou abstratos, intelectualmente organizado.

No contexto do Python, podemos interpretar seu modelo de dados como uma representação abstrata de si mesma que "formaliza as interfaces dos elementos constituintes da própria linguagem" (Ramalho, 2023), especificando a forma como os objetos são construídos, manipulados e destruídos.

Na prática, é esse conceito que está por trás da afirmação recorrente em muitos livros sobre Python: "Tudo em Python é um objeto". Se tudo em Python é objeto, e todo objeto é a concretização de uma classe, logo, todas as classes convergem para um único ponto. E esse ponto se chama `object`. 

A classe `object` é a base para criação de todas as outras classes em Python. Ou seja, todas as instâncias criadas a partir de qualquer classe, seja criada pelo usuário ou embutida na linguagem, de certa forma, também são instâncias de `object`. Ela fornece um conjunto de atributos e métodos disponíveis implicitamente para todas as classes derivadas. Por agirem na maioria das vezes por trás das cortinas, são chamados de Métodos Especiais, mas a comunidade se refere a eles como "Dunders" (uma combinação das palavras *double underscores* em referências à sua sintaxe). São esses métodos que determinam [[15052023120859-o-que-construímos-na-linguagem-se-comunica-com-os-recursos-fundamentais-da-própria-linguagem-por-meio-de-métodos-especiais|como o que construímos na linguagem se comunica com os recursos fundamentais da própria linguagem]].  ^c010df

Uma classe que implementa um determinado conjunto de métodos especiais se comportará tão naturalmente quanto os tipos embutidos do Python sem a necessidade de herdar o comportamento de outros tipos. Isso é possível porque essas combinações obedecem certos [[Protocolos Genéricos]] que determinam a semântica válida para aquele objeto. Em outras palavras, se um tipo se comporta como uma sequencia, então ele é uma sequencia. Isso significa que os objetos são considerados de um determinado tipo de acordo com os métodos que implementam, em vez de serem declarados como tal. Esse conceito é conhecido como [Duck Typing](https://pt.wikipedia.org/wiki/Duck_typing), uma filosofia de tipagem que se concentra no comportamento de um objeto, em vez de sua classe ou tipo declarado. 

Por fim, é o design do modelo de dados do python que garante:
- Consistência
- Interoperabilidade
- Polimorfismo
- Legibilidade e fácil escrita
- Eficiência
- Extensibilidade
- Auto grau de Abstração

Todas características fundamentais para uma linguagem de programação e que colocam o Python como uma das linguagens mais importantes do mundo há décadas.

---
