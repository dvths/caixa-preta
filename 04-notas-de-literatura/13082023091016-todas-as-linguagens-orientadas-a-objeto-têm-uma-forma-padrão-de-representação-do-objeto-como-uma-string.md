---
titulo_livro: Python Fluente
ano: 2023
autor:
  - Luciano Ramalho
aliases:
  - Todas as linguagens orientadas a objeto têm uma forma padrão de representação do objeto como uma string
topico:
  - Representações de Objetos
tags:
  - "#python"
  - python_opp
  - python_data_model
  - python_metodos_especiais
  - revisão
sr-due: 2023-11-06
sr-interval: 4
sr-ease: 270
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%
---
# Todas as linguagens orientadas a objeto têm uma forma padrão de representação do objeto como uma string


[[15052023120859-o-que-construímos-na-linguagem-se-comunica-com-os-recursos-fundamentais-da-própria-linguagem-por-meio-de-métodos-especiais#^84dc66|Representações de objetos geralmente utilizam os métodos especiais `__repr__() e __str__()`]]. 

- [[15052023120859-o-que-construímos-na-linguagem-se-comunica-com-os-recursos-fundamentais-da-própria-linguagem-por-meio-de-métodos-especiais#Implementação de `__repr__()`|__repr__()]]: Devolve o objeto como o desenvolvedor quer vê-lo. É o que aparece no interpretador do Python o no debugger. Em outras palavras, emula o código-fonte utilizado para construir a instancia.

- [[15052023120859-o-que-construímos-na-linguagem-se-comunica-com-os-recursos-fundamentais-da-própria-linguagem-por-meio-de-métodos-especiais#^d36d5|__str__()]]: Devolve o objeto como o usuário que vê-lo. É o que aparece quando passamos um objeto para `print()`.

Ambos suportam as funções embutidas `repr()` e `str()`.

Contudo, existem outros dois métodos alternativos para representação de objetos:

- `__bytes__`: Este é análogo ao `__str__()`. Ele é chamado por `bytes()` para representar um objeto por bytes.
- `__format__`: Usado por  _f-strings_, pela função embutida `format()` e pelo método `str.format()`. Todos chamam `obj.format(format_spec)` para obter versões de exibição de objetos usando códigos de formatação especiais. 


----
## Referências 