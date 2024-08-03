---
aliases:
  - Em orientação a objetos
  - um protocolo é uma interface informal que especifica métodos que um objeto precisa oferecer para cumprir um papel
titulo_livro: Python Fluente
topico:
  - Interfaces, Protocolos e ABCs
ano: 2023
autor:
  - Luciano Ramalho
tags:
  - python
  - python_opp
  - python_protocolos
  - revisão
sr-due: 2023-11-06
sr-interval: 4
sr-ease: 275
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

---
# Em orientação a objetos, um protocolo é uma interface informal que especifica métodos que um objeto precisa oferecer para cumprir um papel


[Emular sequencias é um dos usos mais comuns dos métodos especiais](15072023170045-emular-sequencias-é-um-dos-usos-mais-comuns-dos-métodos-especiais.md). Isso só se torna possível graças aos protocolos de sequencia. Embora não seja algo explicito no código, se podemos iterar, fatiar e obter itens pelo índice, então é uma sequencia. O exemplo `FrenchDeck` é uma sequencia porque se comporta como uma. Este, na verdade, é um conceito conhecido como [_duck typing_](https://pt.wikipedia.org/wiki/Duck_typing).  

<mark class="hltr-red">Duck tuping é um protocolo dinâmico?</mark>






----
## Referências 

- [Python Fluente, Capitulo 13, Interfaces, Protocolos e ABCs](https://pythonfluente.com/#two_kinds_protocols_sec
- [Python Fluente, Capitulo 12.2, Protocolos e ducky typing](https://pythonfluente.com/#protocol_duck_section)