---
aliases:
  - Selecionar um user-agent aleatório para cada requisição
tags:
  - python_scprapy
  - python
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Selecionar um user-agent aleatório para cada requisição

Semelhante a opção de [[23112023151225-adicionar-um-user-agent-a-cada-requisição|Adicionar um user-agent a cada requisição]], podemos selecionar um user agent aleatório para ser enviado.

A forma mais simples de fazer isso é definindo uma lista de agentes de usuário e, utilizar a biblioteca `random` para enviar um agente diferente em cada solicitação. Isso dificulta que o site identifique o comportamento do raspador e o bloqueie.  ^f4f21f

```python
import random

user_agent_list = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1',
    'Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1)',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 Edg/87.0.664.75',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18363',
]

def start_requests(self):
    for url in self.start_urls:
        return Request(url=url, callback=self.parse,
                       headers={"User-Agent": user_agent_list[random.randint(0, len(user_agent_list)-1)]})
```

Isso funciona, mas tem duas desvantagens:
1. Precisamos gerencia a lista de agentes de usuário.
2. Precisaríamos implementar isso em todas as spiders, o que não é o ideal.

A melhor abordagem para lidar com o envio de user-agents aleatórios é construir ou utilizando um [[23112023135541-middlewares-de-download|Middlewares de Download]] personalizado.

Existem middlewares desenvolvidos que auxiliam nessa tarefa além de vários bancos de dados que dão acesso aos agentes de usuários mais comuns, como o [banco de dados whatismybrowser.com](https://developers.whatismybrowser.com/useragents/explore/software_type_specific/web-browser/2). O tutorial que eu tenho acompanhado utiliza o [ScrapeOps Fake User-Agent](https://scrapeops.io/docs/fake-user-agent-headers-api/fake-user-agents/), uma API que retorna uma lista de agentes de usuário falsos. 

Para usar a API é preciso se registrar e obter a chave da api. 

Uma vez com esta chave, será necessário apenas enviar uma requisição ao endpoint da API e recuperar uma lista de user-agents.

```
http://headers.scrapeops.io/v1/user-agents?api_key=YOUR_API_KEY
```

Exemplo de resposta:

```
{
  "result": [
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Safari/605.1.15",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Windows; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.1.2 Safari/603.3.8",
    "Mozilla/5.0 (Windows NT 10.0; Windows; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15",
    "Mozilla/5.0 (Windows NT 10.0; Windows; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36"
  ]
}
```

Para integrar a api, criamos um Middlewar de Download e adicionamos um user-agent falso a cada solicitação.

```python
# middlewares.py

from urllib.parse import urlencode
from random import randint
import requests

class ScrapeOpsFakeUserAgentMiddleware:

    @classmethod
    def from_crawler(cls, crawler):
        return cls(crawler.settings)

    def __init__(self, settings):
        self.scrapeops_api_key = settings.get('SCRAPEOPS_API_KEY')
        self.scrapeops_endpoint = settings.get('SCRAPEOPS_FAKE_USER_AGENT_ENDPOINT', 'http://headers.scrapeops.io/v1/user-agents?') 
        self.scrapeops_fake_user_agents_active = settings.get('SCRAPEOPS_FAKE_USER_AGENT_ENABLED', False)
        self.scrapeops_num_results = settings.get('SCRAPEOPS_NUM_RESULTS')
        self.headers_list = []
        self._get_user_agents_list()
        self._scrapeops_fake_user_agents_enabled()

    def _get_user_agents_list(self):
        payload = {'api_key': self.scrapeops_api_key}
        if self.scrapeops_num_results is not None:
            payload['num_results'] = self.scrapeops_num_results
        response = requests.get(self.scrapeops_endpoint, params=urlencode(payload))
        json_response = response.json()
        self.user_agents_list = json_response.get('result', [])

    def _get_random_user_agent(self):
        random_index = randint(0, len(self.user_agents_list) - 1)
        return self.user_agents_list[random_index]

    def _scrapeops_fake_user_agents_enabled(self):
        if self.scrapeops_api_key is None or self.scrapeops_api_key == '' or self.scrapeops_fake_user_agents_active == False:
            self.scrapeops_fake_user_agents_active = False
        else:
            self.scrapeops_fake_user_agents_active = True
    
    def process_request(self, request, spider):        
        random_user_agent = self._get_random_user_agent()
        request.headers['User-Agent'] = random_user_agent

```

> [!warning] É preciso instalar a biblioteca `requests`.

Depois, basta apenas habilitar o middleware no arquivo [[23112023135950-settings|settings.py]]:

```python
# settings.py
SCRAPEOPS_API_KEY = 'YOUR_API_KEY'
SCRAPEOPS_FAKE_USER_AGENT_ENDPOINT = True

DOWNLOADER_MIDDLEWARES = {
    'bookscraper.middlewares.ScrapeOpsFakeUserAgentMiddleware': 400,
}
```

A partir de agora, o middleware irá baixar uma lista de user-agents falso e usará de forma aleatória em cada requisição. 

[A documentação demonstra várias formas de configuração](https://scrapeops.io/docs/fake-user-agent-headers-api/fake-user-agents/)
[[23112023150741-cabeçalhos-e-user-agents-falsos#^94cb81|Utilizar os agentes de usuário falso é vital, pois esse cabeçalhos é o principal para scraping, contudo, sites mais preparados exigirão mais do que isso.]]

Em muitos casos será necessário [[23112023151742-utilizando-devtools-para-obter-os-cabeçalhos-http]] completos e ordenados. Contudo, é possível gerenciar isso também com uma [[23112023152457-api-de-cabeçalhos-de-navegador-falsos|API de cabeçalhos de navegador falsos]].





---
## Referencias