---
aliases:
  - Exportando os dados em diferentes arquivos
tags:
  - python_scprapy
  - python
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Scrapy Feed Exporters

Feed Exporters é a forma que utilizamos para exportar dados em diferentes formatos no Scrapy.

A funcionalidade permite exportar dados nos formatos:
- JSON
- CSV
- XML
- [Python Pickle](https://docs.python.org/3/library/pickle.html) (um protocolo de serialização usado para converter objetos Python em uma representação binária que pode ser armazenada em um arquivo, transmitida pela rede e desserializada para recriar os objetos originais.)

Os arquivos podem ser salvos nos seguintes locais:

- A máquina em que o Scrapy está rodando (obviamente) 
- Uma máquina remota usando FTP (protocolo de transferência de arquivos)
- Armazenamento do Amazon S3
- Google Cloud Storage
- Saída Padrão

## Salvando dados em CSVs

Existem duas abordagens para salvar dados em formato CSV com Scrapy:

- Através de argumentos em linha de comando;
- Via `FeedExporters` no arquio [[23112023135950-settings|settings.py]]

### Linha de comando:

Usando o comando `scrapy crawl <spider_name>` passamos as seguintes opções seguidas do path onde o arquivo deverá ser salvo:

|Opção|Descrição|
|---|---|
|`-o`|Acrescenta novos dados a um arquivo existente.|
|`-O`|Substitui qualquer arquivo existente com o mesmo nome pelos dados atuais.|

O path pode ser relativo ou absoluto, portanto, o comando será como nos exemplos abaixo:

```bash
# Salva o arquivo spider_name.csv no caminho relativo ao projeto scrapy
$ scrapy crawl -o spider_name.csv

# Salva o arquivo spider_name.csv usando um caminho absoluto
$ scrapy crawl -o file:///path/to/my/project/spider_name.csv 
```

### Via Feeds

A opção mais simples, digamos assim, é já definir onde e em que formato salvar os dados utilizando a configuração `FEEDS` no arquivo `settings.py` :

```python

FEEDS = {
		 'data.csv': {'format': 'csv'}
}

```

Uma facilidade é poder realizar esta configuração diretamente na spider. Isso pode ser útil quando o projeto possui várias spiders coletando dados diferentes que serão salvos em formatos diferentes a depender da necessidade do projeto.

Essa configuração individual é feita através do atributo `custom_settings`:


A funcionalidade **Feeds**, por padrão, sobrescreve os dados a depender de onde eles estão armazenados. Contudo, é possível configurá-la para não sobrescrever os dados passando a chave `overwrite` com os valores `True` ou `False`. Para não sobrescrever os dados, a configuração seria a seguinte:


```python
# spider_file.py

import scrapy

class ExampleSpider(scrapy.Spider):
	name = 'exemple'
	start_urls = ['http://exemple.com']

	custom_settings = {
		'FEEDS': { 
			'data.csv', {'format': 'csv'}, 
			'overwrite': False,
		}	
	}

...

```

O conjunto completo de padrões pode ser encontrado na documentação na seção [FEEDS](https://docs.scrapy.org/en/stable/topics/feed-exports.html#feeds)

## Salvando dados em JSON

Da mesma maneira que é feito o salvamento com csv, também fazemos com o formato json. 

Contudo, ao salvar com o formato json, temos duas opções:

- JSON
- JSON Lines

Salvar os dados em formato json é útil para pequenas quantidades de dados, mas ele não é bem dimensionado para grandes quantidades de dados, pois a análise incremental (mode de fluxo) não é bem suportada e pode resultar no armazenamento de todo o volume de dado na memória, favorecendo, potencialmente, vazamentos de memória.

Os dados em JSON são mantidos na memória em uma matriz e novos dados são anexados a ela.

```json
[
    {"name": "Color TV", "price": "1200"},
    {"name": "DVD player", "price": "200"}
]
```

Sendo assim, é mais aconselhado salvar os dados no formato jsonl (JSON Lines).

```json
{"name": "Color TV", "price": "1200"},
{"name": "DVD player", "price": "200"}
```

O uso de JSON Lines permite que novos dados sejama adicionados de forma incremental a um arquivo e podem ser divididos em vários pedaços.

### Via Feeds

A configuração do `FEEDS` segue o mesmo padrão, mudando apenas o formato:

```python
# settings.py 

FEEDS = {
    'data.json': {'format': 'json'}
}
```

```python
# settings.py 

FEEDS = {
    'data.jsonl': {'format': 'jsonlines'}
}
```

E também pode ser configurado na spider:

```python
# spider_file.py

import scrapy

class ExampleSpider(scrapy.Spider):
	name = 'exemple'
	start_urls = ['http://exemple.com']

	custom_settings = {
		'FEEDS': { 
			'data.jsonl', {'format': 'jsonlines'}, 
			'overwrite' True,
		}	
	}

...

```

## Salvando dados em bancos de dados

Para uma escala maior de dados, sempre é uma boa opção utilizar um banco de dados.

Ao configurar o banco de dados MySQL ou Postgress, seja na máquina local, ou hospedada na nuvem como DigitalOcean (como no caso do Querido Diário), deverá configurar a [[23112023134232-scrapy-pipelines|Pipelines]] que irá se conectar com o banco de dados. 

O [[23112023134611-scrapy_exemplo_3|scrapy_exemplo_3]] demonstra como configurar uma pipeline para salvar os dados em banco de dados Postgress.

Note que o método `process_item` será ativado toda vez que um [[23112023125517-items|item]] for raspado pela [[23112023123841-spiders|spider]], então precisamo configurar o `process_item` para inserir os dados dos itens no banco de dados.

Além disso, é preciso fechar a conexão quando a spider terminar o serviço. Isso é feito implementando o método `close_spider`, que será chamado quando a spider for desligada.

Por fim, precisamos ativar a pipeline de itens:

```python
# settings.py

ITEM_PIPELINES = {
   'bookscraper.pipelines.PostgressDemoPipeline': 300,
}

```

>[!note] O número atribuído a pipeline representa a ordem de precedência entre as eventuais pipelines definidas pelo usuário. A sequencia de execução das pipelines é definida, portanto, em ordem crescente.






---
## Referencias

- [Usando Pickle - Pense em Python 14.7](https://pense-python.caravela.club/14-arquivos/07-usando-o-pickle.html)
