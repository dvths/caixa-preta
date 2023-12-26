---
aliases:
  - Pipelines são os processos de tratamento dos dados obtidos
tags:
  - python_scprapy
  - python
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Scrapy Pipelines

Os Pipelines permitem definir procedimentos de processamento dos dados como limpeza, validação e armazenamento dos [[23112023125517-items|Items]] gerados pelas [[23112023123841-spiders|Spiders]]. 

Entre os procedimentos mais comuns estão:
- Remoção de espaços em branco ou símbolos indesejados como os símbolos monetários (`$`, `R$`, `€`, `¥` etc).
- Formatação dos dados como casting, conversão de strings em ints, por exemplo.
- Enriquecimento dos dados, como conversão de links relativos em links absolutos.
- Validação dos dados como verificação de dadas validas ou valores válidos.
- Armazenamento em bancos de dados, filas, arquivos ou storages de armazenamento de objetos.

A declaração dos pipelines são realizados no arquivo `pipelines.py`. O [[23112023134611-scrapy_exemplo_3|Exemplo 3]] demonstra um pipeline de armazenamento dos dados raspados em um banco de dados Postgres.

---
## Referencias