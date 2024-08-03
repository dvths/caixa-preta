---
aliases:
  - Middlewares de Download
tags:
  - python_scprapy
  - python
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Middlewares de Download

Os Middlewares de Download são [[23112023134933-hooks|Hooks]] que ficam entre a Engine do Scrapy e o componente Downloader. Sua função é processar as solicitações a medida que passam da Engine para o Downloader e as respostas na medida que passam do Downloader para a Engine.



![[middleware_dowload.jpg]]

O Scrapy vem com os seguintes middlewares de download  habilitados:

```python
# middlewares.py

DOWNLOADER_MIDDLEWARES_BASE = {
    # Engine side
    'scrapy.downloadermiddlewares.robotstxt.RobotsTxtMiddleware': 100,
    'scrapy.downloadermiddlewares.httpauth.HttpAuthMiddleware': 300,
    'scrapy.downloadermiddlewares.downloadtimeout.DownloadTimeoutMiddleware': 350,
    'scrapy.downloadermiddlewares.defaultheaders.DefaultHeadersMiddleware': 400,
    'scrapy.downloadermiddlewares.useragent.UserAgentMiddleware': 500,
    'scrapy.downloadermiddlewares.retry.RetryMiddleware': 550,
    'scrapy.downloadermiddlewares.ajaxcrawl.AjaxCrawlMiddleware': 560,
    'scrapy.downloadermiddlewares.redirect.MetaRefreshMiddleware': 580,
    'scrapy.downloadermiddlewares.httpcompression.HttpCompressionMiddleware': 590,
    'scrapy.downloadermiddlewares.redirect.RedirectMiddleware': 600,
    'scrapy.downloadermiddlewares.cookies.CookiesMiddleware': 700,
    'scrapy.downloadermiddlewares.httpproxy.HttpProxyMiddleware': 750,
    'scrapy.downloadermiddlewares.stats.DownloaderStats': 850,
    'scrapy.downloadermiddlewares.httpcache.HttpCacheMiddleware': 900,
    # Downloader side
}
```

Estes middlewares controlam tudo desde:
- tempo limite das solicitações
- quais cabeçalhos enviar em uma solicitação
- qual user agent usar com as solicitações
- novas tentativas para o caso de falhas na solicitação
- gerenciamento de cookies, cache e compactação de resposta

## Desabilitar Middlewares

É possível desabilitar qualquer um dos middlewares configurando-o como `None` no arquivo [[23112023135950-settings|settings.py]]. Abaixo segue um exemplo de desabilitação do middleware `RobotsTxtMiddleware`:

```python
# settings.py

DOWNLOADER_MIDDLEWARES = {
    'scrapy.downloadermiddlewares.robotstxt.RobotsTxtMiddleware': None,
}
```
## Substituindo Middlewares ou Inserindo Middlewares personalizados

Criar middlewares ou substituí-los também é possível. Alguns casos em que isso pode ser necessário incluem:

- alterar uma solicitação antes de ela ser enviada ao site (alterar proxy, user agent, etc)
- alterar uma resposta antes de ela ser passada para uma spider
- tentar novamente uma solicitação caso a resposta não contiver os dados corretos em vez de passar a resposta recebida a uma spider
- passar uma resposta para spider sem buscar uma página web
- abandonar silenciosamente algumas solicitações.

O [[23112023135844-scrapy_exemplo_4|Exemplo 4]] demonstra como criar um middleware personalizado para usar um proxy com todas as solicitações:

Para habilitá-lo, neste caso, passamos a configuração no arquivo [[23112023135950-settings|settings.py]]:

```python
## settings.py

PROXY_USER = 'username'
PROXY_PASSWORD = 'password'
PROXY_ENDPOINT = 'proxy.proxyprovider.com'
PROXY_PORT = '8000'

DOWNLOADER_MIDDLEWARES = { 
    'myproject.middlewares.MyProxyMiddleware': 350, 
}
```

---
## Referencias