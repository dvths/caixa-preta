---
aliases:
  - Fluxo de dados do Scrapy
tags:
  - python_scprapy
  - python
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Fluxo de dados do Scrapy

O Scrapy é um estrutura completa de raspagem de dados que gerencia grande parte da complexidade da raspagem através de uma arquitetura modular.

Os principais componentes da arquitetura do Scrapy são os seguintes:

- [[23112023140430-engine|Engine]]
- [[23112023140516-scheduler|Scheduler]]
- [[23112023123841-spiders|Spiders]]
- [[23112023134232-scrapy-pipelines|Pipelines]]
- [[23112023140633-downloader|Downloader]]

Uma descrição de como estes componentes atual pode ser ilustrada como no exemplo abaixo:

![[fluxo_de_dados_scrapy.jpg]]

1. A Engine obtém as requisições iniciais de rastreamento da Spider
2. A Engine agenda as requisições no [[23112023140516-scheduler|Scheduler]] e pede a próxima solicitação
3. O Scheduler retorna as próximas requisições para Engine
4. O Scheduler envia as requisições para o Downloader passando pelo [[23112023135541-middlewares-de-download|Middleware de Download]]
5. Assim que a página terminar de baixar, o [[23112023140633-downloader|Downloader]] gera uma resposta (com a página) e envia para a Engine, passando pelo Middleware de Download ([`process_response()`](https://docs.scrapy.org/en/latest/topics/downloader-middleware.html?highlight=process_response#scrapy.downloadermiddlewares.DownloaderMiddleware.process_response))
6. A Engine recebe a resposta do Downloader e a envia para Spider para processamento passando pelo [[23112023141112-middlewares-de-spider|Middlewares de Spider]] ([`process_sipider_input()`](https://docs.scrapy.org/en/latest/topics/spider-middleware.html?highlight=process_spider#scrapy.spidermiddlewares.SpiderMiddleware.process_spider_input))
7. A Spider processa a resposta e retorna os itens raspados e novas requisições para Engine, passando pelo Middleware de Spider ([`process_spider_output()`](https://docs.scrapy.org/en/latest/topics/spider-middleware.html?highlight=process_spider#scrapy.spidermiddlewares.SpiderMiddleware.process_spider_output))
8. A Engine envia os item processados para [[23112023134232-scrapy-pipelines|Pipeline de Items]]. Em seguida, envia as requisições processadas para o [[23112023140516-scheduler|Scheduler]] e pede possíveis novas requisições para raspar.
9. A partir da etapa 3, o processo se repete até não haver mais requisições agendadas no Scheduler.




---
## Referencias