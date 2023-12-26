---
classe: Leitura
alias: Web scraping é a prática de coletar dados por qualquer meio que não seja um  programa interagindo com uma API ou um navegador
livro: Web Scraping Com Python
topico: Conceitos iniciais de web scraping
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%


---
# Web scraping é a prática de coletar dados por qualquer meio que não seja um  programa interagindo com uma API ou um navegador

[[19052023112129-a-coleta-de-dados-é-o-conjunto-de-métodos-e-técnicas-para-busca-de-informação-e-significados|A coleta de dados é o conjunto de métodos e técnicas para busca de informação e significados]]. Uma das maneiras de coletar e processar grandes volumes de dados é utilizando Web Scraping.  

Conhecido também como Raspagem de Dados, esta é uma forma de coleta que "[[@mitchellWebScrapingPython2018#^0bc5cf|engloba uma grande variedade de técnicas de programação e de tecnologias, por exemplo, análise de dados, parsing de idiomas naturais e segurança de informação.]]" (MITCHELL, 2018)

Um scraper consiste em um programa automatizado que consulta um servidor web, requisita os dados (em geral na forma de HTML) e então realiza um parse desses dados para extrair as informações necessárias que podem ser processadas e armazenadas em banco de dados.

Os web scrapers são necessários quando não existe uma API que atenda a uma necessidade específica.

Existem várias razões para isso:

- Não existe uma API coesa para a necessidade de coletar um volume pequeno de
  dados de um grande conjunto de sites;
- Os dados são incomuns e a fonte não considerou a criação de uma API;
- A fonte não tem uma estrutura ou habilidade técnica para a criação de uma API;
- Os dados são valiosos/protegidos e a fonte não quer que eles sejam
  disseminados;
- E mesmo que haja uma API, os limites para volume e requisição podem ser
  empecilhos.

[[07062023233422-web-scraping-exige-conhecimento-da-infraestrutura-necessária-para-tráfego-de-dados-na-web|Web Scraping exige conhecimento da infraestrutura necessária para tráfego de dados na web]]


----
## Referências 