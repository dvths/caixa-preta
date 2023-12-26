---
aliases:
  - A forma como os dados estão estruturados define a forma como trabalharemos com eles
tags:
  - analise_exploratória
  - analise_de_dados
  - processar
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

---
# A forma como os dados estão estruturados define a forma como trabalharemos com eles.

Um conjunto de dados é chamado de Estruturado quando são apresentados de uma forma lógica e ordenada.  

Por outro lado, ao contrário dos dados estruturados, os dados não estruturados (ou não retangulares) possuem uma estrutura que não segue uma ordem ou uma distribuição específica, mas estruturas complexas que podem ser representadas de diversas formas. Esse formato de dados não será estudado nesse momento, contudo, [[17052023210016-dados-não-estruturados-não-são-menos importantes|dados não estruturados não são menos importantes]].

## Dados Estruturados ou Retangulares

Muitos conceitos da estatística são a base para ciência de dados, por exemplo, [[14052023235214-analise-exploratória-de-dados-é-um-conceito-fundamental-tanto-da-estatística-quanto-da-ciência-de-dados|a análise exploratória de dados é um conceito fundamental, tanto da estatística quanto da ciência de dados]].

Como consequência da intersecção entre as duas áreas, algumas das terminologias usadas podem parecer confusas (principalmente se você está lendo materiais de fontes distintas). 

Também há, na engenharia de dados, área técnica que lida com o gerenciamento e manutenção de Sistemas de Gerenciamento de Banco de Dados (SGBDs), uma terminologia própria: 
- [[25052023221247-o-modelo-relacional-representa-o-banco-de-dados-como-uma-coleção-de-relações|O modelo relacional representa o banco de dados como uma coleção de relações]].

Apesar das diferentes terminologias utilizadas para definir os elementos dos dados retangulares, na maioria das vezes, elas se referem à mesma coisa. Por exemplo, Dados Retangulares também são referidos como Tabelas, Relações, Planilhas, Dados Tabulares ou Quadro de Dados (Data Frame).   

A estrutura básica que caracteriza os dados estruturados é a *matriz retangular* (ou bidimensional), uma estrutura definida por linhas e colunas onde cada linha representa um registro e cada coluna uma variável, os valores nessas linhas são chamadas de observações, ou *domínio*.  

![[tidy-1.png]]

Os elementos dos Dados Retangulares (e seus sinônimos) são os seguintes: 

- Características:
	- Uma coluna da tabela
	- Sinônimos:
		- Atributo
		- Entrada
		- Indicador
		- Variável Independente
- Registro:
	- Uma linha da tabela
	- Sinônimos:
		- Caso
		- Tupla
		- Exemplo
		- Instância
		- Observação
		- Padrão
		- Amostra

Uma estrutura de dados retangular também pode conter uma variável  usada para representar um *estado*, um alvo, ou objetivo final que um experimento ou estudo tenta estimar. Chamamos essa variável de Conclusão:
- Sinônimos:
	- Variável Dependente 
	- Resposta
	- Alvo
	- Resultado

Os dados retangulares também podem ser configurados como Dados Amplos e Dados Longos: 
- Dados Amplos: possuem valores que não se repetem na primeira coluna: 
![[Dados Amplos.png]]
- Dados Longos: os valores na primeira coluna se repetem:
![[Dados Longos.png]]
Ambas os formatos trazem os mesmos dados, mas são expressos de forma diferentes.

De forma geral, na analise dos dados, o formato utilizado é o Amplo, mas, dependendo do que será feito com os dados, o formato Longo pode ser o mais adequado. Por exemplo, se for necessário visualizar várias variáveis em um gráfico, o formato Longo será mais útil. 

Os dados retangulares são o bloco fundamental para a exploração de padrões e tendencias nos dados e [[17052023211923-a-taxonomia-de-tipos-de-dados-importa-para-estruturação-manipulação-e-processamento-correto-dos-dados|a taxonomia de tipos de dados importa para estruturação, manipulação e processamento correto dos dados]]. 


---
## Referencias:

Google Data Analytcs Certification - C3S1 - Diferencie formatos e estruturas de dados

[[@bruceEstatisticaPraticaPara2019]]

>[!cite]  Termos-chave para Dados Retangulares” Yellow Highlight [Page 27](zotero://open-pdf/library/items/I9F6Y368?page=27&annotation=BGZK3S7N) 

>[!cite]  Dado retangular é basicamente uma matriz bidimensional com linhas indicando registros (casos) e colunas indicando características (variáveis).” Yellow Highlight [Page 28](zotero://open-pdf/library/items/I9F6Y368?page=28&annotation=4RY6LXFY) 