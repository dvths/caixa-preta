---
titulo_livro: Manual de Análise de Dados
ano: 2024
autor:
  - Luiz Paulo Fávero
  - Patrícia Belfiori
aliases:
  - Variáveis qualitativas em escala ordinal
topico:
  - 1. Tipos de Variáveis e Escalas de Mensuração e Precisão
tags:
  - estatística
  - escala_ordinal
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%


---
# Variáveis qualitativas em escala ordinal

Uma variável em escala ordinal classifica as unidades em classes ou categorias em relação à característica representada, estabelecendo uma relação de ordem entre as unidades das diferentes categorias.

Em outras palavras, uma escala ordinal é uma escala de ordenação, designando uma posição relativa das classes segundo uma direção. Qualquer conjunto de valores pode ser atribuído às categorias das variáveis, desde que a ordem entre elas seja respeitada. 

Assim como as [[21032024221436-variáveis-categóricas-em-escala-nominal|Variáveis categóricas em Escala Nominal]], operações aritméticas não se aplicam em variáveis desta natureza, assim como a aplicação de estatísticas descritivas não fazem sentido. Como o número das escalas têm apenas o significado de classificação, as estatísticas descritivas que podem ser utilizadas ara dados ordinais são as tabelas de distribuições de frequência, gráficos (incluindo barras e setores), e o cálculo da moda.

Exemplo: Uma variável não métrica denominada _Classificação_ que mede a preferência de um grupo de consumidores em relação a uma marca de vinho. Os rótulos para está variável poderiam ser os seguintes:


| Valor | Rótulo    |
| ----- | --------- |
| 1     | Péssimo   |
| 2     | Ruim      |
| 3     | Regular   |
| 4     | Bom       |
| 5     | Muito Bom |

Em vez de utilizar a escala de 1 a 5, poderíamos ter atribuído qualquer outra escala numérica desde que a ordem da classificação fosse respeitada. Assim, os valores numéricos não representam uma nota de qualidade do produto, têm apenas um significado de classificação, de modo que a diferença entre esses valores não representa a diferença do atributo analisado.



----
## Referências 