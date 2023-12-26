---
classe:
  - GDAC7
topico:
  - Visualizações - estética - anotações com R
nome-do-curso: Google Data Analytics Certification
aliases:
  - Como salvar um gráfico com ggsave()
instrutor: 
tags:
  - GDCA
  - R_viz
  - visualização_de_dados
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

# Como salvar um gráfico com ggsave()

Reveja:
[[28082023123520-atributos-estéticos-dos-gráficos-em-r|Atributos estéticos dos gráficos em R]]

Ao fazer um gráfico em R, ele precisa ser “enviado” a um dispositivo gráfico específico. Para salvar imagens sem usar ggsave(), abra um dispositivo gráfico de R, como **png()** ou **pdf()**; assim, é possível salvar seu gráfico como um arquivo .png ou .pdf. Além disso, também é possível escolher imprimir o gráfico e depois fechar o dispositivo usando **dev.off()**.

|**Exemplo de uso do png()**|**Exemplo de uso do pdf()**|
|---|---|
|png(file = "exampleplot.png", bg = "transparent") plot(1:10) rect(1, 5, 3, 7, col = "white") dev.off()|pdf(file = "/Users/username/Desktop/example.pdf",     width = 4,      height = 4)  plot(x = 1:10,       y = 1:10) abline(v = 0) text(x = 0, y = 1, labels = "Random text") dev.off()|

Para saber mais sobre os diferentes processos de salvamento de imagens, confira esses recursos: 

- [**Salvando imagens sem ggsave()**](https://ggplot2.tidyverse.org/reference/ggsave.html#saving-images-without-ggsave-): Esse recurso foi retirado diretamente da documentação de ggplot2 em [**tidyverse.org**](https://www.tidyverse.org/)- . Ele explora as ferramentas que podem ser usadas para salvar imagens em R e traz diversos exemplos para você acompanhar e aprender a salvar imagens no seu próprio espaço de trabalho de R. 
    
- [**Como salvar um ggplot**](https://www.datanovia.com/en/blog/how-to-save-a-ggplot/): Esse recurso abrange diversos métodos diferentes para salvar gráficos. Também inclui códigos copiáveis com explicações sobre como cada função está sendo usada, permitindo que você entenda melhor cada etapa do processo.  
    

- [**Salvando um gráfico em R:**](https://www.datamentor.io/r-programming/saving-plot/) Esse guia trata de múltiplos formatos que podem ser usados para salvar os gráficos em R. Cada seção inclui um exemplo com um gráfico real que pode ser copiado e usado para praticar no seu próprio espaço de trabalho de R.


