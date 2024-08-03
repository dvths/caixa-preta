---
classe:
  - GDAC7
topico:
  - Visualizações - estética - anotações com R
nome-do-curso: Google Data Analytics Certification
aliases:
  - Atributos estéticos dos gráficos em R
instrutor: 
tags:
  - GDCA
  - visualização_de_dados
  - R
  - R_viz
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

# Atributos estéticos dos gráficos em R

- [[12072023114739-escolher-o-visual-certo-requer-repertório-visual|Escolher o visual certo requer repertório visual]]
- [[12072023102249-estruturas-para-visualização-de-dados-fornecem-uma-lista-de-verificação-para-referência|Estruturas para visualização de dados fornecem uma lista de verificação para referência]]

**Ggplot2** é um pacote de R que permite a criação de tipos diferentes de visualizações de dados diretamente no espaço de trabalho de R. Em ggplot2, a **estética** é uma propriedade visual de um objeto em seu gráfico. 

Existem três atributos estéticos em ggplot2:

- **Color**: permite a alteração da cor de todos os pontos do seu gráfico ou a cor de cada grupo de dados.
    
- **Size**: permite a alteração do tamanho dos pontos em seu gráfico, por grupo de dados.
    
- **Shape**: permite a mudança do formato dos pontos do gráfico, por grupo de dados.
    

Vejamos um exemplo de como os atributos estéticos são exibidos em R:
```r
ggplot(data, aes(x=distance, y= dep_delay, color=carrier, size=air_time, shape = carrier)) + geom_point()
```

## **Recursos adicionais**

Caso deseje mais informações sobre atributos estéticos, confira esses recursos:

- [**Visualização de dados com folha de referências de ggplot2**](https://ggplot2.tidyverse.org/): A folha de referências de RStudio é uma ótima referência para usar ao trabalhar com ggplot2. Ela tem milhares de informações úteis, incluindo explicações sobre como usar objeto geométricos e exemplos das diferentes visualizações que podem ser criadas. 
    
- [**Introdução ao R da Stats Education**](http://statseducation.com/Introduction-to-R/modules/graphics/aesthetics/): Esse recurso é excelente para conhecer os fundamentos básicos de ggplot2 e aprender a aplicar atributos estéticos aos seus gráficos. Você pode consultar esse tutorial à medida que evolui em seu trabalho com ggplot2 e seus próprios dados. 
    
- [**Função aes em RDocumentation**](https://www.rdocumentation.org/packages/ggplot2/versions/3.3.3/topics/aes): Esse guia descreve a sintaxe da função aes e explica o que faz cada argumento.