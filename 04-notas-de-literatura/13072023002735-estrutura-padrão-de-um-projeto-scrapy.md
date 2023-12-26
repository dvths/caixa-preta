---
aliases:
  - Estrutura padrão de um projeto Scrapy
tags:
  - python_scprapy
  - python
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

---
# Estrutura padrão de um projeto Scrapy

Ao criar um novo projeto com o comando:

```bash
$ scrapy startproject exemplo_spyders
```


Embora possa ser modificada, a estrutura de um projeto Scrapy segue uma forma semelhante a esta: 

```bash
$ tree exemplo_spyders
.
├── exemplo_spiders     # módulo Python do projeto, você importará seu código daqui
│   ├── __init__.py      
│   ├── items.py        # arquivos de definição dos itens do projeto
│   ├── middlewares.py  # middlewares do projeto
│   ├── pipelines.py    # pipilines do projeto
│   ├── settings.py     # arquivo de configurações do projeto
│   └── spiders         # diretório onde serão criadas as spiders
│       └── __init__.py 
└── scrapy.cfg          # arquivo de configuração de implantação
```





----
## Referências 

- [Visão Geral da Arquitetura](https://docs.scrapy.org/en/latest/topics/architecture.html#architecture-overview)