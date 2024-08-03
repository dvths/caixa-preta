---
aliases:
  - Emular sequencias é um dos usos mais comuns dos métodos especiais
titulo_livro: Python Fluente
topico:
  - Uma coleção de sequências
ano: 2023
autor:
  - Luciano Ramalho
tags:
  - "#python"
  - python_sequências
  - python_opp
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
# Emular sequencias é um dos usos mais comuns dos métodos especiais

As sequencias são estruturas fundamentais na linguagem python. [Uma sequência é uma coleção ordenada de elementos](19072023160014-uma-sequência-é-uma-coleção-ordenada-de-elementos-na-qual-cada-elemento-possui-uma-posição-específica-identificada-pelo-seu-índice.md) que recebem um tratamento uniforme e um rico conjunto de operações como iteração, fatiamento, ordenação e concatenação. 

Como o [Python Data Model é uma representação abstrata da própria linguagem Python](15052023101415-python-data-model-é-uma-representação-abstrata-da-própria-linguagem-python.md), tudo [o que construímos na linguagem se comunica com os recursos fundamentais da própria linguagem por meio de métodos especiais](15052023120859-o-que-construímos-na-linguagem-se-comunica-com-os-recursos-fundamentais-da-própria-linguagem-por-meio-de-métodos-especiais.md) (dunder). Graças a esses métodos dunder, os tipos criados pelo usuário podem se comportar de forma tão natural quanto os tipos embutidos. Saber disso é de extrema importância principalmente quando você estiver programando uma biblioteca ou framework, pois, os usuários irão querer que suas classes se comportem como as classes fornecidas pelo Python.  

O exemplo `FrenchDeck`, é utilizado para demonstrar como um tipo do usuário pode se comportar como um objeto embutido do python:

```python
import collections

Card = collections.namedtuple("Card", ["rank", "suit"])

class FrenchDeck:
    ranks = [str(n) for n in range(2, 11)] + list("JQKA")
    suits = "♠ ♦ ♣ ♥".split()

    def __init__(self):
        self._cards = [Card(rank, suit) for suit in self.suits for rank in self.ranks]

    def __len__(self):
        return len(self._cards)

    def __getitem__(self, position):
        return self._cards[position]


```

Com o uso dos métodos dunder `__len__` e `__getitem__` construímos uma classe de objetos capaz de ser usada em qualquer lugar onde uma sequencia for esperada. 

Se quisermos saber o comprimento do baralho, podemos chamar o método `len()`:

```python
deck = FrencheDeck()
len(deck)
# 52
```

Também podemos iterar pelas cartas do baralho como faríamos com qualquer sequência:

```python
for c in deck: print(c)

# Card(rank='2', suit='♠')
# Card(rank='3', suit='♠')
# Card(rank='4', suit='♠')
# Card(rank='5', suit='♠')
# Card(rank='6', suit='♠')
# Card(rank='7', suit='♠')
# Card(rank='8', suit='♠')
# Card(rank='9', suit='♠')
# Card(rank='10', suit='♠')
...
# Card(rank='J', suit='♥')
# Card(rank='Q', suit='♥')
# Card(rank='K', suit='♥')
# Card(rank='A', suit='♥')

```

Claro que também é possível acessar as cartas do baralho por posição e por fatiamento:
```python
# acessando as 5 primeiras cartas do baralho
deck[:5]
#[Card(rank='2', suit='♠'),
# Card(rank='3', suit='♠'),
# Card(rank='4', suit='♠'),
# Card(rank='5', suit='♠'),
# Card(rank='6', suit='♠')]

# acessando a última carta do baralho
deck[-1]
#Card(rank='A', suit='♥')


```

O que possibilita que o objeto `deck` tenha esse poder, é a implementação do métodos dunder `__len__()`, que implementa a função embutida `len()` e o método `__getitem__()` que fornece o suporte à iteração, fatiamento usando o operador `[]` e a interpretação de índices negativos. Estes métodos formam o que, em python, é chamado de [**protocolo de sequencia**](https://docs.python.org/pt-br/3/c-api/sequence.html?highlight=protocolos). [Em orientação a objetos, um protocolo é uma interface informal que especifica métodos que um objeto precisa oferecer para cumprir um papel](21072023002325-em-orientação-a-objetos-um-protocolo-é-uma-interface-informal-que-especifica-métodos-que-um-objeto-precisa-oferecer-para-cumprir-um-papel.md). Tecnicamente, o exemplo `FrenchDeck` demonstra um **objeto protocolo**.      

Seguir um protocolo pode exigir a implementação de muitos métodos. A boa notícia é que um protocolo não é algo obrigatório, o que significa que podemos cumprir apenas parte dele, por exemplo: Apenas o método `__getitem__` é necessário para podermos iterar em uma sequencia. Portanto, poderíamos optar por não sobrescrever o método `__len__`. Nesse sentido, é claro que precisamos ter certeza do contexto em que este objeto está inserido para que se comporte conforme a necessidade.  

----
## Referências

- [Python Fluente, Capitulo 1.2, Um baralho pythônico](https://pythonfluente.com/#pythonic_card_deck)
- [Python Fluente, Capitulo 12.2, Protocolos e ducky typing](https://pythonfluente.com/#protocol_duck_section)



[Python Fluente - Capitulo 2: Sequências](https://pythonfluente.com/#sequences)
[Python Fluente - Capitulo 11: Um objeto Pythônico](https://pythonfluente.com/#pythonic_objects)
[Python Fluente - Capitulo 12: Métodos especiais para Sequências](https://pythonfluente.com/#user_defined_sequences)
[Live de Python #32](https://www.youtube.com/watch?v=YXGrOF1KIKI&t=10s&ab_channel=EduardoMendes)