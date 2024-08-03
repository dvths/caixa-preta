---
aliases:
  - O que construímos na linguagem se comunica com os recursos fundamentais da própria linguagem por meio de métodos especiais
titulo_livro: Python Fluente
topico:
  - Modelo de dados do Python
tags:
  - python
  - python_opp
  - "#python_metodos_especiais"
  - revisão
autor:
  - Luciano Ramalho
sr-due: 2023-11-06
sr-interval: 4
sr-ease: 274
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

---
# O que construímos na linguagem se comunica com os recursos fundamentais da própria linguagem por meio de método especiais 

[[15052023101415-python-data-model-é-uma-representação-abstrata-da-própria-linguagem-python|Python Data Model é uma representação abstrata da própria linguagem Python]]. A forma como nos comunicamos com os recurso fundamentais da linguagem em Python, é através dos métodos implicitamente disponíveis pela classe `object`: Os chamados _métodos especiais_ ou _protocolos genéricos_, informalmente chamados de métodos dunder (double undescore por razão da sua sintaxe). Os métodos dunder são invocados pelo interpretador quando queremos que nossos objetos suportem ou interajam com elementos fundamentais da linguagem, como:

- Coleções
- Acesso a atributos
- Iteração (incluindo iteração assíncrona com async for)
- Sobrecarga (overloading) de operadores
- Invocação de funções e métodos
- Representação e formatação de strings
- Programação assíncrona usando await
- Criação e destruição de objetos
- Contextos gerenciados usando as instruções with ou async with

A invocação de um método especial, geralmente ocorre quando usamos uma função embutida associada a ele, por exemplo: a instrução `for x in list: print x` gera uma invocação de `iter(x)` que, por sua vez pode chama `x.__iter__()`, se este método especial (`__iter__()`) estiver disponível para o objeto. 

Ter um método especial disponível significa apenas se ele foi implementado na classe que instancia o objeto. Isso porque através da implementação desses métodos, podemos criar objetos que respondam aos recursos da linguagem. Por exemplo, podemos implementar um objeto que emula o comportamento dos operadores `+` e `*`, como demonstrado no exemplo abaixo retirado do livro:

```python
import math

class Vector:
	def __init__(selv, x=0, y=0):
		self.x = x
		self.y = y

	def __repr__(self):
		return f'Vector({self.x!r}, {self.y!r})'

	def __abs__(self):
		return math.hypot(self.x, self.y)

	def __bool__(self):
	        return bool(self.x or self.y)

	def __add__(self, other):
		x = self.x + self.other.x 
		y = self.y + self.other.y
		return Vector(x, y)

	def __mul__(self, scalar):
		return Vector(self.x * scalar, self.y * scalar)

```

## Implementação de `__add__()` e `__mul__()`

O código acima implementa cinco métodos especiais que definem o comportamento de uma instancia de um objeto `Vetor`. Isto é, graças aos métodos `__add__` e `__mul__`, por exemplo, podemos realizar operações de adição e multiplicação:

```python
# Adição (__add__())
v1 = Vector(2, 4)
v2 = Vector(2, 1)

v1 + v2 # Vector(4, 5)
```

```python
# Multiplicação (__mul__())
v = Vector(3, 4)

v * 3 # Vector(9, 12)
```

## Implementação de `__abs__()`

Usamos o método `abs()` para retornar o valor absoluto de números inteiros e de ponto flutuante, então implementamos `__abs__()` para retornar a magnitude do vetor:

```python
abs(v * 3) # 15.0
```

## Implementação de `__bool__()`

Por padrão, classes implementadas pelo usuário são verdadeiras a menos que `__bool__()`  ou `__len__()` tenham sido implementadas. Primeiro, quando chamamos `bool(x)`, `x.__bool__()` é invocado e usa o resultado. Caso `__bool__()` não exista, o interpretador tenta chamar `__len__()`, se o resultado for 0, o retorno é `False`, caso contrário o retorno é `True`. 

