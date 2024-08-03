---
aliases:
  - A taxonomia de tipos de dados importa para a estruturação
  - manipulação e processamento correto dos dados
tags:
  - analise_de_dados
  - analise_exploratória
  - processar
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

---
# A taxonomia de tipos de dados importa para estruturação, manipulação e processamento correto dos dados

Um dos maiores desafios da ciência de dados é transformar dados brutos em informação acionável. Nesse ponto, sabemos tanto que [[19052023112129-a-coleta-de-dados-é-o-conjunto-de-métodos-e-técnicas-para-busca-de-informação-e-significados|a coleta de dados busca transformar números em informação e significados]], quanto que a [[14052023235214-analise-exploratória-de-dados-é-um-conceito-fundamental-tanto-da-estatística-quanto-da-ciência-de-dados|analise exploratória de dados é um conceito fundamental tanto da estatística quanto da ciência de dados]].  

Precisamos saber [[16052023235037-pensar-nas-perguntas-certas|pensar nas perguntas certas]] a fim de termos clareza em nossos objetivos e evitarmos vieses que podem distorcer sistematicamente os resultados da análise e infligir princípios éticos e legais:
- [[17052023231919-a-imparcialidade-é-fundamental-para-evitar-a-criação-ou-reforço-de-vieses-que-tornem-os-dados-tendenciosos|A imparcialidade é fundamental para evitar a criação ou reforço de vieses que tornem os dados tendenciosos]]
- [[18052023122041-a-análise-de-dados-possui-padrões-éticos-que-devem-ser-seguidos|Dados possuem padrões éticos que devem ser seguidos]]

[[17052023175822-a-forma-como-os-dados-estão-estruturados-define-a-forma-como-trabalharemos-com-eles|A forma como os dados estão estruturados define a forma como trabalharemos com eles]]. Para estruturação manipulação e processamento correto dos dados é necessário conhecermos sua taxonomia. Somente assim poderemos saber como dar uma forma estruturada aos dados. 

Existem dois tipos básicos de dados estruturados: *Numérico* e *Categórico*. 

O tipo de dados NUMÉRICO representa medidas específicas e objetivas de fatos numéricos. Chamamos isso de DADOS QUANTITATIVOS.

O tipo de dados CATEGÓRICOS representam medidas subjetivas e explicativas de qualidades e características. Chamamos isso de DADOS QUALITATIVOS  ^b39b96

Os tipos NUMÉRICOS são divididos em dois grupos: 
- Contínuos: ^0a5c74
	- Dados que podem assumir qualquer valor em um **intervalo**, como velocidade do vento e duração de um evento.
	- Sinônimos:
		- Intervalo
		- Flutuação
		- Numérico
- Discretos:
	- Dados que podem assumir apenas um conjunto fixo de valores, como  nome de um estado ou país.
	- Sinônimos:
		- Contagem
		- Inteiros
  
Os tipos CATEGÓRICOS, podem assumir apenas um conjunto específico de valores representando um conjunto de possíveis categorias.
- Sinônimos:
	- Enumeração
	- Enumerado
	- Nominal
	- Politômico
 
Esse tipo de dados é dividido em dois subtipos:
- Binários
	- Um caso especial de dados categóricos com apenas duas categorias:
		- Verdadeiro
		- Falso
		- 0
		- 1
	- Sinônimos:
		- Dicotômico
		- Lógico
		- Indicador
		- Booleano
- Ordinais
	- Dado categórico com uma ordem explícita como uma escala (Bom, Regular, Ruim) ou classificação numérica ordenada (1, 2, 3, 4, 5)
	- Sinônimos:
		- Fator
		- Ordenado

---
## Referencias:

Google Data Analytcs - C3S1 - Preparar os dados para exploração 
[[@bruceEstatisticaPraticaPara2019]] p.25
