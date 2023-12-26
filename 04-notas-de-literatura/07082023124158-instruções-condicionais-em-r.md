---
classe:
  - GDAC7
topico:
  - Entendendo o básico de R
nome-do-curso: Google Data Analytics Certification
aliases:
  - Instruções condicionais em R
instrutor: 
tags:
  - GDCA
  - R
  - R_condicionais
link: https://www.coursera.org/programs/trybe-google-learning-program-hrevt/professional-certificates/google-data-analytics?collectionId=twDTY
tipo-curso:
  - online
local:
  - Coursera
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#GDCA #R #R_condicionais
____

# Instruções condicionais em R

A **instrução condicional** é uma declaração de que caso haja uma determinada condição, um determinado evento deve ocorrer. Vejamos o exemplo: “_Se_ a temperatura está superior a gelada, _então_ eu sairei para caminhar”. Se a primeira condição é verdadeira (a temperatura está superior a gelada), então a segunda condição ocorrerá (eu sairei para caminhar). As instruções condicionais no código em R seguem uma lógica parecida. 

Vamos ver como criar instruções condicionais em R com três instruções relacionadas: 

- **if()** 
    
- **else()**
    
- **else if()**
    

### **Instrução if**

A instrução **if** estipula uma condição; se a condição resultar em TRUE, o código em R associado à instrução if é executado.

Em R, insira o código da condição entre os parênteses da instrução if. O código que deve ser executado se a condição for TRUE se dá entre chaves (expr). Observe que, nesse caso, a segunda chave está na mesma linha do código e identifica o final do código a ser executado. 

if (condition) {

 expr

}

Por exemplo, vamos criar uma variável _x_ igual a 4.

x <- 4

Em seguida, vamos criar uma instrução condicional: se _x_ é maior do que 0, então R gerará a string “x is a positive number” (x é um número positivo). 

if (x > 0) {

  print("x is a positive number")

}

Como x = 4, a condição é verdadeira (4 > 0). Portanto, ao executar o código, R gera a string “x is a positive number”.

[1] "x is a positive number"

Se, no entanto, você mudar x para um número negativo, como -4, a condição será falsa (FALSE) (-4 > 0). Ao executar o código, R não executará a instrução print; como resultado, no entanto, aparecerá uma linha em branco.

### **Instrução else**

A instrução **else** é usada juntamente com uma instrução if. É assim que o código é estruturado em R: 

if (condition) {

  expr1

} else {

 expr2

}

O código associado à instrução else é executado sempre que a condição da instrução if _não_ for verdadeira (TRUE). Traduzindo, se a condição resultar em TRUE, R executará o código na instrução if (_expr1_); se a condição _não_ resultar em TRUE, R executará o código na instrução else (_expr2_). 

Vamos testar um exemplo. Primeiramente, crie uma variável _x_ igual a 7.  

x <- 7

Em seguida, defina as seguintes condições: 

- Se x é maior do que 0, R gerará “x is a positive number” (x é um número positivo).
    
- Se x é menor ou igual a 0, R gerará “x is either a negative number or zero” (x é um número negativo ou zero).
    

A primeira condição do nosso código (x > 0) será parte da instrução if. A segunda condição (x é menor ou igual a 0), por sua vez, está inferida na instrução else. Se x > 0, então R gerará “x is a positive number” (x é um número positivo). Caso contrário, R gerará “x is either a negative number or zero” (x é um número negativo ou zero). 

x <- 7

if (x > 0) {

 print ("x is a positive number")

} else {

 print ("x is either a negative number or zero")

}

Como 7 é maior do que 0, a condição da instrução if é verdadeira (TRUE). Portanto, ao executar o código, R gera “x is a positive number”.

[1] "x is a positive number"

No entanto, se você definir que x é igual a -7, a condição da instrução if _não_ será verdadeira (TRUE) (-7 não é maior do que 0). Assim sendo, R executará o código na instrução else. Ao executar o código, R gera “x is either a negative number or zero”. 

x <- -7

if (x > 0) {

 print("x is a positive number")

} else {

 print ("x is either a negative number or zero")

}

[1] "x is either a negative number or zero"

### **Instrução else if**

Em alguns casos, você pode personalizar sua instrução condicional ainda mais com uma instrução **else if**. Essa instrução se dá entre a instrução if e a instrução else. Vejamos a estrutura do código: 

if (condition1) {

 expr1

} else if (condition2) {

 expr2

} else {

 expr3

}

Se a condição if (_condition1_) for atendida, R executará o código na primeira expressão (_expr1_). Se esse não for o caso, mas a condição else if (_condition2_) for atendida, R executará o código na segunda expressão (_expr2_). Se nenhuma das duas condições forem atendidas, R executará o código na terceira expressão (_expr3_). 

Em nosso outro exemplo, que usa somente as instruções if e else, R somente gera “x is either a negative number or zero” se x é igual ou menor do que 0. Digamos que você quer que R gere a string “x is zero” se x for igual a 0. É preciso adicionar outra condição usando a instrução else if.

Vamos testar um exemplo. Primeiramente, crie uma variável _x_ igual a 1 negativo (“-1”).  

x <- -1

Agora você quer definir as seguintes condições:

- Se x for menor do que 0, gerar “x is a negative number”
    
- Se x for igual a 0, gerar “x is zero”
    
- Caso contrário, gerar “x is a positive number”
    

A primeira condição do código fará parte da instrução if, enquanto que a segunda e a terceira condição farão parte das instruções else if e else, respectivamente. Se x < 0, então R gerará “x is a negative number” (x é um número negativo). Se x = 0, então R gerará “x is zero” (x é zero). Caso contrário, R gerará “x is a positive number” (x é um número positivo). 

x <- -1

if (x < 0) {

 print("x is a negative number")

} else if (x == 0) {

 print("x is zero")

} else {

 print("x is a positive number")

}

Como -1 é menor do que 0, a condição da instrução if resulta em TRUE e R gera “x is a negative number”. 

[1] "x is a negative number"

Se você definir que x é igual a 0, R irá primeiro verificar a condição if (x <0) e, então, determinar que é FALSE e avaliar a condição else if. Essa condição, x == 0, é TRUE, por isso, nesse caso, R gera “x is zero”. 

Se você definir que x é igual a 1, ambas as condições if e else resultam em FALSE. Assim, R irá executar a instrução else e gerar “x is a positive number”.

Assim que R identificar uma condição que resulte como TRUE, ele irá executar o código correspondente e ignorar o restante.

---
## Referências adicionais

[Operadores lógicos e controle de fluxo em R](https://www.datacamp.com/tutorial/conditionals-and-control-flow-in-r)