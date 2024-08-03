---
titulo_livro: Manual de Análise de Dados
ano: 2024
autor:
  - Luiz Paulo Fávero
  - Patrícia Belfiori
aliases:
  - Variáveis não métricas ou qualitativas
topico:
  - 1. Tipos de Variáveis e Escalas de Mensuração e Precisão
tags:
  - estatística
  - variavel_qualitativa
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%


---
# Variáveis não métricas ou qualitativas

Variáveis não métricas representam características de um indivíduo, objeto ou elemento que não podem ser medidas ou quantificadas. 

A representação desse tipo de variável é feita através de tabelas de distribuição de frequências ou de forma gráfica, sem o cálculo de medidas de posição, dispersão ou formato. A unica exceção é em relação a moda, medida que fornece o valor mais frequente de uma variável. 

A tabela mostra dados representados por faixas.  

_Faixa de renda por classe social_

| Classe | Salário Mínimo | Renda Familiar                |
| ------ | -------------- | ----------------------------- |
| A      | Acima de 20    | Acima de R$ 15.760,00         |
| B      | 10 a 20        | De R$ 7.880,00 a R$ 15.760,00 |
| C      | 4 a 10         | De R$ 3.153,00 a R$ 7.880,00  |
| D      | 2 a 4          | De R$ 1.156,00 a R$ 3.152,00  |
| E      | Até 2          | Até R$ 1.576,00               |
|        |                |                               |

Quando trabalhamos com dados não métricos (também chamados de categóricos), só podemos realizar o cálculo de frequência, e não o de medidas-resumo como média e desvio padrão.


| Frequência | Renda Familiar                |
| ---------- | ----------------------------- |
| 10%        | Acima de R$ 15.760,00         |
| 18%        | De R$ 7.880,00 a R$ 15.760,00 |
| 24%        | De R$ 3.153,00 a R$ 7.880,00  |
| 36%        | De R$ 1.156,00 a R$ 3.152,00  |
| 12%        | Até R$ 1.576,00               |

As variáveis não métricas podem ser classificadas de acordo com sua [[21032024210054-tipos-de-variáveis-x-escala-de-mensuração|Escala de Mensuração]], podendo ser medidas tanto em [[21032024221933-variáveis-qualitativas-em-escala-ordinal|Escala Ordinal]], ou em [[21032024221436-variáveis-categóricas-em-escala-nominal|Escala Nominal]].



----
## Referências 