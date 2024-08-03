---
nome-do-curso: Google Data Analytics Certification
topico:
  - Entendendo o básico de R
aliases:
  - Para armazenar elementos de tipos diferentes na mesma estrutura de dados use uma lista
instrutor: 
tags:
  - GDCA
  - R
  - R_estrutura_de_dados
  - R_listas
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

# Para armazenar elementos de tipos diferentes na mesma estrutura de dados use uma lista

Ao contrário dos vetores, [[07082023111501-vetor-é-um-grupo-de-elementos-de-dados-do-mesmo-tipo-armazenados-em-uma-sequência-em-r|que são é um grupo de elementos de dados do mesmo tipo]], as listas podem ser de qualquer tipo, como datas, data frames, vetores, matrizes, etc. Elas podem até mesmo conter outras listas.

>[!tip] Em R, listas também são chamadas de Vetores Recursivos (ver referência)

Use a função list() para criar uma lista. Assim como na função c(), a função list() é apenas list seguida dos valores que quer na lista dentro dos parênteses: list(x, y, z, …). No exemplo, criamos uma lista com quatro diferentes tipos de elementos: character ("a"), integer (1L), double (1.5) e logical (TRUE). 

list("a", 1L, 1.5, TRUE)

Como já dito antes, as listas podem conter outras listas. Você pode até mesmo armazenar uma lista dentro de uma lista dentro de uma lista (e por aí vai), se quiser. 

list(list(list(1 , 3, 5)))
Como definir a estrutura das listas 

Use a função str() para saber os tipos de elementos inclusos em uma lista. Para isso, insira o código da lista dentro dos parênteses da função. Ao executar a função, R mostrará a estrutura de dados da lista com a descrição dos elementos e dos tipos destes.

Vamos aplicar a função str() em nosso primeiro exemplo de lista. 

str(list("a", 1L, 1.5, TRUE))

Nós executamos a função e, então, R nos informa que a lista contém quatro elementos, os quais consistem em quatro tipos diferentes: character (chr), integer (int), number (num) e logical (logi). 

#> List of 4

#>  $ : chr "a"

#>  $ : int 1

#>  $ : num 1.5

#>  $ : logi TRUE

Vamos usar a função str() para descobrir a estrutura do segundo exemplo.  Primeiramente, vamos atribuir a lista à variável z. Assim, fica mais fácil inserir na função str(). 

z <- list(list(list(1 , 3, 5)))

Vamos executar a função. 

str(z)

#> List of 1

#>  $ :List of 1

#>   ..$ :List of 3

#>   .. ..$ : num 1

#>   .. ..$ : num 3

#>   .. ..$ : num 5

O recuo dos símbolos $ refletem a estrutura aninhada da lista. Veja que há três níveis (ou seja, há uma lista dentro de uma lista dentro de uma lista).  
Como nomear listas

Assim como os vetores, as listas podem ser nomeadas. Você pode nomear os elementos de uma lista, com a função list(), ao criá-la pela primeira vez:

list('Chicago' = 1, 'New York' = 2, 'Los Angeles' = 3)

$Chicago

[1] 1

$`New York`

[1] 2

$`Los Angeles`

[1] 3

--- 
## Referências adicionais

[R for Data Science - Lists](https://r4ds.had.co.nz/vectors.html?q=lists#lists)