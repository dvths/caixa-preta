---
aliases:
  - Middlewares de Spider
tags:
  - python_scprapy
  - python
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Middlewares de Spider

Middlewares de Spider são [[23112023134933-hooks|Hooks]] que ficam entre a Engine e as Spiders e processam as entradas (response) e as saídas (items e requests).  

![[middleware_de_spider.jpg]]

Por padrão, o Scrapy tem os seguintes middlewares de spider habilitados:

```python
# settings.py

SPIDER_MIDDLEWARES_BASE = {
    # Engine side
    'scrapy.spidermiddlewares.httperror.HttpErrorMiddleware': 50,
    'scrapy.spidermiddlewares.offsite.OffsiteMiddleware': 500,
    'scrapy.spidermiddlewares.referer.RefererMiddleware': 700,
    'scrapy.spidermiddlewares.urllength.UrlLengthMiddleware': 800,
    'scrapy.spidermiddlewares.depth.DepthMiddleware': 900,
    # Spider side
}
```
Os middlewares de spider são usados para:
- pós-processamento das chamadas de retorno (callbacks) da spider - alteração/adição/remoção de requisições ou itens
- pós-processamento de `start_requests()`
- manipulação de exceções da spider
- chamar `errback` em vez de um retorno de chamada para alguma requisições com base no conteúdo da resposta

Assim como [[23112023135541-middlewares-de-download|Middlewares de Download]], é possível desabilitar qualquer middleware de sipider configurando-o com `None` no arquivo [[23112023135950-settings|settings.py]]:

```python
# settings.py

SPIDER_MIDDLEWARES = {
    'scrapy.spidermiddlewares.referer.RefererMiddleware': None,
}
```


---
## Referencias