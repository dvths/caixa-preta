---
aliases:
  - Conectando Jupyter Notebook ao Postgres
tags:
  - jupyter_notebook
  - python
  - "#postgresql"
  - "#ferramentas"
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Conectando Jupyter Notebook ao Postgres

Semelhante  a forma como conectamos Jupyter ao Mysql (ver: [[20230603180616-conectando-mysql-ao-jupyter-notebook|Conectando mysql ao jupyter notebook]]), para se conectar a um banco de dados postgres, precisaremos seguir os seguinte passos:

1. Instalar as seguintes bibliotecas:
	1. **ipython-sql**: Criado por [catherinedevlin no Github](https://github.com/catherinedevlin/ipython-sql) , permite o uso de funções mágicas (que iniciam com `%` ou `%%`) SQL permitindo que escrevar código SQL diretamente no Jupyter Notebook.
	2. **sqlAlchemy**: Originalmente de autoria de Michael Bayer, [sqlalchemy](https://www.sqlalchemy.org/) é apresentado como um “kit de ferramentas SQL e mapeador objeto-relacional” para Python.
	3. **psycopg2**: [Psycopg](https://pypi.org/project/psycopg2/) é o adaptador de banco de dados PostgreSQL mais popular para Python. 

2. Para realizar a conexão com o banco de dados usando jupyter notebook:

```python
import os

import psycopg2
from dotenv import load_dotenv
from sqlalchemy import create_engine

load_dotenv()

%load_ext sql

driver = "postgresql"
username = os.environ.get("DB_USER")
password = os.environ.get("DB_PASS")
host = os.environ.get("DB_HOST")
database = os.environ.get("DB_NAME")

conn_string = f"{driver}://{username}:{password}@{host}/{database}"

%sql {conn_string}
# saída deve ser -> 'Connected: <username>@<db_name>'
```

>[!note] Por alguma razão, enquanto estava utilizando a versão mais recente do `sqlAlchemy`, a conexão não estava sendo realizada, obtinha o seguinte erro: 
>```
>MetaData.__init__() got an unexpected keyword argument 'bind'
>	Connection info needed in SQLAlchemy format, example
>	postgresql://username:password@hostname/dbname 
>	or an existing connection: dict_keys([])
>```
>
>O erro só foi resolvido quando instalei a versão 1.4.4
               
               




---
## Referencias