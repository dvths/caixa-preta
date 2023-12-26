---
classe:
  - Leitura
aliases:
  - Gerenciamento de contexto em Python é um conceito que envolve a execução de código em um contexto específico
tags:
  - python_gerenciamento_de_contexto
  - python
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%
#python #python_gerenciamento_de_contexto

---
# Gerenciamento de contexto em Python é um conceito que envolve a execução de código em um contexto específico

#task

- O que significa `yield` produzir ou produção, geração. 

- O `yield` foi introduzido na versão 2.3 da linguagem e a motivação para sua introdução é facilitar o sistema “respostas” de maneira preguiçosa ([lazy valuation](https://pt.wikipedia.org/wiki/Avalia%C3%A7%C3%A3o_pregui%C3%A7osa#Refer%C3%AAncias)), sem a necessidade de um sistema de callbacks.

- A ideia central é termos uma função que saiba produzir valores.

- Toda função que possui um statment `return` no fim, pode substituir `return` por `yield`. Essa função passa ser então um objeto gerador

- O que é um gerador? (mais coisas sobre yield, iteradores e geradores na Live 86)
	- Um gerador se comporta como uma sequencia em python. Isso significa que podemos iterar sobre um objeto gerador
	- Um objeto gerador "sabe" o próximo valor de uma sequencia, isto é, podemos usar tanto um loop quanto a função `next()` mas não pode recuperar os valores anteriores.
- O `yield` pode ser utilizado mais de uma vez em um mesmo método ou função:   
```python
def gen():
	yield 1
	yield 2
	yield 3
```
- Com a função `next()` podemos gerar o primeiro valor, utilizando `next()` novamente, o segundo valor é gerado, ou seja, o resultado não gerará 1 de novo, mas o segundo valor, 2. Da mesma forma, ao chamarmos o a função `next()` novamente, o terceiro valor será gerado. Uma próxima vez levantará uma exceção `StopIteration`, pois não haverá mais nada a ser gerado. 

Um bom exemplo para entender o conceito de geração de valores usando yield, é o seguinte:

```python
def impares():
	valor = 1
	while True:
		yield valor
		valor += 2
```

Um pseudocódigo para isso seria:

rotina IMPARES()
	v: inteiro = 1
	enquanto VERDADEIRO faça:
		produza v
		v += 2

Na primeira iteração, o valor produzido será o mesmo valor 1, a próxima linha incrementa v em 2, consequentemente, v passa a ser igual a 3 e assim sucessivamente. A grande vantagem aqui é que yield só produzirá o valor quando for chamado, ou seja, eu só terei os valores quando iterar sobre esse gerador, ou chamá-lo para uma variável ou usar a função `next()` . 

O grande trunfo dos geradores é que além de poder gerar sequencias infinitas, não é necessário adicionar nada na memória.

Uma outra maneira de demonstrar isso é utilizando um arquivo: 

Quando trabalhamos com arquivos, não precisamos armazená-lo completamente na memória com a função `read()` ou `readlines()`. O python por padrão implementa um gerador quando abrimos o arquivo com a função `open()`: 

```python
whit open("fazedor_do_amanhecer.txt", "m") as file:
	file.write("""O fazedor de amanhecer
	Sou leso em tratagens com máquina.  
	Tenho desapetite para inventar coisas prestáveis.  
	Em toda a minha vida só engenhei  
	3 máquinas  
	Como sejam:  
	Uma pequena manivela para pegar no sono.  
	Um fazedor de amanhecer  
	para usamentos de poetas  
	E um platinado de mandioca para o  
	fordeco de meu irmão.  
	Cheguei de ganhar um prêmio das indústrias  
	automobilísticas pelo Platinado de Mandioca.  
	Fui aclamado de idiota pela maioria  
	das autoridades na entrega do prêmio.  
	Pelo que fiquei um tanto soberbo.  
	E a glória entronizou-se para sempre  
	em minha existência.""")

p = open("fazedor_do_amanhecer.txt")

# for x in p: print(x)
# isso imprimirá todas as linhas do poema no console

next(p) # imprimirá uma linha do poema, chamando next() será gerado uma linha de cada vez   

```

Isso demonstra que não precisamos carregar um arquivo inteiro na memória e esse é o grande trunfo dos geradores, uma grande maneira de economizar memória.  





[Ler - Python Fluente - Cap 2 - Sequencias](https://pythonfluente.com/#sequences)
[Live de Python 151 - Yield](https://www.youtube.com/watch?v=ZjwZ9nfhsk4&t=1793s&ab_channel=EduardoMendes)
[Live de Python 86 - Iteradore e Geradores](https://www.youtube.com/watch?v=Xj5LlCeW0m0&t=84s&ab_channel=EduardoMendes)
[Palestra de Luciano Ramalho sobre o assunto](https://www.youtube.com/watch?v=ULj7ejvuzI8&ab_channel=GraventoTalks)
![](live-de-python-151.pdf)


----
## Referências  