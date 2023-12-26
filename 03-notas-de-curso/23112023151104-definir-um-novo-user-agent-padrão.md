---
aliases:
  - Definir um novo user-agent padrão
tags:
  - python_scprapy
  - python
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Definir um novo user-agent padrão

É a maneira mais fácil de alterar o user-agent padrão do Scrapy. 

Definimos o novo user-agent padrão no arquivo [[23112023135950-settings|settings.py]] descomentando a constante `USER_AGENT` e passando o novo padrão:

```python
# settings.py

USER_AGENT = 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
```



---
## Referencias