No exemplo, a implementação de `__bool__()` retorna `False` se a magnitude do vetor for 0. Convertemos a magnitude para um booleano usando `bool(self.x or self.y)`, pois `__bool__()` permite que seguir regras de teste do valor verdade definidas no capítulo [Tipos Embutidos](https://docs.python.org/pt-br/3/library/stdtypes.html#truth) da Biblioteca Padrão. Fora dos métodos `__bool__()`, raramente usaremos bool() explicitamente, pois qualquer objeto pode ser usado em um contexto booleano.

## Implementação de `__repr__()`

O método especial `__repr__()` é invocado quando usamos a função embutida `repr()` e retorna a representação do objeto como uma string. [Todas as linguagens orientadas a objetos tem pelo menos uma forma padrão de se obter uma representação de qualquer objeto como uma string](11082023002849-30072023124528-todas-as-linguagens-orientadas-a-objetos-tem-pelo-menos-uma-forma-padrão-de-se-obter-uma-representação-de-qualquer-objeto-como-uma-string.md). Sem um `__repr__()` o interpretador representaria uma instancia de `Vector()` em formato `<Vector object at 0x10e100070>`.    ^84dc66

A representação do objeto utiliza o sinalizador de conversão `!r` que garante que, se `self.x` ou `self.y` forem strings, elas serão representadas com aspas (por exemplo, 'texto') na saída do padrão. Se eles forem números, eles serão mostrados sem aspas na saída padrão (por exemplo, 123). Isso é importante já que em uma sessão de depuração, por exemplo, há diferença entre `Vector(1, 2)` e `Vector('1', '2')`. 

>[!tip] Programadores com experiência anterior em linguagens que contém o método `toString` tendem a implementar `__str__` e não `__repr__`. Se você for implementar apenas um desses métodos especiais, escolha `__repr__`.

^d36d54

## Usamos a função `dir()` para vermos o conteúdo de um objeto

Uma das maneiras de vermos o conteúdo de um objeto incluído os métodos especiais que sua classe implementa é utilizando a função `dir()`. 

Se passarmo o objeto `v` do exemplo para `dir()`, poderemos ver os cinco métodos especiais sobrescritos por nós e outros métodos especiais herdados de `object`:

```python
>>> dir(v)

['__abs__',
 '__add__',
 '__bool__',
 '__class__',
 '__delattr__',
 '__dict__',
 '__dir__',
 '__doc__',
 '__eq__',
 '__format__',
 '__ge__',
 '__getattribute__',
 '__gt__',
 '__hash__',
 '__init__',
 '__init_subclass__',
 '__le__',
 '__lt__',
 '__module__',
 '__mul__',
 '__ne__',
 '__new__',
 '__reduce__',
 '__reduce_ex__',
 '__repr__',
 '__setattr__',
 '__sizeof__',
 '__str__',
 '__subclasshook__',
 '__weakref__',
 'x',
 'y']
```

Implementando métodos dunder definidos no Python DataModel, podemos construir **classes que se comportam de forma polimórfica**, ou seja, que podem interagir de maneira uniforme com outros objetos, funções e bibliotecas que esperam um determinado comportamento. Neste exemplo, foi possível: 
- Emular um tipo numérico
- Representar o objeto na forma de strings
- Determinar o valor booleano do objeto 

Contudo, [emular sequencias é um dos usos mais comuns dos métodos especiais](15072023170045-emular-sequencias-é-um-dos-usos-mais-comuns-dos-métodos-especiais.md).

 
---
## Referencias:

- [Python Fluente, Capitulo 1.3.1, Emulando tipos numéricos](https://pythonfluente.com/#data_model_emulating_sec)
- [Modelo de Dados do Python (Python Documentation)](https://docs.python.org/pt-br/3/reference/datamodel.html)
- [Teste de valor verdade (Python Documentation)](https://docs.python.org/pt-br/3/library/stdtypes.html#truth-value-testing)
- [Nomes de métodos especiais (Python Documentation)](https://docs.python.org/pt-br/3/reference/datamodel.html#special-method-names)
- [Palestra Iteração em Python: Do Básico ao Genial - Luciano Ramalho](https://www.youtube.com/watch?v=ULj7ejvuzI8&ab_channel=GraventoTalks)

 