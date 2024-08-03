---
aliases:
  - Uma sequência é uma coleção ordenada de elementos
  - na qual cada elemento possui uma posição específica identificada pelo seu índice
titulo_livro: Python Fluente
topico:
  - Uma coleção de sequências
ano: 2023
autor:
  - Luciano Ramalho
tags:
  - "#python"
  - python_opp
  - python_sequências
  - revisão
sr-due: 2023-11-06
sr-interval: 4
sr-ease: 270
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

---
# Uma sequência é uma coleção ordenada de elementos, na qual cada elemento possui uma posição específica identificada pelo seu índice

Em python, as sequencias podem ser agrupadas da seguinte forma:

- **Sequencias contêiner**: Podem armazenar itens de tipos diferentes, isto é, manter referências para objetos que contém que podem ser de qualquer tipo:
	- `list`
	- `tuple`
	- `collections.deque`
- **Sequencias planas**: Armazena o valor de seu conteúdo em seu próprio espaço de memória.
	- `str`
	- `bytes`
	- `array.array`

![](sequencias_conteiner_e_plana.png)

A figura a cima ilustra a diferença: a tupla armazena objetos de tipos diferentes, um tipo float, uma string e uma lista. Ou seja, um array de referências para seus itens que, por sua vez, são objetos Python separados que também podem fazer referência a outros objetos Python, como a lista, por exemplo que armazena dois items do tipo float (isto é, outros dois objetos). Enquanto isso, o array Python é um único objeto com três números de ponto flutuante. 

>[!note] O quadrado em cinza representa o cabeçalho do objeto que contém metadados. Por exemplo, um float, tem um campo de valor e dois campos de metadados
>- `ob_refcnt`: a contagem de referências ao objeto
>- `ob_type`: um ponteiro para o tipo do objeto
>- `ob_fval`: um `double` de C mantendo o valor do float

- Sequências planas são mais compactas, mas limitadas a manter valores primitivos (bytes, ints e floats). 

Outra forma de agrupar as sequências é por mutabilidade:

- **Sequências mutáveis**: sequências mutáveis são coleções ordenadas de elementos que podem ser modificadas após a sua criação. Isso significa que é possível adicionar, remover ou alterar elementos individuais dentro da sequência sem criar uma nova sequência do zero:
	- `list`
	- `bytearray`
	- `array.array`
	- `collections.deque`
- **Sequências imutáveis**: Ao contrário do anterior, estas são sequências que não podem ser modificadas uma vez que criadas:
	- `tuple`
	- `str`
	- `bytes`

[O tipo mais fundamental de sequências em python é a lista](19072023170427-o-tipo-mais-fundamental-de-sequências-em-python-é-a-lista.md)

----
## Referências 
[Python Fluente - Capitulo 2.2 - Visão geral das sequências embutidas](https://pythonfluente.com/#_uma_vis%C3%A3o_geral_das_sequ%C3%AAncias_embutidas)