---
aliases:
  - Proxy inteligente
tags:
  - python_scprapy
  - python
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Proxy inteligente

[[23112023154036-o-que-é-um-proxy-|Um proxy é um intermediário que, entre outras coisas, nos permite proteger a identidade da requisição que está sendo feita.]]

Um serviço de Proxy Inteligente é aquele que utiliza tecnologia avançada para gerenciar requisições web por meio de proxies projetados para melhorar a eficiência, segurança e flexibilidade do uso desses proxies de forma conveniente para o usuário, ou seja, sem que o usuário tenha que realizar muitas configurações. 

No contexto da raspagem de dados, utilizar servidores proxies, geralmente, é uma preocupação de grandes projetos de raspagem. Raspar dados em escala tornam o uso desses servidores praticamente obrigatório pois: 

- Como nossa requisição é encaminhada pelo servidor proxy, ao servidor de destino, utilizar proxies rotativos (semelhante a forma como se utiliza [[23112023150741-cabeçalhos-e-user-agents-falsos|cabeçalhos e user-agents falsos]]) pode ser uma boa estratégia para proteger nossa identidade. Isso porque mesmo como cabeçalhos e user-agents falsos e enviados aleatoriamente a cada requisição, o IP da origem é estático, sendo facilmente identificado.
- Além do mais, os servidores proxy permitem obter dados específicos do país do site que estamos raspando.
- Podem possuir mecanismos para ignorar contra-medidas anti-bot.

Alguns dos servidores proxy inteligentes são:
- [ScraperAPI](https://www.scraperapi.com/?fp_ref=scrapeops)
- [Scrapingbee](https://www.scrapingbee.com?fpr=scrapeops)
- [ScrapingAnt](https://scrapingant.com/?ref=iankerins3)

Para conhecer mais servidores desse tipo: https://www.zenrows.com/blog/web-scraping-proxy


---
## Referencias