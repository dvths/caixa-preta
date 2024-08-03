---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: Python 3
  language: python
  name: python3
classe: [PYIC2]
topico: Introdução a Estatística
nome-do-curso: Python par a Inovação Cívica
instrutor: Ana Cecília
alias: Noção básica de estatística descritiva e pré-processamento com pandas
---


#python_notebook #PYIC
____
# Noção básica de estatística descritiva e pré-processamento com pandas

Um dos [conceitos fundamentais da estatística](08072023231429-conceitos-fundamentais-da-estatística.md) é a Estatística Descritiva, ou seja, [a forma como compreendemos os dados](08072023231951-estatística-descritiva-lida-com-a%20forma-como-compreendemos-os-dados.md). A [analise exploratória de dados](08072023233505-analise-exploratória-de-dados.md) é um conjunto de técnicas que nos ajudam a compreender os dados através do resumo das principais características de um conjunto de dados. Se trata de estimar, medir e visualizar os dados de forma que possamos extrair informações que poderão ser analisadas mais profundamente no futuro. 

Um passo fundamental na exploração de dados é encontrar seu "valor típico", ou seja sua [tendência central](08072023233958-tendência-central.md). Fazemos isso por [estimativas de localização](08072023233928-estimativas-de-localização.md), como [Média](08072023234334-média.md), Mediana e Moda que nos dão a localização de onde a maioria dos dados está localizada.

Para ver como trabalhamos com estatística descritiva com python e a biblioteca pandas, vamos utilizar dados de públicos das candidaturas para as eleições de 2020 extraídos da página do [Ttribunal Superior Eleitoral](https://dadosabertos.tse.jus.br/).

## 1. Importação dos dados e criação do DataFrame

```{code-cell}
import pandas as pd
import glob
```

Para esse exercício iremos utilizar dados do estado de Pernambuco: 

```{code-cell}
data_pe = './data/base_dados_tse_2022/consulta_cand_2022_PE'
```

```{code-cell}
df_pe = pd.read_csv(data_pe)
```

A função `read_csv()` é uma das funções de leitura de alto nível da API do pandas que retornam um objeto, geralmente um DataFrame. Um [DataFrame é uma estrutura de dados rotulada bidimensional de tipos potencialmente diferentes](10072023103517-dataframe-é-uma-estrutura-de-dados-rotulada-bidimensional-de-tipos-potencialmente-diferentes.md). 

## 2. Gerando um subconjunto 

Os dados do TSE são acompanhados do dicionário de dados com a descrição de cada uma das variáveis do dataset. Para buscarmos pelo cargo de Vereador podemos utilizar o código do cargo (`CD_CARGO`) neste caso, o código é 13:

```{code-cell}
df_vereadores_pe = df_pe[df_pe['CD_CARGO'] == 13].copy()
```

[A método `copy()` do pandas realiza uma cópias profunda dos índices e dados do objeto](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.copy.html#pandas-dataframe-copy). Isso garante que qualquer alteração que seja feita em `df_vereadores_pe` não seja refletida do DataFrame `df_pe`, pois passam a de referir a locais diferentes na memória. 

A sintaxe `df_pe[df_pe['CD_CARGO'] == 13]` é uma forma de filtragem de dados do pandas que merece um pouco de atenção. Analisando esta expressão de dentro para fora, a expressão `df_pe['CD_CARGO'] == 13` retorna um objeto do tipo `Serie`. [Serie é uma matriz rotulada unidimensional que pode conter qualquer tipo de dado](09072023234351-serie-é-uma-matriz-rotulada-unidimensional-que-pode-conter-qualquer-tipo-de-dado.md), que, neste caso é indexada pelo rótulo `CD_CARGO`. **Note que um DataFrame é um conjunto de Series**.

Quando usamos operadores booleanos em uma expressão que retorna um tipo `Serie`, o resultado é um array mascarado, também conhecido máscara booleana. Uma máscara booleana é uma técnica para identificar valores que correspondem ou não a uma determinada condição. Seu retorno é um array de valores booleanos em que cada elemento é `True` ou `False` se a condição `df_pe['CD_CARGO'] == 13` é satisfeita ou não para o valor correspondente ao rótulo 'CD_CARGO'. Este é um recurso herdado do numpy. Embora no pandas seja uma forma eficiente de filtragem de valores, máscaras booleanas possuem muitas outras utilidades:

- [Arrays Mascarados no NumPy](https://numpy.org/doc/1.20/user/tutorial-ma.html)
- [Mais sobre Indexação Booleana no Pandas](https://pandas.pydata.org/docs/user_guide/indexing.html#boolean-indexing)
- [Conceitos e exemplos sobre comparações, máscaras e lógica booleana no livro  Python Data Science Handbook](https://jakevdp.github.io/PythonDataScienceHandbook/02.06-boolean-arrays-and-masks.html)

Quando passamos essa máscara booleana como índice do DataFrame, o que temos é o mapeamento dos valores verdadeiros para comparação `df_pe['CD_CARGO'] == 13`. Dessa forma, criamos um subconjunto dos dados originais apenas com os registros correspondentes ao cargo de vereador, isto é, código 13 conforme o dicionário de dados.

Para sabermos quantos registros e rótulos o novo DataFrame gerado possui usamos o atributo `shape` que nos retornará uma tupla em que a primeira posição representa a quantidade de registros e a segunda a quantidade de rótulos: 

```{code-cell}
df_vereadores_pe.shape
```

Para olharmos rótulos do conjunto, usamos o atributo `columns`, que retorna uma lista com todos os nomes de rótulos: 

```{code-cell}
df_vereadores_pe.columns
```

## 3. Medidas de tendência central e dispersão



____
## Referências