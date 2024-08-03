---
topico:
  - Entendendo o básico de R
nome-do-curso: Google Data Analytics Certification
aliases:
  - Data frames são a forma mais comum de armazenar e analisar dados em R
instrutor: 
tags:
  - GDCA
  - R
  - R_estrutura_de_dados
  - R_data_frames
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

# Data frames são a forma mais comum de armazenar e analisar dados em R

O data frame nada mais é do que uma coleção de colunas semelhante a uma planilha ou tabela de SQL. Na parte superior de cada coluna, há um nome que representa uma variável; além disso, a coluna inclui uma observação por linha. Os data frames ajudam a resumir os dados e colocá-los em um formato que seja fácil de ler e usar. 

O data frame abaixo, por exemplo, mostra o conjunto de dados “diamonds”, um dos conjuntos pré-carregados em R. Cada coluna inclui uma única variável relacionada a diamantes (diamonds, em inglês): carat (quilate), cut (corte), color (cor), clarity (transparência), depth (profundidade) e etc. Cada linha representa uma única observação.
![[r_dataframes.png]]

Ao trabalhar com data frames, é importante estar atento ao seguinte: 

    Primeiro, as colunas devem ser nomeadas. 

    Em segundo lugar, os data frames podem incluir diferentes tipos de dados, como numéricos, lógicos ou de caractere.

    Por fim, os elementos da mesma coluna devem ser do mesmo tipo.

Mais para frente, ainda no programa, você aprenderá um pouco mais sobre os data frames; este é, porém, um ótimo ponto de partida. 

Use a função data.frame() para criar manualmente um data frame em R; essa função processa os vetores como input. Entre os parênteses, insira o nome da coluna, seguido de um sinal de igual, e, em seguida, o vetor que quer inserir para essa coluna. No exemplo, a coluna x é um vetor com os elementos 1, 2, 3, e a coluna y é um vetor com os elementos 1.5, 5.5, 7.5 

data.frame(x = c(1, 2, 3) , y = c(1.5, 5.5, 7.5))

Ao executar a função, R exibe o data frame em linhas e colunas ordenadas. 

   x y

1  1 1.5

2  2 5.5

3  3 7.5

Na maioria dos casos, não é preciso criar manualmente um data frame. [[07082023114318--um-data-frame-é-criado-a-partir-da-importação-de-dados|Um data frame é criado a partir da importação de dados]] a partir de arquivos como um .csv, por exemplo ou um banco de dados. 

---
## Referências adicionais

[Data Wrangling](http://statseducation.com/Introduction-to-R/modules/getting%20data/data-wrangling/)