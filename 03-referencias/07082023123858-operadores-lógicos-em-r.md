---
classe:
  - GDAC7
topico:
  - Entendendo o básico de R
nome-do-curso: Google Data Analytics Certification
aliases:
  - Operadores Lógicos em R
instrutor: 
tags:
  - GDCA
  - R
  - R_operadores
link: https://www.coursera.org/programs/trybe-google-learning-program-hrevt/professional-certificates/google-data-analytics?collectionId=twDTY
local:
  - Coursera
tipo-curso:
  - online
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#GDCA #R #R_operadores
____

# Operadores Lógicos em R

**Operadores lógicos** retornam um tipo de dado lógico, como TRUE ou FALSE. 

Eles se dividem em três principais tipos:

- AND (também representado como “&” ou “&&” em R)
    
- OR (também representado como “|” ou “||” em R)
    
- NOT (!)
    

Consulte abaixo um resumo dos operadores lógicos.

### **Operador AND “&”**

- O operador AND processa dois valores lógicos, retornando TRUE somente se ambos os valores individuais são TRUE, ou seja, TRUE & TRUE resulta em TRUE. No entanto, FALSE & TRUE, TRUE & FALSE e FALSE & FALSE resultam em FALSE.
    
- Ao executar o código correspondente em R, você obtém os seguintes resultados: > TRUE & TRUE [1] TRUE > TRUE & FALSE [1] FALSE > FALSE & TRUE [1] FALSE > FALSE & FALSE [1] FALSE. Exemplifique isso com os resultados das nossas comparações. Imagine que você cria uma variável x que é igual a 10. x <- 10. Para verificar se x é maior do que 3 e menor do que 12, use x > 3 e x < 12 como os valores de uma expressão “AND”.  x > 3 & x < 12. Ao executar a função, R retorna o resultado TRUE. [1] TRUE. A primeira parte, x > 3, resultará em TRUE, pois 10 é maior do que 3. A segunda parte, x < 12, também resultará em TRUE, já que 10 é menor do que 12. Portanto, como ambos os valores são TRUE, o resultado da expressão AND é TRUE. O número 10 está entre os números 3 e 12,  no entanto, se você indicar que x é igual a 20, a expressão x > 3 & x < 12 retornará outro resultado.  x <- 20 x > 3 & x < 12 [1] FALSE. Embora x > 3 resulte em TRUE (20 > 3), x < 12 resulta em FALSE (20 < 12). Se uma parte da expressão AND resulta em FALSE, o mesmo valerá para toda a expressão (TRUE & FALSE = FALSE). Consequentemente, R retorna o resultado FALSE. 
    

### **Operador OR “|”**

- O operador OR (|) funciona de forma parecida ao operador AND (&). A principal diferença é que, ao menos, um dos valores da operação OR deve ser TRUE para que toda a operação resulte em TRUE, ou seja, TRUE | TRUE, TRUE | FALSE e FALSE | TRUE resultam em TRUE. Quando ambos os valores são FALSE, o resultado é FALSE.
    
- Ao escrever o código, você obtém os seguintes resultados  > TRUE | TRUE [1] TRUE > TRUE | FALSE [1] TRUE > FALSE | TRUE [1] TRUE > FALSE | FALSE [1] FALSE. Por exemplo, digamos que você cria uma variável y igual a 7. Para verificar se y é menor do que 8 ou maior do que 16, use a seguinte expressão: y <- 7 y < 8 | y > 16. O resultado da comparação é TRUE (7 é menor do que 8) | FALSE (7 não é maior do que 16). Como somente um valor da expressão OR precisa ser TRUE para que toda a expressão resulte em TRUE, R retorna um resultado TRUE.  [1] TRUE. Digamos que agora y é igual a 12. A expressão y < 8 | y > 16 resulta em FALSE (12 < 8) | FALSE (12 > 16). As duas comparações são FALSE, portanto o resultado também é FALSE. y <- 12 y < 8 | y > 16 [1] FALSE
    

### **Operador NOT “!”**

- O operador NOT (!) basicamente nega o valor lógico ao qual se aplica. Traduzindo, !TRUE resulta em FALSE e !FALSE resulta em TRUE.
    
- Ao executar o código, você obtém os seguintes resultados:  > !TRUE  [1] FALSE > !FALSE [1] TRUE. Assim como os operadores OR e AND, você pode usar o operador NOT em combinação com operadores lógicos. O zero é considerado FALSE, enquanto que demais números são considerados TRUE. O operador NOT resulta no valor lógico oposto.  Digamos que você tem uma variável x igual a 2: x <- 2. A operação NOT resulta em FALSE, pois ele leva em consideração o valor lógico oposto de um número diferente de zero (TRUE). > !x [1] FALSE

