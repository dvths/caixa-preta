---
aliases:
  - API de cabeçalhos de navegador falsos
tags:
  - python_scprapy
  - python
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# API de cabeçalhos de navegador falsos

A [API ScrapeOps Fake Browser Headers](https://scrapeops.io/docs/fake-user-agent-headers-api/fake-browser-headers/) é uma **API gratuita** que retorna uma lista de cabeçalhos de navegador falsos otimizados que melhora a confiabilidade dos scrapers. 

Esta API funciona como visto em [[23112023151329-selecionar-um-user-agent-aleatório-para-cada-requisição|Selecionar um user-agent aleatório para cada requisição]]. 

Mas a resposta que obtemos é a segunte:

```json
{
  "result": [
    {
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Windows; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-site": "none",
        "sec-fetch-mod": "",
        "sec-fetch-user": "?1",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "bg-BG,bg;q=0.9,en-US;q=0.8,en;q=0.7"
    },
    {
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Linux\"",
        "sec-fetch-site": "none",
        "sec-fetch-mod": "",
        "sec-fetch-user": "?1",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "fr-CH,fr;q=0.9,en-US;q=0.8,en;q=0.7"
    }
  ]
}
```

Para integrar a API, é preciso configurar o scraper para recuperar um lote de [[23112023152609-manter-os-cabeçalhos-atualizados|cabeçalhos mais atualizados]] quando o scraper for iniciado.

A integração também é feita por meios dos [[23112023135541-middlewares-de-download|Middlewares de Download]]:

```python
# middlewares.py
from urllib.parse import urlencode
from random import randint
import requests

class ScrapeOpsFakeBrowserHeaderAgentMiddleware:

    @classmethod
    def from_crawler(cls, crawler):
        return cls(crawler.settings)

    def __init__(self, settings):
        self.scrapeops_api_key = settings.get('SCRAPEOPS_API_KEY')
        self.scrapeops_endpoint = settings.get('SCRAPEOPS_FAKE_BROWSER_HEADER_ENDPOINT', 'http://headers.scrapeops.io/v1/browser-headers?') 
        self.scrapeops_fake_browser_headers_active = settings.get('SCRAPEOPS_FAKE_BROWSER_HEADER_ENABLED', False)
        self.scrapeops_num_results = settings.get('SCRAPEOPS_NUM_RESULTS')
        self.headers_list = []
        self._get_headers_list()
        self._scrapeops_fake_browser_headers_enabled()

    def _get_headers_list(self):
        payload = {'api_key': self.scrapeops_api_key}
        if self.scrapeops_num_results is not None:
            payload['num_results'] = self.scrapeops_num_results
        response = requests.get(self.scrapeops_endpoint, params=urlencode(payload))
        json_response = response.json()
        self.headers_list = json_response.get('result', [])

    def _get_random_browser_header(self):
        random_index = randint(0, len(self.headers_list) - 1)
        return self.headers_list[random_index]

    def _scrapeops_fake_browser_headers_enabled(self):
        if self.scrapeops_api_key is None or self.scrapeops_api_key == '' or self.scrapeops_fake_browser_headers_active == False:
            self.scrapeops_fake_browser_headers_active = False
        else:
            self.scrapeops_fake_browser_headers_active = True
    
    def process_request(self, request, spider):        
        random_browser_header = self._get_random_browser_header()
        request.headers = random_browser_header

```

Então, basta habilitar o middleware no arquivo [[23112023135950-settings|settings.py]]:

```python
SCRAPEOPS_API_KEY = 'YOUR_API_KEY'
SCRAPEOPS_FAKE_BROWSER_HEADER_ENABLED = True

DOWNLOADER_MIDDLEWARES = {
    'bookscraper.middlewares.ScrapeOpsFakeBrowserHeaderAgentMiddleware': 400,
}
```

Quando ativado, o middleware baixará uma lista de cabeçalhos de navegador e usará de forma aleatória.



---
## Referencias