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
classe: [PYIC1]
topico: Carregamento de tabelas
nome-do-curso: Python par a Inovação Cívica
instrutor: Ana Cecília
alias: Dependencia econômica municipal em relação à adminstração pública
---

#python_notebook #PYIC #JDCL 

- [ ] #task Linkar as notas usadas para compor o estudo
____
# Dependência econômica municipal em relação à administração pública

**Resumo**: A analise descritiva de dados é uma técnica estatística que tem como objetivo descrever e resumir as características essenciais de um conjunto de dados. Ela é fundamental para obter uma compreensão inicial dos dados antes de se realizar análises mais avançadas ou inferências estatísticas.

## Descrição
Este exercício combina conhecimentos adquiridos durante os cursos **Python para Inovação Cívica** e **Jornalismo de Dados para Coberturas Locais** (Escola de dados - Open Knowledge Brasil).

Originalmente proposto no módulo 1 do curso de Jornalismo de Dados para Coberturas Locais - "Usando SIDRA para conhecer seu município", o exercício propõe o levantamento de informações sobre o PIB (Produto Interno Bruto) municipal e o grau de dependência econômica desses municípios em relação à administração pública. O estudo é feito a partir de dados públicos fornecidos pelo IBGE através do portal SIDRA, mais especificamente:

- **Tabela 5938**: "Produto interno bruto a preços correntes, impostos, líquidos de subsídios, sobre produtos a preços correntes e valor adicionado bruto a preços correntes total e por atividade econômica, e respectivas participações".

- **Variável**: "Participação do valor adicionado bruto a preços correntes da administração, defesa, educação e saúde públicas e seguridade social no valor adicionado bruto a preços correntes total (%)".

O período do da pesquisa é 2020.

A princípio, o exercício é feito utilizando Google Spreadsheets, contudo, será realizado aqui em Python seguindo o conteúdo do módulo 2 do curso Python para inovação cívica - "Introdução ao Python e analise descritiva", que abrange o conceito introdutórios de analise descritiva com a biblioteca Pandas.

## Sobre o problema da alta dependência econômica da administração pública.

- A dependência econômica excessiva da administração pública acarreta uma série de problemas entre eles, destaco:

	- **Instabilidade financeira**: A dependência excessiva do setor público para o PIB de um município pode torná-lo altamente vulnerável a mudanças nas políticas governamentais, cortes de gastos públicos ou crises econômicas. Qualquer redução nos investimentos do governo pode ter um impacto significativo na economia local, levando a instabilidade financeira e dificuldades para a população e as empresas locais.
    
	- **Falta de diversificação econômica**: A dependência da administração pública pode impedir o desenvolvimento de outros setores econômicos no município. A ausência de uma base econômica diversificada torna a região mais suscetível a choques externos e limita as oportunidades de emprego e crescimento para os moradores locais.
    
	- **Baixa capacidade de inovação**: Quando a administração pública é a principal fonte de renda de um município, pode haver uma falta de incentivos para a inovação e o empreendedorismo. Sem a necessidade de competir no mercado aberto, a criatividade e a busca por soluções inovadoras podem ser negligenciadas, o que prejudica o desenvolvimento econômico a longo prazo.
    
	- **Dependência política**: A dependência da administração pública para o PIB pode levar a uma maior influência política na economia local. Isso pode resultar em um ambiente propenso a práticas corruptas, falta de transparência e clientelismo, onde os interesses políticos se sobrepõem aos interesses da comunidade.
    
	- **Falta de investimentos privados**: A dependência excessiva do setor público pode desencorajar investimentos privados no município. As empresas podem considerar a região como arriscada ou pouco atrativa devido à falta de diversificação econômica, instabilidade financeira e dependência política. Isso pode limitar o crescimento econômico e a criação de empregos no local.

## Os questionamentos propostos:

Para exercitar conceitos técnicos **vistos até o momento** no curso Python para Inovação Cívica, elaborei 5 questões a serem respondidas com a biblioteca pandas a partir do exercício proposto no curso Jornalismo de Dados para Coberturas Locais: 

   - Quantos municípios têm a administração pública representando mais da metade da sua atividade econômica?
   - Quais os 10 municípios com maior percentual de dependência econômica em relação à administração pública do Brasil? 
   - Quais os estados com maior quantidade de municípios nesta condição?
   - Qual região geográfica do país concentra a maior quantidade de municípios com dependência econômica da administração pública superior à 50%?
   - Os municípios com maior dependência econômica da administração pública estão em quais regiões geográficas do país?
   

+++

## Importação dos dados

