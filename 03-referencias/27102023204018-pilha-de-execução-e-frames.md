---
aliases:
  - Pilha de Execução e Frames
tags:
  - "#python"
  - python_frames
  - python_call_stack
  - python_debugger
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Pilha de Execução e Frames

- **A Pilha de Execução**: também chamada de "call stack" em inglês, é uma estrutura de dados que mantém o controle de fluxo de execução do programa.
	- Ela rastreia a ordem de execução em que funções e métodos são chamados e mantém o controle de onde o programa deve retornar após a conclusão de uma função ou método.
	- Quando uma função ou método é chamado, um novo quadro (frame) é adicionado à pilha de execução representando a chamada da função (ou método) atual. Isso continua até que a função retorne.
	- À medida que a função ou método é executado, o frame da pilha é usado para manter seu contexto e, quando essa função ou método retorna, o frame é removido da pilha de execução. 

- **Os Frames**: Chamamos de frame a estrutura de dados **individual** que contém informações sobre a execução de uma função ou método específico. Isto é, argumentos da função/método, variáveis locais, outras funções ou métodos e o ponto de retorno.
	- Cada vez que uma função ou método é chamado, um novo frame é criado e empilhado na pilha de execução.
	- A medida que a função ou método é executado, os dados de execução dentro do frame é utilizado para manter o contexto da função ou método. Quando a há o retorno, o frame é removido da pilha.


---
## Referencias