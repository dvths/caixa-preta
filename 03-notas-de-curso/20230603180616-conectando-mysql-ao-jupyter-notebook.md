---
alias: Conectando mysql ao jupyter notebook
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#python_ferramentas #python #jupyter_notebook #mysql 

____
1. Criar o ambiente virtual:
```shell
$ conda create -n sql-env
```

2. Pacotes:
	- sqlalchemy
	- python-dotenv
	- ipython-sql
	- pymysql
	- jupyter
		- Pode ser necessário as dependências:
			- colorama
			- yaml
			- jupyter_server_ydoc

4. O ipython-sql utiliza o mesmo modelo de connection string do SQLAlchemy. Para obter o mesmo modelo:
```python
import os
from dotenv import load_dotenv
load_dotenv()

# carregar o modulo mágico sql do ipython-sql
%load_ext sql

# Ler as variáveis de ambiente definidas no arquivo .env
driver = os.environ.get('DB_DRIVER') # mysql+pymysql 
user = os.environ.get('DB_USERNAME') 
password = os.environ.get('DB_PASSWORD')
host = os.environ.get('DB_HOST')
port = int(os.environ.get('DB_PORT'))
database = os.environ.get('DB_NAME')

connection_url = f'{drive}://{user}:{password}@{host}:{port}/{database}'

# Passar a url para conexão 
%sql {connection_url}
```

Lembrando que os comandos mágicos (magic commands), com a sintaxe iniciada com `%`, são comandos especiais que apenas funcionam no ambiente do jupyter e ipython.

Ver também: [[02112023190043-conectando-jupyter-notebook-ao-postgres|Conectando Jupyter Notebook ao Postgres]] 

---
## Referencias

- [SQLALchemy](https://docs.sqlalchemy.org/en/20/core/engines.html#supported-databases)
- [Jupyter with Magics](https://towardsdatascience.com/jupyter-magics-with-sql-921370099589)
- [Ipython-SQL](https://jupyter-tutorial.readthedocs.io/en/stable/data-processing/postgresql/ipython-sql.html)
