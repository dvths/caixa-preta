---
titulo_livro: Python Essential Reference 4th edition
ano: 2009
autor:
  - David M. Beazley
aliases:
  - Instanciação de classes em Python
topico:
  - Class Instances
tags:
  - python
  - python_opp
  - python_class_statement
  - revisão
sr-due: 2023-11-10
sr-interval: 1
sr-ease: 204
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%


---
# Instanciação de classes em Python

Instâncias de classes são criadas com uma chamada semelhante a uma função. [[01112023080205-construção-e-inicialização-de-uma-classe-em-python#^6d6095|Isso cria uma instância que é passada para o método `__init__` da classe]]. Os argumentos de `__init__` consistem na instância recém criada, chamada de `self`, e os outros argumentos fornecidos para a instância no momento da chamada, por exemplo:

```python
a = Account("Guido", 1000.00) # Invoca a.__init__("Guido", 1000.00)
```

Dentro do `__init__()`, os atributos são **vinculados à instância** atribuindo-os a `self`. Por exemplo, `self.name = name` está vinculando um atributo chamado "name" na instância. Uma vez que a instância recém-criada foi retornada ao usuário, esses atributos, assim como os atributos da classe (dados e métodos), são acessados usando o operador `.` da seguinte forma: ^9130e6

```python
a.deposit(100.00) # Chama Account.deposit(a, 100.00)
name = a.name     # Obtém o nome da conta, Guido, no caso...
```

O operador `.` é responsável pela associação de atributos. Quando você acessa um atributo, o valor resultante pode vir de várias fontes diferentes. [[09112023003332-referência-básica-à-atributos#^4e5ae6|Portanto, o Python possui uma semântica especial para atributos de instância e atributos de classe]]. ([[MARTELI, RAVENSCROFT, HOLDEN, PYTHON IN A NUTSHELL 3ª EDIÇÃO, 2017]]) Por exemplo, `a.name` retorna o atributo "name" da instância "a". No entanto, `a.deposit` retorna o atributo "deposit" (um método) da classe `Account`. **Quando você acessa um atributo, a instância é verificada primeiro e, se nada for encontrado, a busca é direcionada para a classe da instância e pode se estender para as classes ancestrais. Quando se trata de um atributo de classe, abusca é feita na própria classe ou nas classes ancestrais. Esse é o mecanismo subjacente pelo qual uma classe compartilha seus atributos com todas as suas instâncias.**   ^5cb395








----
## Referências 