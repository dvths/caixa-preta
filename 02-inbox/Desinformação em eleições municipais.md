---
id: 3f03e6f1-a20d-453a-8499-8926cc176b36
aliases:
  - Desinformação em eleições municipais
tags:
  - não_processado
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%
___
# Desinformação em eleições municipais

- Tai Nalon: Cofundadora e diretora executiva do Aos Fatos
	- [Slides](https://drive.google.com/file/d/1d7G6sxhm7e68xJMg5qc4qoLVG1_lBzko/view?usp=drive_link)


- Perguntas para contextualização do problema: 
	- Por que alguém compartilha desinformação?
	- Quais os interesses por trás da desinformação?
	- Como as facilidades fornecidas pela IA favorecem a criação e a disseminação da desinformação?
	- É possível categorizar a desinformação, identificando padrões e a que agenda estão ligadas as fake news?

Tai argumenta que ferramentas eficientes de combate a desinformação são caras. O preço varia conforme a eficiência da ferramenta. Como desenvolvedor e engenheiro de dados como criar ou colaborar com ferramentas realmente eficientes de combate a desinformação? Imagino que, primeiro, definir o que é "eficiente" nesse contexto. Conhecer algumas ferramentas importantes e estudá-las a fundo. Por onde começar? Rever o curso de OSINT da Escola de dados?

Entender como é possível utilizar IA para criação de mentiras:
- Imagens:
	- GAN - Generated Images
	- Text-to-image Model
	- AI - Manipulated Images
- Video:
	- AI - Manipulated Avatars
	- AI - Manipulated Video
- Text:
	- LLMs
- Audio:
	- Text-to-voice Model
	- Voice Cloning

Alerta para o uso dos nossos dados disponíveis na web e em outros lugares para municiar a criação de campanhas de desinformação micro direcionadas construídas a partir de inteligência artificial.
- Buscar exemplos de campanhas micro direcionadas como:
	- pequenos grupos específicos com afinidades ideológicas
	- golpes financeiros

No contexto de eleições municipais, conhecer a regulamentação do uso de IA por candidatos e chapas:
- Art 9º da regulamentação

Uma ferramenta comentada na aula, desenvolvida pelo Aos Fatos é a FATIMA, chatbot que utiliza a base de dados do Aos Fatos para auxiliar no esclarecimento de duvidas sobre noticias duvidosas. 

A ferramenta atende duas características consideradas pela Tai como essenciais para o uso ético da IA:
- Transparência, a partir do momento em que deixa claro como a informação foi gerada
- Método auditavel, uma vez que utilizando uma base de dados curada pela empresa, os riscos da geração de respostas falsas ou ambíguas diminui.


## O uso de IA no jornalismo 

- Aimee Rinehart - Gerente de produtos de estratégias de IA da AP
	- links:
		- [apredentação](https://drive.google.com/file/d/10STNEO_97vbyOqH6OqPwlKl9JQ_pyw-Z/view?usp=drive_link)
		- [lista de ferramentas abordadas na aula](https://drive.google.com/file/d/1KaQy_Uph6BY8doQxmFlvTXsqJplC3-lN/view?usp=drive_link)

A Aimee expõe como as ferramentas de IA são utilizadas no jornalismo atual. Quais os veículos que as utilizam e, brevemente, como são utilizadas.

Me ocorreu, enquanto assitia ao video uma ideia que pode evoluir: Realizar a coleta e análise das postagens de todas as páginas noticiosas de Caruaru e, utilizando IA, responder:
- Quais os tipos de notícias mais recorrentes?
- Há páginas tendenciosas para um determinado espectro político?
- Há notícias falsas sendo disseminadas por essas páginas? Qual a magnitude? Qual página se destaca? A quem, ou que grupo de interesses, está relacionada? Que tipo de desinformação?
Para isso, posso utilizar a API do Instagram e as API do ChatGPT ou Gemini para realizar resumos, ou as ferramentas indicadas na aula, como Zapier o Make, que são capazes de fornecer:
- Analise de dados desestruturados
- Extração de informação de contatos em blocos de texto
- Resumos TR;DR
- Transformação de notas de reunião em resumos
- Detecção de sentimentos básicos e avançãdos
- Atendimento via chatbot (pode ser algo semelhante ao Fatima do Aos Fatos?)
- Tradução de linguagens de programação
- Perguntas para entrevistas

Para Aimee, o futuro é muito promissor tanto para a comunidade de código aberto quanto para uma colaboração radical na industria.


## Uso de IA para produção de desinformação e como detectá-la

- Shaydenay Urbani - gerente de parcerias do Information Futures Lab da Brown University
	- [conteúdo](https://drive.google.com/file/d/1Faq-UxthR97Tb5TLNQSW8tuyxMar918-/view?usp=drive_link)

Shaydenay expões a diferença entre informação errônea e desinformação. Basicamente, a diferença entre essas duas categorias é a intensão. Enquanto a informação errônea tem uma carácter ingênuo, embora tenha potencial para desinformar, esta não tem é propagada com a intensão de causar um prejuízo. A desinformação, por outro lado sim. A desinformação pode ser caracterizada pela intencionalidade em causar confusão, manipulação ou prejuízos em diferentes níveis. Acredito que a informação errônea é disseminada quando uma desinformação passa a circular.

Ela aponta 7 categorias de desinformação e informação errônea (a maioria dos exemplos foram descritos por mim por fazerem mais sentidos para mim):

- Piadas: memes ou conteúdo de páginas satíricas que acabam sendo utilizadas como informações verdadeiras.
- Falsas conexões: manchetes dúbias, aquelas do tipo que pouco reflete o conteúdo de uma matéria. Ou imagens e videos fora de contexto.
- Conteúdo enganoso: manipulações estatísticas, ou seja, enquadramentos errados na divulgação de dados (bastante abordado no livro A arte da estatística).
- Conteúdo manipulado: alteração de imagens, videos, textos e audios (o que vi na aula da Tai Nalon).
- Conteúdo impostor: uso de marcas, logos, símbolos de maneira que a mentira ganhe um ar de credibilidade. Geralmente emulando paginas de jornais ou sites de notícias ou até mesmo marcas de governos e empresas.
- Conteúdo fabricado: aqueles gerados por IA ou montagens com ferramentas de edição de vídeo. 

Shaydenay diz que informações errôneas e desinformação são mais convincentes e acessíveis do que informações verdadeiras. Uma poque, de forma geral circulam em lugares considerados "seguros" como grupos familiares, redes pessoais, ou até é compartilhado por alguém com certa credibilidade na comunidade. Outra porque lidam com os medos das pessoas. Além do mais, invariavelmente, utilizam imagens, videos e audios verdadeiros para tirá-los de contexto. Pensei em uma coisa que ouvi há bastante tempo: Uma boa mentira é aquela que tem um pouco de verdade. Acho que esse pensamento cabe bem aqui.

Características dessas categorias de desenformação podem incluir:
- Emular páginas de noticias, governos, empresas para dar uma ar de credibilidade para a informação falsa
- Criação de memes e materiais visuais atraentes
- Ressurreição mentiras antigas (isso principalmente em contextos eleitorais)
- Manipulação ou invenção de diálogos (posts, fotos, prints) entre políticos
- Uso da religião ou algum nível de intimidação psicológica alarmista que façam com que pessoas tenham medo de algum tipo consequência

Como nas outras aulas, fica claro que o poder de convencimento do conteúdo produzido por IA tende a agravar e acelerar a disseminação de conteúdo dentro das categorias citadas.

Como proposta para combate, Shaydenay destaca:
- Informar as pessoas que tipo de mentiras elas poderão ouvir principalmente no contexto das eleições, isto é, educação
- Evitar ridicularizar quem compartilha informação errônea, dado que, muitas vezes isso reflete o medo da pessoa, ter empatia
- Evitar amplificação desnecessária da desinformação

## Monitoramento de redes sociais - metodologias e ferramentas

- Cristina Tardágla - Agencia Lupa 
	- [material](https://drive.google.com/file/d/1zu--pI8Le4k5d2MEeu0n6wfsYKRTh6_1/view?usp=drive_link)

O conteúdo fornecido por Cristina foi bem objetivo e trouxe formas de preparação para o monitoramento e ferramentas que podem ser úteis para execução dessa tarefa. 

- Passo 1: Preparação
	- Mapeamento das mentiras já contadas
		- Criação de um "dossiê" de conteúdos já checados:
			- Uma percepção que tenho é que, no contexto local, em que me encontro, é possível perceber que grande parte do conteúdo falso que circula é derivado de mentiras propagadas por grupos políticos cujo os tentáculos têm abrangência nacional, ou seja, nos municípios, mentiras vêm de cima. Ter um banco de dados com fatos já checados e desmentidos tem grande potencial de mitigar a volta da circulação de mentiras antigas.
			- Para isso, posso utilizar sites como o da Lupa ou Aos Fatos para recolher e mapear o que já foi checado com o objetivo de ganhar agilidade na publicação da verdade em vez de investigar tudo do zero.
			- Modelar esse banco de dados de fatos checados, ter uma lista dos mentirosos, e os grupos a que pertencem.
		- Quais mentiras ainda podem contar:
			- Informações errôneas ou desinformação podem surgir, principalmente, acerca te temas que políticos consideram legado como obras, ações sociais, investimentos, e resultados de políticas publicas de forma geral. Portanto é importante:
				- Monitorar o discurso e como ele se transforma ao longo da carreira de um político
				- Currículo e biografia do político
				- Dados públicos relacionados ao discurso político que podem ser checados
				- Qualquer informação online disponível sobre o político ou grupo político em questão
			- Fontes de dados para esse tipo de levantamento de dados incluem:
				- LAI
				- Releases da assessoria de imprensa
				- Entrevistas
				- Conversas online
				- Portais da transparência
				- Dados públicos
					- DivulgaCand do TSE
					- SIDRA do IBGE
- Passo 2: Ferramentas
Embora cristina tenha abordados algumas ferramentas para criação desse dossiê, como engenheiro de dados, percebo que posso organizar e modelar esse datalake investigativo pode e deve seguir tanto os processos e procedimentos do ciclo de vida dos dados quanto o ciclo de vida da engenharia de dados. Nesse caso, boa parte da coleta será feita por raspagem e fontes de origem discriminados pela Cristina utilizando tanto ferramentas indicadas por ela quanto por ferramentas que deverão ser desenvolvidas especificamente para isso. 
- Monitoramento de currículos e redes sociais:
	- Visualping (paga) - uma ferramenta que pode ser substituida por um raspador com sellenium (que tira prints por exemplo)
	- Coleta, transformação e armazenamento de dados desestruturados como documentos e resultados de raspagem em APIs de redes sociais
	- Bases de Dados Públicas (tanto as já tratadas pela BD) quanto outras que podem conter informações desagregadas por município (abordadas, inclusive, na aula da Jamile)
	- Estudo e utilização de ferramentas de OSINT:
		- Browse.ia (pago)
		- Bellingcat (abordado no curso de osint da Escola de dados, rever!)
		- Intel Techniques (buscas em redes sociais)
		- Google Trands e Google Fact Check Explore
		- Anúncios: 
			- Meta Ads (através da biblioteca de anuncios da meta abordado na aula da Jamile) 
			- Google Ads (verificar se há algum recurso semelhante com a biblioteca de anúncios da meta)
			- TikTok Ads
		- Cristina também indica o LipaScan que monitora informações difíceis como no Telegram e no Youtube (pesquisar seu funcionamento, parece muito interessante)
Boa parte do que foi comentado por Cristina foi abordado por Jamile com o incremento de mais dados públicos que podem ser utilizados como origem para o datalake.

## Acesso a Dados Municipais

- Jamile Santana - Escola de dados

A aula da Jamile foi muito bem direcionada para as possibilidades de obtenção de dados desagregados municipais que contribuem para o combate a desinformação a nível local. 

Ela cita um artigo interessante para estudo do tema: [Desafios do combate a desinformação no Brasil: Modalidades e perspectivas](https://jcomal.sissa.it/article/pubid/JCOMAL_0601_2023_A07/).

E também cita o fato de que as estatísticas podem ser muito facilmente deturpadas, gerando informações na categoria "Conteúdo Enganoso" abordada na aula de Shaydenay.

Entre as fontes de dados estruturados que podem ser origem para o datalake ela destaca:
- Universidades
- Portais da Transparência (Federal, Estaduais, municipais)
- Lai
- DataSUS
- Secretarias de Segurança Publica
- INEP
- Fundações e organizações
- Datapedia
- IEPS data
- Bibliotecas de anúncios da META
- IMLs
- Conselho Tutelar
- Vigilância Epidemiológica municipal
- CRAS
- CREAS

Bancos de dados desestruturados que podem ser organizados para monitoramento e investigação:
- Monitoramento de discursos
	- Videos
	- Áudios
	- Post em redes sociais
- Criação de um banco de dados sobre as características da cidade e principais atores do contexto de cobertura como:
	- habitantes
	- orçamento 
	- características territoriais
	- principais conflitos
	- lista de bairros periféricos
	- lista de autoridades e representantes da sociedade civil
- Criação de um banco de dados sobre a estrutura de dados públicos do município para monitoramento:
	- Plano Plurianual - PPA (a cada 4 anos)
	- Lei de Diretrizes Orçamentárias - LDO (para o ano seguinte)
	- Lei Orçamentária Anual - LOA (ano vigente)
	
LAI - Algumas ações imprescindíveis de boas práticas:
- Conhecer e dominar as normas da LAI
- Conhecer e dominar o conteúdo do portal da transparência da cidade para ser mais efetivo nos pedidos de acesso
- Criar um controle próprio de pedidos e prazos
- Manter uma rotina de pedidos (um por mês no mínimo)
- Compartilhar
- Documentar os dados obtidos


## Segunda semana
### Ferramentas para verificação de desinformação (parte 1)

- Craig Silverman, especialista em desinformação online


				

---
## Referencias