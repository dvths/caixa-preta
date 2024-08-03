---
aliases:
  - A coleta de dados é o conjunto de métodos e técnicas para busca de informação e significados
tags:
  - analise_exploratória
  - analise_de_dados
  - coletar
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

---
# A coleta de dados é o conjunto de métodos e técnicas para busca informação e significados

Consulte o [[21052023134904-resumo-dos-conceitos-iniciais-da-ciência-de-dados|Resumo dos conceitos iniciais da Ciência de dados]] lá há uma sintetização de todos os conceitos abordados nessa nota.

Os dados podem vir de diversas fontes, podem ter sido coletados utilizando diversas técnicas e podem ter sido coletados por pessoas que não necessariamente tiveram uma relação direta com os dados, como no caso de dados abertos. [[18052023170722-dados-abertos-representam-um-grande-impacto-na-colaboração-científica|Dados abertos representam um grande impacto na colaboração científica]], contudo, independente se o dados são abertos ou não, [[18052023122041-a-análise-de-dados-possui-padrões-éticos-que-devem-ser-seguidos|dados possuem padrões éticos que devem ser seguidos]].

Nessa fase de definição de quais dados serão coletados e como serão coletados, é crucial [[16052023235037-pensar-nas-perguntas-certas|pensar nas perguntas certas]]. Isso diminui o risco de enviesarmos os resultados. [[17052023231919-a-imparcialidade-é-fundamental-para-evitar-a-criação-ou-reforço-de-vieses-que-tornem-os-dados-tendenciosos|A imparcialidade é fundamental para evitar a criação ou reforço de vieses que tornem os dados tendenciosos]].  

Exitem técnicas e métodos que nos ajudam a levantar as questões focadas no problema de negócio, hipótese ou estudo que realizaremos com os dados. A técnica SMART, por exemplo. [[16052023235716-smart-é-uma-técnica-para-elaboração-de-perguntas-efetivas|SMART é uma técnica para elaboração de perguntas efetivas]]. Mas é importante ter em mente que, muitas vezes, [[17052023002733-boas-anotações-são-tão-importantes-quanto-boas-perguntas|boas anotações são tão importantes quanto boas perguntas]]. 

Durante o processo de levantamento de requisitos e definição do domínio do problema, precisamos ponderar os recursos para coleta, ou seja, se a fonte dos dados será:
- **Fonte Primária: Dados que ainda precisam ser coletados**:
  - Estudos de caso;
  - Experimentos;
  - Pesquisas amostrais encomendadas ou não;
- **Fontes secundária: Dados já coletados**:
  - Censo;
  - Resultados de Pesquisas amostrais encomendadas publicas ou privadas;
  - Registros administrativos;
  - Big data (grandes e variados volumes de dados não planejados ou
    organizados):
    - Grandes volumes de transações financeiras;
    - Comunicação e mensagens trocadas na web;
    - Imagens;
    - Buscas realizadas na web;

Independente se a fonte de dados é primária ou secundária, as técnicas para coleta desses dados depende do tipo de estudo, necessidade do negócio ou experimento que se deseja realizar. A coleta dos dados pode ser: 
- **Observacional - orientada pela observação da realidade**: 
	- Esse tipo de coleta, geralmente, é feita por estudos observacionais que envolvem:
	  - **Pesquisas** orientadas à obtenção de informações sobre às características de interesse (ou variáveis de interesse) relacionadas ao tema investigado como, por exemplo:
		  - Presença de seres vivos em um determinado ambiente;
		  - Fenômenos climáticos;
		  - Fluxo de usuários em um site;

	- As características desse tipo de coleta incluem:
		- Observação passiva da realidade;
		- Amostragem aleatória usada para seleção das unidades que serão observadas;
		- Custo baixo;
		- Grandes amostras.

- Experimental - é orientada às especificações de um determinado experimento, levando em conta:
	- Variáveis de interesse/resposta
	- Variáveis de controle (o que afeta a resposta?)
	- Desenho do experimento e randomização (aleatoriedade)
 
	A sua coleta é feita por experimentos específicos para das áreas interessadas no projeto e possui as seguintes características:
	- Intervenção na realidade;
	- Condições controladas;
	- Observação dos efeitos das intervenções;
	- Aleatoriedade na alocação de unidades em grupos: por exemplo tratamento(s) $X$ controle(s);
	- Custo elevado;
	- Amostras pequenas;

Portanto, coletamos dados de uma **População** utilizando abordagens observacionais ou experimentais que podem se originar de diversas fontes e coletados de diversas maneiras, como:
- Entrevistas
- Formulários
- Questionários
- Observações da realidade
- Pesquisas

Esses dados coletados representam a *Amostra*, ou seja, um subconjunto de uma *População*. A partir dessa amostra observamos as *Variáveis de interesse*, ou (características de interesse), para o estudo ou experimento que será desenvolvido. 

Uma vez com os dados em mãos, [[17052023175822-a-forma-como-os-dados-estão-estruturados-define-a-forma-como-trabalharemos-com-eles|a forma como os dados estão estruturados define a forma como trabalharemos com eles]]. Alem disso, conhecer [[17052023211923-a-taxonomia-de-tipos-de-dados-importa-para-estruturação-manipulação-e-processamento-correto-dos-dados|a taxonomia de tipos de dados importa para estruturação, manipulação e processamento correto dos dados]], afinal de contas, nem sempre os dados estarão estruturados para que possamos trabalhar com eles. Há técnicas mais avançadas para lidarmos com dados não estruturados pois, [[17052023210016-dados-não-estruturados-não-são-menos importantes|dados não estruturados não são menos importantes]]. Contudo, não será o foco dos estudos neste momento.


---
## Referencias:

curso:: [[GDAC]]


[Estatística - DEST UFPR](https://youtube.com/playlist?list=PLQcLb-PUD9WNZnVBYDKEonioyJw3nEaOM)

