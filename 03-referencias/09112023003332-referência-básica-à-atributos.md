---
titulo_livro: Python in a Nutshell
ano: 
autor:
  - Alex Martelli
  - Anna Revenscroft
  - Steve Holden
aliases:
  - Referência básica à atributos
topico:
  - Attribute Reference Basics
tags:
  - python
  - python_opp
  - python_class_attributes
  - revisão
sr-due: 2023-11-10
sr-interval: 1
sr-ease: 230
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%


---
# Referência básica à atributos

Uma referência à um atributo é uma declaração na forma `x.name`, onde `x` é qualquer expressão e `name` é o identificador do atributo. Lembre-se de que os métodos também são atributos, portanto, tudo o que dizemos sobre atributos em geral também se aplica aos atributos que são **invocáveis** (ou seja, métodos). Um atributo de classe é referenciado na forma `C.name`, onde `C` é a classe e `name` é o identificador do atributo. Quando uma atributo é invocável, a diferença está apenas na utilização dos `()` na sintaxe, isto é, escrevemos `x.name()` ou `C.name()` 

**A diferença entre os atributos de classe e instância é que atributos de classe são compartilhados por todas as instâncias da classe, enquanto atributos de instância são exclusivos da instância.**

Sintaticamente, uma atributo de classe pode ser definido no corpo da classe, fora de qualquer método. Contudo, quando se trata de um método, classes e instâncias têm uma pequena diferença: Enquanto para métodos da instâncias utilizamos `self` para indicar que estamos nos referindo à instância, no caso de um método da classe, utilizamos `cls` para o mesmo propósito.

>[!note] ## Regras de Escopo 
>O uso explícito de `self` é necessário porque Python não fornece um meio para declarar explicitamente variáveis. Sem isso, não há como saber se uma atribuição a uma variável em um método deve ser uma variável local ou se deve ser salva como um atributo de instância. O uso explícito de `self` corrige isso evitando ambiguidades — todos os valores armazenados em `self` fazem parte da instância e todas as outras atribuições são apenas variáveis locais. 
>
>O uso de `cls` tem o mesmo objetivo de explicitar que o método opera dentro da classe e não na instância, o uso do decorador `@classmethod` contribui para a legibilidade. ([[BEAZLEY, PYTHON ESSENTIAL REFERENCE, 2009]], Scoping Rules, p.118)  

O Python possui uma semântica especial para atributos de instância e atributos de classe. Isso porque tanto uma classe quanto sua instância possuem um atributo especial vi[](BEAZLEY,%20PYTHON%20ESSENTIAL%20REFERENCE,%202009.md)nário que mapeia todos os atributos da classe ou instância, com exceção apenas de alguns poucos atributos especiais. ^4e5ae6

>[!tip] Mas o `__dict__` é um pouco mais do que isso, ele é fundamental no Python:
>>[!quote] "Usamos dicionários em todos os nossos programas Python. Se não diretamente em nosso código, então indiretamente, pois o tipo `dict` é um elemento fundamental da implementação do Python. Atributos de classes e de instâncias, espaços de nomes de módulos e argumentos nomeados de funções são alguns dos elementos fundamentais do Python representados na memória por dicionários. O `__builtins__.__dict__` armazena todos os tipos, funções e objetos embutidos." ([[RAMALHO, PYTHON FLUENTE, 2023]], 3. Dicionários e conjuntos)


## Obtendo um atributo de classe

Quando usamos a sintaxe `C.name` para nos referirmos a um atributo da classe `C`, o compilador do Python inicia uma pesquisa que possui duas etapas:

1. Quando `name` é uma chave no `__dict__` de `C`, isto é, `C.__dict__`, `C.name` busca o valor `v` em `C.__dict__['name']`. Então, podemos ter dois casos:
	1. Quando `v` é um descritor, isto é, `type(v)` fornece um `__get__`, o valor de `C.name` é o resultado da chamada `type(v)._[](RAMALHO,%20PYTHON%20FLUENTE,%202023.md)name` não é uma chave em `C.__dict__`, `C.name` delega a pesquisa para as classes bases, ou seja, tenta encontrar uma chave `name` nos dicionários das classes da qual `C` é herdeira. 

Esse processo se chama Método de Ordem de Resolução (Method Resolution Order)([[MARTELI, RAVENSCROFT, HOLDEN, PYTHON IN A NUTSHELL 3ª EDIÇÃO, 2017]], p. 113) 

>[!warning] Note que a pesquisa por um atributo de classe passa por dois conceitos fundamentais, para entender completamente precisamos passar por Descritores e Herança.

Mas antes, vamos compreender como funciona a pesquisa por um atributo de instância:

## Obtendo um atributo de instância

Quando usamos a sintaxe `x.name` para nos referirmos a um atributo de instância `x` da classe `C`, o compilador pesquisa seguindo três passos:

1. Quando `name` é encontrado em `C` (ou em seus ancestrais) como um nome de um descritor sobrescrito `v`, por exemplo: quando `type(v)` fornece os métodos `__get__` e `__set__`:
	1. O valor de `x.name` é o resultado de `type(v).__get__(v, x, C)`.
2. Por outro lado, quando `name` é uma chave no dicionário da instância, isto é, `x.__dict__`:
	1. `x.name` busca e retorna o valor como `x.__dict__['name']`.
3. Por fim, `x.anme` delega a pesquisa para os atributos `x`'s seguindo os mesmos dois passos usados na pesquisa por atributo de classe:
	1. Quando um descritor `v` é encontrado, o resultado geral da busca é `type(v).__get__(x, v, C)`.
	2. Quando `v` não é um descritor resultado geral é apenas o valor de `v`.

Em resumo,[[08112023021217-instanciação-de-classes-em-python#^5cb395|quando você acessa um atributo, a instância é verificada primeiro e, se nada for encontrado, a busca é direcionada para a classe da instância e pode se estender para as classes ancestrais. Quando se trata de um atributo de classe, abusca é feita na própria classe ou nas classes ancestrais. Esse é o mecanismo subjacente pelo qual uma classe compartilha seus atributos com todas as suas instâncias]], variando apenas se o atributo for um descritor.




----
## Referências adicionais
Indicado pelos autores sobre o Método de Ordem de Resolução:
- The Python 2.3 Method Resolution Order, um ensaio de Michele Simionato 
- GvR’s history nota sobre Python History site.
