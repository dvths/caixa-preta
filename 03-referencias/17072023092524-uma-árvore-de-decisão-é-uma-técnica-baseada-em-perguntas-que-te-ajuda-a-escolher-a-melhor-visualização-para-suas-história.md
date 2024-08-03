---
classe:
  - GDAC6
topico:
  - Visualização de dados
nome-do-curso: Google Data Analytics Certification
aliases:
  - Uma árvore de decisão é uma técnica baseada em perguntas que te ajuda a escolher a melhor visualização para suas história
instrutor: 
tags:
  - GDCA
  - visualização_de_dados
link: https://www.coursera.org/programs/trybe-google-learning-program-hrevt/professional-certificates/google-data-analytics?collectionId=twDTY
tipo-curso: 
local:
  - Coursera
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%
____

# Uma árvore de decisão é uma técnica baseada em perguntas que te ajuda a escolher a melhor visualização para suas história

Existem vários tipos de árvores de decisão com diferentes complexidades. 

Tudo começa com a avaliação do tipo de dados que você tem. 

Lembre-se:
- [A taxonomia de tipos de dados importa para a estruturação, manipulação e processamento correto dos dados.](17052023211923-a-taxonomia-de-tipos-de-dados-importa-para-estruturação-manipulação-e-processamento-correto-dos-dados.md) 
- [Estruturas para visualização de dados fornecem uma lista de verificação para referência](12072023102249-estruturas-para-visualização-de-dados-fornecem-uma-lista-de-verificação-para-referência.md)

Depois responda uma série de perguntas para determinar a melhor fonte visual.
![](decision_tree.png)

As perguntas básicas incluem:

1. **Seus dados possuem apenas uma variável numérica?**
2. **Existem vários conjuntos de dados?**
3. **Você está medindo as mudanças ao longo do tempo?**
4. **As relações entre os dados precisam ser mostradas?**

Você pode começar pelos [tipos de gráficos básicos para comunicar informações sobre os dados](14072023112231-tipos-de-gráficos-básicos-para-comunicar-informações-sobre-os-dados.md)

Se você tiver dados que tenham uma variável numérica contínua, um histograma ou gráfico de densidade são os melhores métodos para plotar seus dados categóricos. Dependendo do seu tipo de dados, um gráfico de barras pode até ser apropriado nesse caso. 

Para casos que lidam com mais de um conjunto de dados, considere um gráfico de linhas ou pizza para uma representação precisa de seus dados. Um gráfico de linhas conectará vários conjuntos de dados em uma única linha contínua, mostrando como os números mudaram ao longo do tempo. Um gráfico de pizza é bom para dividir um todo em várias categorias ou partes. 

Um gráfico de linhas geralmente é adequado para traçar tendências ao longo do tempo. No entanto, quando as alterações são maiores, um gráfico de barras é a melhor opção. 

Quando você tem duas variáveis para um conjunto de dados, é importante apontar como uma afeta a outra. Variáveis que combinam bem são melhor plotadas em um gráfico de dispersão. No entanto, se houver muitos pontos de dados, a relação entre as variáveis pode ser obscurecida, portanto um mapa de calor pode ser uma representação melhor nesse caso. 

## Recursos adicionais
- [Dos dados à visualização](https://www.data-to-viz.com/) : Esta é uma excelente análise de uma árvore de decisão maior. Com esta seleção abrangente, você pode fazer pesquisas com base no tipo de dados que possui ou clicar em cada exemplo gráfico para obter uma definição e uso adequado.

- Vídeo interessante sobre a melhor forma de escolher a visualização dos dados:

	<iframe width="560" height="315" src="https://www.youtube.com/embed/C07k0euBpr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>