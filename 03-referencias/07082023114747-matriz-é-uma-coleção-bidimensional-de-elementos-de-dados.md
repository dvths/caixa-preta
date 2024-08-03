---
topico:
  - Entendendo o básico de R
nome-do-curso: Google Data Analytics Certification
aliases:
  - Matriz é uma coleção bidimensional de elementos de dados
instrutor: 
tags:
  - GDCA
  - R
  - R_estrutura_de_dados
  - R_matrizes
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

#GDCA #R #R_estrutura_de_dados #R_matrizes
____

# Matriz é uma coleção bidimensional de elementos de dados

Assim como um  [[07082023111501-vetor-é-um-grupo-de-elementos-de-dados-do-mesmo-tipo-armazenados-em-uma-sequência-em-r|Vetor é um grupo de elementos de dados do mesmo tipo]], as matrizes contêm apenas um tipo de dado. Contudo, enquanto um vetor é unidimensional, as Matrizes são bidimensionais.

Para criar uma matriz em R, use a função matrix(), que tem dois principais argumentos que você insere entre os parênteses. Primeiro, adicione um vetor, que contém os valores a serem colocados na matriz. Em seguida, adicione, ao menos, uma dimensão de matriz. Você pode especificar o número de linhas ou de colunas com o código nrow = ou ncol =, respectivamente. 

Digamos, por exemplo, que você quer criar uma matriz 2x3 (duas linhas e três colunas) com os valores 3-8. Primeiro, insira um vetor com essa sequência de números: c(3:8) e, em seguida, adicione uma vírgula. Por fim, digite nrow = 2 para especificar o número de linhas. 

matrix(c(3:8), nrow = 2)

Ao executar a função, R exibe uma matriz com três colunas e duas linhas (também conhecida como “2x”3”), que contém os valores numéricos 3, 4, 5, 6, 7, 8. R coloca o primeiro valor (3) do vetor na linha superior e na coluna mais à esquerda da matriz, dando continuidade à sequência da esquerda à direita. 

    [,1] [,2] [,3]

[1,]    3    5    7

[2,]    4    6    8

Você pode especificar o número de colunas (ncol = ) ao invés de linhas (nrow = ). 

matrix(c(3:8), ncol = 2)

Ao executar a função, R automaticamente infere o número de linhas.

    [,1] [,2] 

[1,]    3    6    

[2,]    4    7    

[3,]    5    8   

