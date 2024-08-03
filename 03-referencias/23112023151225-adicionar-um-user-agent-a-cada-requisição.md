---
aliases:
  - Adicionar um user-agent a cada requisição
tags:
  - python_scprapy
  - python
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Adicionar um user-agent a cada requisição

A segunda opção para fornecer um user-agent falso para as requisições é definir o user-agent nos cabeçalhos (`headers`) da requisição da spider: 

```python
...
def start_requests(self):
    for url in self.start_urls:
        return Request(url=url, callback=self.parse,
                       headers={"User-Agent": "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"})

...
```

Geralmente os `headers` podem ser definidos como atributo da classe:

```python

class Exemple(scrapy.Spider):
	name = 'example'
	start_urls = [
		'example1.com',
		'example2.com',
		'example3.com',]

	headers = {"User-Agent": "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"}

	def start_requests(self):
		for url in self.start_urls:
			return scrapy.Requests(url=url, headers=headers)
```

Semelhante a opção acima, também podemos [[23112023151329-selecionar-um-user-agent-aleatório-para-cada-requisição|Selecionar um user-agent aleatório para cada requisição]].



---
## Referencias