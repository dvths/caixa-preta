---
alias: Debugando código Python 
---
%%
data: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#não_processado
___
# Debugando código Python

1. Conceitos básicos de depuração (tempo)
2. Ferramentas para depuração em Python (tempo)
3. Depuração avançada (tempo)
4. Exemplos de código (tempo)


Ao depurar, navegamos por frames e não necessariamente por linha.  

----

Ferramentas:
- Python DeBugger (Pdb)
- Ipython DeBugger
- Remote Python DeBugger
- Web Python DeBugger
- PySnooper
- Integrações com IDES

- Live focada em debugger de shell

----
Utilização da função `breakpont()` - essa instrução pausa a interpretação do código e espera a interação um prompt shell `(Pdb)`. 

Esse prompt (Pdb) nos dá um contexto do programa e um shell interativo que já conhece o oque aconteceu anteriormente no programa. 

Pode parecer estranho pois, aparentemente o debugger para em uma linha que não corresponde exatamente à linha que pedimos para que o programa parasse. Contudo, a linha que ele mostra não foi executada. Ou seja, temos acesso ao escopo do que já foi executado e também podemos fazer novas coisas.

O Pdb possui comandos que podemos usar, por exemplo, chamamos o help do pdb com a letra h (ou help). Todos os comandos possuem sua forma abreviada e sua forma longa. Se digitar `h <outro comando>`, temos a documentação do comando solicitado.

Comandos básicos para nos localizarmos são:
l (list) - lista as 10 linhas de código antes da linha do código onde estamos.
ll (longlist) - lista todas as linhas de código antes da linha onde estamos

A linha atual, é denotada por uma seta `->`

Os comandos para interação com o debugger são: 

n(ext): Independente de onde você está será enviado para a próxima linha, ou seja, se a próxima linha for a chamada de uma função, por exemplo, esse comando não te enviará para a definição da função, mas executará a função e, então você poderá ver o resultado gerado.

s(tep): Este comando, sim te envia para dentro do bloco de código da função, método, classe, etc

p(rint): Irá printar no console os valores. Isso é útil, pois caso você esteja em uma função em que um dos parâmetros for `n`, por exemplo, você não correrá o risco de digitar n no shell interativo e, ao invés de ver o valor do parâmetro n, acionar o comando next do pdb

pp(pretty printi): printa informações formatadas mais "bonitinhas". Util quando você precisa ver um escopo com muitas variáveis.


whatis: Diz o tipo do objeto

