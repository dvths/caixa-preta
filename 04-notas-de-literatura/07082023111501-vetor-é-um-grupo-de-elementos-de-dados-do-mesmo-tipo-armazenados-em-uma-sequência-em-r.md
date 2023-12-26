---
nome-do-curso: Google Data Analytics Certification
topico:
  - Entendendo o básico de R
aliases:
  - Vetor é um grupo de elementos de dados do mesmo tipo
  - armazenados em uma sequência em R
instrutor: 
tags:
  - GDCA
  - R
  - R_estrutura_de_dados
  - R_vetores
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

____

# Vetor é um grupo de elementos de dados do mesmo tipo, armazenados em uma sequência em R

Há seis tipos principais de vetores atômicos: logical (lógico), integer (números inteiros), double (de duplo vetor), character (que inclui strings), complex (números complexos) e raw (números não processados). Os dois últimos tipos (complex e raw) não são tão comuns na análise de dados, portanto, vamos nos concentrar nos quatro primeiros. Juntos, os vetores integer e double são conhecidos como vetores numéricos, pois ambos contêm números. Na tabela abaixo você encontra um resumo dos quatro principais tipos:

|**Digite**|**Descrição**|**Exemplo**|
|---|---|---|
|Lógico|Verdadeiro/Falso|TRUE|
|Número inteiro|Valores inteiros positivos e negativos|3|
|De duplo vetor|Valores decimais|101,175|
|De caractere|Valores de string/caractere|“Coding”|

O diagrama ilustra a hierarquia de relações entre esses quatro principais tipos de vetores:

![](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/AKjaBrD5QWGo2gaw-SFhXg_20e558486f6f4305adc1d986621f70f1_image1.png?expiry=1691539200000&hmac=Kdn3pL1iw1utTRNXsFI1606fPwhlYOpT0rsN_l5dABE)

### **Como criar vetores**  

Uma forma de criar um vetor é usar a função **c()** (conhecida como função “combine”). A função c() em R combina vários valores em um vetor. Em R, esse função é apenas a letra “c” seguida pelos valores que você quer no vetor dentro dos parênteses, separados por uma vírgula: c(x, y, z, …).

Você pode usar, por exemplo, a função c() para armazenar dados numéricos em um vetor. 

c(2.5, 48.5, 101.5)

Para criar um vetor de números inteiros com a função c(), é necessário inserir a letra “L” logo após cada número.

c(1L, 5L, 15L)

Você também pode criar um vetor com caracteres ou lógicos. 

c(“Sara” , “Lisa” , “Anna”)

c(TRUE, FALSE, TRUE)

### **Como definir as propriedades dos vetores** 

Cada vetor criado terá duas principais propriedades: tipo e comprimento.  

 Defina com qual tipo de vetor você trabalha com a função **typeof()**. Insira o código do vetor dentro dos parênteses da função. Ao executá-la, R informará o tipo. Por exemplo: 

typeof(c(“a” , “b”))

#> [1] "character"

 Observe que o resultado da função typeof do exemplo é a palavra “character” (caractere). Da mesma forma, se usar a função typeof em um vetor com valores inteiros, o resultado incluirá, por sua vez,  “integer”: 

typeof(c(1L , 3L))

#> [1] "integer"

Use a função **length()** para determinar o comprimento de um vetor que já existe (ou seja, o número de elementos contidos nele). No exemplo, usamos um operador de atribuição para atribuir o vetor à variável _x_ e, então, aplicamos a função length() à variável. Ao executarmos a função, R informa que o comprimento é de 3.

x <- c(33.5, 57.75, 120.05)

length(x)

#> [1] 3

Você também pode verificar se o vetor é de determinado tipo com a função **is**: **is.logical(), is.double(), is.integer(), is.character()**. No exemplo, R retorna um valor de TRUE pois o vetor contém números inteiros. 

x <- c(2L, 5L, 11L)

is.integer(x)

#> [1] TRUE

No exemplo, R retorna um valor de FALSE pois o vetor _não_ inclui caracteres, mas sim elementos lógicos.

y <- c(TRUE, TRUE, FALSE)

is.character(y)

#> [1] FALSE

### **Como nomear vetores** 

Todos os tipos de vetores podem ser nomeados. Os nomes são úteis para se escrever um código legível e ao descrever objetos em R. Para nomear os elementos de um vetor, use a função **names()**. Vamos atribuir, por exemplo, a variável x a um novo vetor com três elementos. 

x <- c(1, 3, 5)

Use a função names() para atribuir um nome diferente para cada elemento do vetor. 

names(x) <- c("a", "b", "c")

Ao executar o código, R mostra que o primeiro elemento do vetor tem o nome de a, o segundo b e o terceiro c.

x 

#> a b c 

#> 1 3 5

Lembre-se de que um vetor atômico só pode conter elementos do mesmo tipo. [[07082023111859-para-armazenar-elementos-de-tipos-diferentes-na-mesma-estrutura-de-dados-use-uma-lista|Para armazenar elementos de tipos diferentes na mesma estrutura de dados use uma lista]]

--- 
## Referências adicionais

[R for Data Science - Vectors](https://r4ds.had.co.nz/vectors.html#vectors)