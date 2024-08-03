---
titulo_livro: Python in a Nutshell
ano: 2017
autor:
  - Alex Martelli
  - Anna Revenscroft
  - Steve Holden
aliases:
  - Construção e inicialização de uma classe em python
topico:
  - The Class Body
tags:
  - python
  - python_opp
  - python_class_statement
  - "#revisão"
sr-due: 2023-11-10
sr-interval: 1
sr-ease: 170
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%


---
# Construção e inicialização de uma classe em python

Para entender a construção e inicialização de uma classe, precisamos compreender as funções e as diferenças entre os métodos `__new__` e `__init__`:
## `__new__`

Quando invocada, uma classe executa seu método `__new__` para criar uma instância, e a seguir `__init__`, para inicializá-la. Então a instância é devolvida ao usuário. Como não existe um operador `new` no Python, invocar uma classe é como invocar uma função. ([[RAMALHO, PYTHON FLUENTE, 2023]], 7.5. Os nove sabores de objetos invocáveis)

Quando chamamos `C(*args, **kwds)` para criar uma nova instância da classe `C`, o Python primeiro chama `C.__new__(C, *args, **kwds)`. O Python usa o valor de retorno de `__new__`, que é uma instância de `C`, passando-a como o primeiro argumento (``self``) para `__init__`. Em seguida, o Python chama `C.__init__(self, *args, **kwds)`, mas somente quando `self` é de fato uma instância de `C` ou de qualquer uma de suas subclasses. Caso contrário, o estado de `self` permanece como foi deixado por `__new__`.(Marteli, Ravenscroft, Holden, Python in a Nutshell 3ª edição, 2017, The Class Body, p.107)

**Exemplo**:

Se definirmos uma classe que será inicializada com qualquer valor:
```python
class C:
	def __init__(self, x):
		self.x = x
```

A instância de um objeto desta classe é feita com a seguinte declaração: `obj = C(23)`. 

Contudo, para construir e inicializar o objeto, o Python realmente faz isso:

```python
"""(Marteli, Ravenscroft, Holden, Python in a Nutshell 3ª edição, 2017, The Class Body, p.107)"""

obj = C.__new__(C, 23)
if isinstance(obj, C): type(obj).__init__(obj, 23)
```

Em outras palavras, o pseudocódigo para criação de um objeto em python segue a seguinte lógica :

```
(RAMALHO, Python Fluente, 22.2.3. Criação flexível de objetos com `__new__`)

def make(the_class, some_arg):
    new_object = the_class.__new__(some_arg)
    if isinstance(new_object, the_class):
        the_class.__init__(new_object, some_arg)
    return new_object
```

## `__init__`

O principal objetivo do `__init__` é vincular (e por isso iniciar) os atributos de uma nova instância aos valores fornecidos ao objeto no momento da instanciação. É comum que o método especial `__init__` seja confundido com o _construtor_ de uma classe, no entanto, como vimos, ele é um inicializador (Marteli, Ravenscroft, Holden, Python in a Nutshell 3ª edição, 2017, The Class Body, p.105). 

Para não restar dúvida, note que  `__init__` recebe `self` como primeiro argumento, o que significa que o objeto já existe (RAMALHO, Python Fluente, 22.2.3. Criação flexível de objetos com `__new__`), pois `__new__` é o responsável pela construção do objeto e seu retorno é passado como o primeiro argumento ao método `__init__`. ^6d6095

Raramente precisamos escrever um `__new__`, porque a [[15052023101415-python-data-model-é-uma-representação-abstrata-da-própria-linguagem-python#^c010df|implementação herdada de `object` é suficiente na vasta maioria dos casos]].  Portanto, é mais comum a implementação de `__init__`, já que a classe pode possuir atributos que podem ser inicializados na instanciação do objeto. 

[[08112023021217-instanciação-de-classes-em-python#^9130e6|Dessa forma, os argumentos passados na instanciação de um objeto devem corresponder aos parâmetros definido na declaração de `__init__` no corpo da classe com exceção apenas de `self`]].

Um método `__init__` não deve retornar outro valor senão `None` (observe que a declaração `if isinstance(obj, C): print(type(obj).__init__(obj, 23))` retorna `None`). Caso isso não aconteça uma exceção `TypeError` é levantada. 





----
## Referências 