```{code-cell} ipython3
import pandas as pd
```

```{code-cell} ipython3
df = pd.read_csv('./data/pib_municipal_ibge.csv')
```

```{code-cell} ipython3
df.shape
```

```{code-cell} ipython3
df.dtypes
```

```{code-cell} ipython3
df.head()
```

## Respndendo as perguntas

+++

### 1 - Quantos municípios têm a administração pública representando mais da metade da sua atividade econômica?

```{code-cell} ipython3
df_01 = df.copy()
```

```{code-cell} ipython3
df_01.head()
```

```{code-cell} ipython3
dependence_over_fifty = df_01[df_01["Dependencia"] >= 50.0].count()

print("O total de municípios cuja dependência econômica da administração publica é igual ou maior a 50% é : " + str(dependence_over_fifty["Municipio"]))
```

### 2. Quais os 10 municípios com maior percentual de dependência econômica em relação à administração pública do Brasil? 

```{code-cell} ipython3
dependence_over_fifty = df_01[df_01["Dependencia"] >= 50.0]
dependence_over_fifty.head()
```

```{code-cell} ipython3
greater_economic_dependence = dependence_over_fifty.sort_values("Dependencia", ascending=False).head(10)
greater_economic_dependence
```

# 3. Quais os estados com maior quantidade de municípios nesta condição?

```{code-cell} ipython3
states_with_highest_dependent_municipalities = dependence_over_fifty.groupby("UF").size().sort_values(ascending=False).head(10)
```

```{code-cell} ipython3
states_with_highest_dependent_municipalities
```

## 4. Qual região geográfica do país concentra a maior quantidade de municípios com dependência econômica da administração pública superior à 50%?

+++

### Obtendo mais informações para responder a questão

+++

Para responder essa pergunta, precisamos saber a qual região geográfica do país cada estado pertence. O dataset que temos não nos fornece esta informação. Para resolver esse problema, optei por obter uma tabela da web. O site https://www.estadosecapitaisdobrasil.com/ possui uma tabela útil.

A primeira tentativa obter os dados com pandas falhou pois o site não dá acesso ao tipo de raspagem que o pandas faz.

- [Documentação sobre o método `read_html()`](https://pandas.pydata.org/docs/reference/api/pandas.read_html.html).

```{code-cell} ipython3
%conda install lxml bs4 --yes
```

```{code-cell} ipython3
regions_table = pd.read_html("https://www.estadosecapitaisdobrasil.com/")
regions_table
```

O plano B, foi utilizar o Google Sheets para para obter a tabela. O Google Sheets possui a função `IMPORTHTML` que realiza a importação de tabelas da web para um planilha. Após a extração, foi gerado um arquivo xlsx (Excel) que será importado como DataFrame pandas.

- [Documentação `IMPORTHTML`](https://support.google.com/docs/answer/3093339?hl=en)

Para realizar a importação do arquivo xlsx, foi necessário a instalação do pacote `openpyxl`.

```{code-cell} ipython3
%conda install openpyxl --yes
```

```{code-cell} ipython3
regions_table = pd.read_excel("./data/regioes_do_brasil_extraidas_da_web.xlsx")
regions_table.head(10)
```

### Concluíndo a resposta

+++

Para concluir a resposta teremos que juntar as tabelas para obtermos as regiões geográficas de cada estado. 
A documentação do pandas traz uma seção explicativa sobre junção de tabelas que faz um comparativo com SQL:

- [Junções de tabelas com pandas](https://pandas.pydata.org/docs/getting_started/comparison/comparison_with_sql.html#join)

```{code-cell} ipython3
df_02 = pd.merge(dependence_over_fifty, regions_table, on="UF") 
df_02.head()
```

```{code-cell} ipython3
regions_with_highest_dependent_municipalities = df_02.groupby("Região").size().sort_values(ascending=False)
regions_with_highest_dependent_municipalities
```

## 5. Os municípios com maior dependência econômica da administração pública estão em quais regiões geográficas do país?

+++

Para responder essa última questão, podemos utilizar a variável `greater_economic_dependence`, que armazena os 10 municípios com maior percentual de dependência econômica, buscar em `regions_table` suas respectivas regiões geográficas e agrupar por região para termos visão de onde estão os municípios com maior dependência econômica.

```{code-cell} ipython3
df_03 = pd.merge(greater_economic_dependence, regions_table, on="UF")
df_03
```

```{code-cell} ipython3
region_most_dependent_municipalities = df_03.groupby("Região").size().sort_values(ascending=False)
```

```{code-cell} ipython3
region_most_dependent_municipalities
```


____
## Referências