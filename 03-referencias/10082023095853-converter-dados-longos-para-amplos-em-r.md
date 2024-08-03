---
topico:
  - Entendendo o básico de R
nome-do-curso: Google Data Analytics Certification
aliases:
  - Converter dados longos para amplos em R
instrutor: 
tags:
  - GDCA
  - R
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

# Converter dados longos para amplos em R

[[17052023175822-a-forma-como-os-dados-estão-estruturados-define-a-forma-como-trabalharemos-com-eles|A forma como os dados estão estruturados define a forma como trabalharemos com eles]]. Quando organizar ou ordenar seus dados usando o R, você pode precisar converter dados amplos em dados longos ou longos para amplos. Lembre-se de que é assim que os dados em um formato amplo se parecem em uma planilha:

![screenshot of a spreadsheet in wide format. there are 7 rows shown and 8 columns](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/m9JdRN6aTQCSXUTemq0AVA_4909c4cc120d496c99895460c2ca27f4_Screenshot-2021-01-27-at-2.26.11-PM.png?expiry=1691798400000&hmac=ZtgfIw5MuI7vKYWEOZfKLIjTI7MtYQ8sNGuY1ZTcdQY)

Os **dados amplos** possuem observações ao longo de várias colunas. Cada coluna contém dados de uma condição diferente da variável. Nesse exemplo, anos diferentes. 

Agora, verifique os mesmos dados em um formato longo:

![screenshot of spreadsheet in long format. there are 12 rows shown and 3 columns](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/AKr0lJTgSaCq9JSU4CmgtA_7608bba87aa04ab4b1695c3b3a22325a_Screenshot-2021-01-27-at-2.29.39-PM.png?expiry=1691798400000&hmac=vYOnL4vcnPkjOOupKE_C5skHnvm7XWwVM7RzqsuU1zg)

E, para rever o que você já aprendeu sobre a diferença, **dados longos** possuem todas as observações em uma única coluna, e variáveis em colunas separadas. 

## **As funções pivot_longer e pivot_wider**

Existem razões convincentes para usar ambos os formatos. Mas como analista, é importante saber como ordenar seus dados quando precisar fazer isso. Em R, você pode ter um data frame em um formato amplo que possui diversas variáveis, e condições para cada variável. Isso pode dar uma sensação de estar um pouco bagunçado. 

É aí que entra a pivot_longer(). Como parte do pacote tidyr, você pode usar essa função R para alongar os dados em um data frame aumentando o número de linhas e diminuindo o número de colunas. De forma parecida, se você quer converter seus dados para ter mais colunas e menos linhas, você deverá usar a função pivot_wider().

---
## **Recursos adicionais**

Para saber mais sobre essas duas funções e como aplicá-las em sua programação em R, dê uma olhada nesses recursos:

- [**Pivoting**](https://tidyr.tidyverse.org/articles/pivot.html): Considere esse recurso como um ponto de partida para ordenar dados ao longo de conversões amplas e longas. Essa página da web foi tirada diretamente das informações sobre o pacote tidyr em [**tidyverse.org**](https://www.tidyverse.org/)- . Ele explora os componentes das funções pivot_longer e pivot_wider usando detalhe específicos, exemplos, e definições. 
    
- [**CleanItUp 5: R-Ladies Sydney: Amplo em Longo em Amplo em…PIVOT**](https://rladiessydney.org/courses/ryouwithme/02-cleanitup-5/): Esse recurso oferece detalhes adicionais sobre as funções pivot_longer e pivot_wider. Os exemplos fornecidos usam conjuntos de dados interessantes para ilustrar como converter dados de amplo para longo e de volta ao amplo. 
    

- [**Como representar múltiplas variáveis**](https://scc.ms.unimelb.edu.au/resources-list/simple-r-scripts-for-analysis/r-scripts[**:**](https://www.datamentor.io/r-programming/saving-plot/) Esse recurso explica como visualizar dados longos e dados amplos, com o ggplot2 para auxiliar a ordená-los. O foco é no uso da função pivot_longer para reestruturar os dados e fazer pontos de delimitação similares em um número de variáveis de uma só vez. Você pode aplicar o que aprender dos outros recursos aqui, para um entendimento mais vasto das funções pivot.