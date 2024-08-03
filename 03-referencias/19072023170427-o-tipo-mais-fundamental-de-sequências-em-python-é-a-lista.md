---
aliases:
  - O tipo mais fundamental de sequências em python é a lista
titulo_livro: Python Fluente
topico:
  - Uma coleção de sequências
ano: 2023
autor:
  - Luciano Ramalho
tags:
  - "#python"
  - python_estruturas_de_dados
  - python_listas
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
# O tipo mais fundamental de sequências em python é a lista

[Uma sequência é uma coleção ordenada de elementos](19072023160014-uma-sequência-é-uma-coleção-ordenada-de-elementos-na-qual-cada-elemento-possui-uma-posição-específica-identificada-pelo-seu-índice.md). 

Como tal, a lista é um contêiner mutável que armazena objetos de qualquer tipo.  

```python
my_list = [8.6, 'Cat', {'chave': 'valor'}]
```

Usamos o operador `[]` para acessarmos os elementos da lista:

```python

my_list[0] # 8.6
my_list[1] # Cat
my_list[2] # {'chave': 'valor'}

```

Como contêiner mutável, podemos modificá-lo:

```python
my_list[2] = 'modificado'
print(my_list) # [8.6, 'Cat', 'modificado']
```

Além do mais, podemos usar os métodos de manipulação de listas para acrescentar (`append()`), remover (`remove()`), remover o último elemento (`pop()`), inserir (`insert()`), ordenar (`sort()`), localizar um índice (`index()`) e limpar a lista (`clear()`).

Por fim, como em todas as sequências, iteramos por uma lista:

```python
for i in my_list: print(i)
# 8.6
# Cat
# {'chame': 'valor'}
```

Contudo, o python possui um recurso sintático potente para criação de listas: Compreensão de listas ou **List Comprehensions**. [Dominar as compreensões de lista abre as portas para entendermos as expressões geradoras](19072023174109-dominar-as-compreensões-de-lista-abre-as-portas-para-entendermos-as-expressões-geradoras.md).









----
## Referências 