---
classe:
  - GDAC6
topico:
  - Visualização de dados
nome-do-curso: Google Data Analytics Certification
aliases:
  - Tipos de gráficos básicos para comunicar informações sobre os dados
instrutor: 
tags:
  - GDCA
  - visualização_de_dados
link: https://www.coursera.org/programs/trybe-google-learning-program-hrevt/professional-certificates/google-data-analytics?collectionId=twDTY
tipo-curso:
  - online
local:
  - Coursera
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%
____

# Tipos de gráficos básicos para comunicar informações sobre os dados

- [Escolher o visual certo requer repertório visual](12072023114739-escolher-o-visual-certo-requer-repertório-visual.md).

- [Documentação sobre os tipos de gráficos do Google Sheets](https://support.google.com/docs/answer/190718?hl=en)

- [Tableau é uma plataforma de busness intelligence online para visualização de dados](19072023101948-tableau-é-uma-plataforma-de-business-intelligence-online-para-visualização-de-dados.md)

Uma maneira de encaixar uma representação visual à um determinado tipo de conjunto de dados é avaliar padrões nos dados. Padrões significativos podem assumir muitas formas, como:

- **Mudança:** esta é uma tendência ou instância de observações que se tornam diferentes ao longo do tempo. Uma ótima maneira de medir a mudança nos dados é por meio de um gráfico de linhas ou colunas.
    
- **Agrupamento:** uma coleção de pontos de dados com valores semelhantes ou diferentes. É melhor representado por meio de um gráfico de distribuição.
    
- **Relatividade:** estas são observações consideradas em relação ou em proporção a outra coisa. Você provavelmente já viu exemplos de dados de relatividade em um gráfico de pizza.
    
- **Classificação:** esta é uma posição em uma escala de realização ou status. Os dados que exigem classificação são melhor representados por um gráfico de colunas.
    
- **Correlação:** mostra uma relação mútua ou conexão entre duas ou mais coisas. Um gráfico de dispersão é uma excelente maneira de representar esse tipo de padrão de dados.

No entanto, existem tipos de gráficos básicos que podem ser considerados padrão para diversos tipos de situações.

- **Gráficos de Linhas**

```chart
type: line
labels: [2008, 2009, 2010, 2011, 2013, 2014]
series:
  - title: Taxa de Graduação
    data: [87, 89, 92, 92, 96, 95 ]
tension: 0.2
width: 80%
labelColors: false
fill: false
beginAtZero: false
bestFit: false
bestFitTitle: undefined
bestFitNumber: 0
```

Gráficos de linha são utilizados para representar períodos curtos e longos. Variações de valores em intervalos temporais são melhor representados com este tipo de gráfico.

- **Gráficos de Colunas**

```chart
type: bar
labels: [Agosto, Setembro, Outubro, Novembro, Dezembro]
series:
  - title: Vendas
    data: [2800, 3700, 3750, 4300, 6300]
tension: 0.2
width: 80%
labelColors: false
fill: false
beginAtZero: false
bestFit: false
bestFitTitle: undefined
bestFitNumber: 0
```

Os gráficos de colunas usam o tamanho para contrastar e comparar duas ou mais variáveis, adotando a altura ou comprimento para representar os valores específicos.

- **Mapas de calor** (o plugin do obsidian não dá este modelo)

Este tipo de gráfico é usado principalmente para mostrar relações entre duas variáveis e usam um sistema de codificação de cores para representar valores diferentes. O mapa de calor a seguir mostra as mudanças de temperatura para cada cidade durante os meses mais quentes e mais frios do ano.

![](mapa_calor.png)

- **Gráfico de Pizza**
Este é um gráfico que possibilita visualizarmos as proporções de duas ou mais variáveis em relação ao total de ocorrências. As partes de um todo.

```chart
type: pie
labels: [Comédia, Drama, Sci-fi, Romance, Ação]
series:
  - title: Preferência
    data: [41, 11, 3, 17, 28]
tension: 0.2
width: 50%
labelColors: true
fill: false
beginAtZero: false
bestFit: false
bestFitTitle: undefined
bestFitNumber: 0
```

- **Gráfico de dispersão**

Os gráficos de dispersão mostram as relações entre as diferentes variáveis. Geralmente, os gráficos de dispersão são utilizados para duas variáveis do conjunto de dados, mas é possível adicionar mais variáveis à visualização.
![](dispersão.png)


- **Gráfico de distribuição** 

Um gráficos de distribuição mostra a distribuição de vários resultados em um conjunto de dados. Um exemplo do uso de um gráfico de distribuição pode ser o fornecido por algumas redes sociais para mostrar, por exemplo, o melhor horário para realização de um post, isto é, o horário ou dia da semana em que há mais usuários online. 

O exemplo dado na aula demonstra que a quantidade de vendas de café em um cafeteria aumenta constantemente desde o início da semana, atingindo o ponto mais alto no meio da semana e, em seguida, diminui no final da semana.
![](distribuição.png)

Uma maneira de decidir qual visualização é a mais adequada para apresentação dos dados é utilizar a **àrvore de decisão.** [Uma árvore de decisão é uma técnica baseada em perguntas que te ajuda a escolher a melhor visualização para suas história](17072023092524-uma-árvore-de-decisão-é-uma-técnica-baseada-em-perguntas-que-te-ajuda-a-escolher-a-melhor-visualização-para-suas-história.md)

## Apresentação dos tipos de gráficos ideais fornecidos pelo Tableau

![](tipo_de_grafico_ideal_tableau.pdf)