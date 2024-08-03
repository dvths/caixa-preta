---
aliases:
  - Dominar as compreensões de lista abre as portas para entendermos as expressões geradoras
titulo_livro: Python Fluente
topico:
  - Compreensões de listas e expressões geradoras
ano: 2023
autor:
  - Luciano Ramalho
tags:
  - python
  - python_sequências
  - python_listcomps
  - revisão
sr-due: 2023-11-06
sr-interval: 4
sr-ease: 272
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

---
# Dominar as compreensões de lista abre as portas para entendermos as expressões geradoras

Uma compreensão de lista é um recurso sintático da linguagem que permite que escrevamos código mais legível e mais rápido.

[Formalmente, uma compreensão de lista é uma maneira compacta de processar todos ou parte dos elementos em uma sequência e retornar uma lista com os resultados](https://docs.python.org/3/glossary.html#term-list-comprehension)

O exemplo a seguir, retirado do livro ilustra o uso deste recurso:

```python
# Cria uma lista de pontos de código Unicode a partir de uma string
symbols = '$¢£¥€¤'
codes = []
for symbol in symbols:
	codes.append(ord(symbol))

codes
# [36, 162, 163, 165, 8364, 164]
```

```python
symbols = '$¢£¥€¤'
codes = [ord(symbol) for symbol in symbols]

codes
# [36, 162, 163, 165, 8364, 164]
```

Compreensões de lista criam listas a partir de sequências ou de qualquer outro iterável, filtrando e transformando os itens.

Um exemplo desse comportamento é a possibilidade de criar listas a partir do produto cartesiano de dois ou mais iteráveis:

```python
S = [ '♥', '♠', '♦', '♣']
R = ['A', 'Q', 'K']

RxS = [(n, l) for n in S for l in R ]

RxS

[('♥', 'A'),
 ('♥', 'Q'),
 ('♥', 'K'),
 ('♠', 'A'),
 ('♠', 'Q'),
 ('♠', 'K'),
 ('♦', 'A'),
 ('♦', 'Q'),
 ('♦', 'K'),
 ('♣', 'A'),
 ('♣', 'Q'),
 ('♣', 'K')]

```

[Emular sequencias é um dos usos mais comuns dos métodos especiais](15072023170045-emular-sequencias-é-um-dos-usos-mais-comuns-dos-métodos-especiais.md)

- [ ] Descrição das expressões geradoras




---
## Referências 

[Python Fluente - Capitulo 2.3 - Compreensões de Lista e Expressões Geradoras](https://pythonfluente.com/#_compreens%C3%B5es_de_listas_e_express%C3%B5es_geradoras)