c(cont(inue): avança o debugger até o próximo breakpoint. Ou útil para iterações, isto é, num loop `for`, é possível avançar as iterações usando c

w(here): Mostra em qual frame você está na pilha de execução do programa. (No video o Eduardo demonstra como funciona a pilha de execução do python e introduz o conceito de frames utilizando este comando)

u(p): sobe um nível na pilha de execução

d(own): desce um nível na pilha 

---
Funções do pyhton que salvam a pele ao debugar e podem ser usadas com pdb (afinal, o pdb é um shell interativo):
vars(): retorna todas as variáveis do código (pode ser um pouco difícil de ler, mais útil para ser usada em um determinado escopo)
type(): retorna o tipo do objeto
globals(): retorna todas as variáveis globais

---
## Ipdb

O Ipdb é um debugger que fornece uma saída mais amigável. 
Para alterar o comportamento em relação ao depurador do python, precisamos definir a variável ambiente `PYTHONBREAKPOINT`.

É preciso tomar cuidado com essa variável ao commitar. 
Para desativar o debugger passamo 0 para variável.

Para trocar o debugger do python para o debugger ipdb:
Para instalar usando conda é preciso buscálo no repositóri conda-forge:
`conda intall -c conda-forge ipdb`

e chamar trocar o debugger com:

`PYTHONBREAKPOINT=set_trace python modulo.py` 

Essa variável ambiente pode receber outros debuggers. É ela que define o comportamento do python em relação a esse assunto.

>[!tip] Tanto no pdb quanto no ipdb, podemos usar a instrução `interact` no pdb do para escrever código com mais de uma linha. Ele chama o shell interativo do python ou ipython que permite isso. A diferença é que no ipython temos recurso como destaque de sintaxe e autocomplete, além de executar comando do shell unix usando o prefixo `%`, com `%ls` e ainda continuamos com acesso ao código no ambiente de debug. Isso significa que ganhamos todos os recursos do ipython e, se saimos como `exit`, voltamos para o interpretador do ipdb.

---
## Rpdb

Remote pdb: permite depurar código remotamente. Extremamente útil para depurar código rodando em outras máquinas conectadas em rede ou containers.

---
## Debugando no Jupyter
O jupyter é o ipyton com super poderes. Portanto, podemos chamar o ipdb de dentro de um documento jupyter. Importante lembrar que, no jupyter a chamada `breakpoint()` não funciona porque o jupyter é executado com PYTHONBREAKPOINT=0.
Por isso, onde queremos colocar o ponto de parada, inserimos o seguinte:

```{code-cell}
import pdb; pdb.set_trace()
```

Você vai notar que ao dar um next (n) no debugger, ele irá para linhas que são próprias do jupyter (não do código), além disso, por padrão, mesmo que estejamos chamado pdb, o jupyter executa o ipdb.

Então, podemos importar direto o set_trace() do ipython:

```{code-cell}
# maneira "correta" de importar o debugger no jupyter
from IPytho.core.debugger import set_trace()
```

---
## Debugar código em container

Para debugar containers usamos o web-pdb que fornece uma interface na web para que possamos depurar o código. Basta expor a porta correta, mapear com a do container e acessar no localhost.

---
## Stack trace personalizado

O python permite que criemos um stack trace personalizado para um trecho de código que queremos entender o fluxo de execução:

O módulo `sys` possui um método [`settrace()`](https://docs.python.org/3/library/sys.html#sys.settrace) que vai receber uma função de trace back que faz o que a gente quiser. Essa função de trace back recebe um frame, uma ação e um argumento. 



```python
import sys

def my_set_trace_function(frame, event, arg):
	print(
		frame.f_lineo, # line number (linha que está sendo executada)
		frame.f_code.co_name, # codigo e o name
		frame.f_locals, # variaveis ou names locais
		event # eventos do código como chamada (call), linha (line), retorno (return)
	)
	return my_set_trace_function

def make_double_list():
	original_list = [1, 2, 3, 4]
	new_list = [double(value) for value in original_list]
	return new_list

def double(velue):
	multiply_by_two = value * 2
	return multiply_by_two


sys.settrace(my_set_trace_function)

mak_double_list()

```

A função settrace seta um hook no código que monitora o código para fornecer o fluxo de execução do código.

Também é possível printar a stack de execução:

```run-python
from traceback import print_stack
import sys

def my_set_trace_function(frame, event, arg):
	print(
		frame.f_lineo, # line number (linha que está sendo executada)
		frame.f_code.co_name, # codigo e o name
		frame.f_locals, # variaveis ou names locais
		event # eventos do código como chamada (call), linha (line), retorno (return)
	)
	print_tack(frame) # imprime 
	return my_set_trace_function

def make_double_list():
	original_list = [1, 2, 3, 4]
	new_list = [double(value) for value in original_list]
	return new_list

def double(velue):
	multiply_by_two = value * 2
	return multiply_by_two


sys.settrace(my_set_trace_function)

make_double_list()

```

Com o `print_stack` podemos ter uma listagem de ações semelhante àquela que o interpretador nos dá quando há um erro, isto é, podemo agora usar o trace back ao nosso favor. 

(tem como deixar o stack trace colorido - pesquisar)
____

### Palavras chaves

- Pilha de execução
- Hook
- Trace
- Frame (python inspect frame ducumentation )

---
## Referencias

[Live de Python 197](https://www.youtube.com/watch?v=yffiyHEiUvo&ab_channel=EduardoMendes)
[Documentação do Modelo de execução do python](https://docs.python.org/pt-br/3/reference/executionmodel.html)
[Documentação do sys.settrace](https://docs.python.org/3/library/sys.html#sys.settrace)
[Documentação do dis](https://docs.python.org/3/library/dis.html)
[Documentação do inspect](https://docs.python.org/3/library/dis.html)
