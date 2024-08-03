---
titulo_livro: Manual de Análise de Dados
ano: 2024
autor:
  - Patrícia Belfiori
  - Luiz Paulo Fávero
aliases:
  - Variáveis categóricas em Escala Nominal
topico:
  - 1. Tipos de Variáveis e Escalas de Mensuração e Precisão
tags:
  - estatística
  - escala_nominal
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%


---
# Variáveis categóricas em Escala Nominal

A escala nominal classifica as unidades em classes ou categorias em relação à característica representada, não estabelecendo qualquer relação de ordem ou grandeza. É chamada de Nominal porque as categorias se diferenciam apenas pelo nome. 

Podemos atribuir valores numéricos às categorias, porém, operações aritméticas como adição, subtração, multiplicação e divisão sobre esses números são inadmissíveis. Essa escala permite apenas operações aritméticas mais elementares como a contagem do número de elementos de cada classe ou categoria ou aplicar testes de hipóteses referentes a distribuição das unidades da população nas classes. Dessa forma, a maioria das estatísticas usuais, como média e desvio padrão, não tem sentido para variáveis qualitativas de escala nominal.

Como exemplos de variáveis não métricas em escalas nominais, podemos mencionar:
- Profissão
- Religião
- Estado Civil
- Localização Geográfica ou
- País de Origem.

Para representar o comportamento dos dados de natureza nominal, podem-se utilizar estatísticas descritivas como tabelas de distribuição de frequências, gráficos de barras ou setores ou, ainda, o cálculo da moda.

Exemplo: Uma variável não métrica relativa ao país de origem de um grupo de 10 grandes empresas multinacionais:


| Empresa            | País de Origem |
| ------------------ | -------------- |
| Exxon Mobil        | 1              |
| JP Morgan Chase    | 1              |
| General Eletric    | 1              |
| Royal Dutch Shell  | 2              |
| ICBC               | 3              |
| HSBC Holdings      | 4              |
| PetroChina         | 3              |
| Berkshire Hathaway | 1              |
| Wells Fargo        | 1              |
| Petrobras          | 5              |
|                    |                |
Como a variável _País de Origem_ está representada na forma de números, é necessário que sejam atribuídos rótulos a cada categoria da variável:

| Categoria | País           |     |
| --------- | -------------- | --- |
| 1         | Estados Unidos |     |
| 2         | Holanda        |     |
| 3         | China          |     |
| 4         | Reino Unido    |     |
| 5         | Brasil         |     |









----
## Referências 