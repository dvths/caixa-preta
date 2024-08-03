---
alias: Como importar arquivos csv para um conteiner docker mysql
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#mysql #docker #ferramentas

____
Para importar o arquivo CSV para um banco de dados MYSQL rodando um container Docker:

Copie o arquivo csv para o diretório apropriado que está no container:

```bash
$ docker cp <caminho-do-arquivo-local> <nome-do-container>:/var/lib/mysql-files
```

Normalmente, o caminho para arquivos para o banco de dados em um container mysql é `/var/lib/mysql-files`.

Uma vez copiado o arquivo, execute o comando de importação:

```sql
LOAD DATA INFILE '/var/lib/mysql-files/arquivo.csv'
INTO TABLE nome_da_tabela
FIELDS TERMINATED BY ","
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
```

1. `LOAD DATA INFILE '/var/lib/mysql-files/arquivo.csv'` define o local onde o arquivo que está o arquivo que será carregado.
2. `INTO TABLE nome_da_tabela` define em que tabela os dados serão importados (É preciso criar a tabela caso ela não exita) 
3. `FIELDS TERMINATED BY ","` discrimina qual separador deverá ser substituído (No CSV brasileiro, geralmente é ";")
4. `LINES TERMINATED BY '\n'` demarca a quebra de linha
5. `IGNORE 1 ROWS;` define quantas linhas serão ignoradas. É comum que a primeira linha de um arquivo csv seja os nomes das colunas, ignoramos essa linha para que os nomes não sejam importados como dados e causem erros. 

## Pontos de atenção

1. Para bancos de dados rodando em container, não é preciso alterar o valor de parâmetro da variável "secure_file_priv". Essa variável define o local de segurança para importação e exportação de arquivos do Mysql. Caso ocorra erros na importação, pode ser necessário alterar o valor dessa variável para o caminho onde serão importados ou exportados arquivos do banco de dados. Para saber onde está o arquivos de configuração que contém essa variável, execute:

	```sql
	SHOW VARIABLES LIKE "secure_file_priv"
	```

2. Verifique se os campos da tabela criada para receber os dados da importação corresponde com os campos discriminados no arquivo CSV.
3. Caso os dados de importação possuírem IDs, será necessário verificar se a tabela criada para receber os dados não possui um campo ID como AUTO_IMCREMENT
4. O mesmo serve para outros campos com valores padrão.

---
## Referencias