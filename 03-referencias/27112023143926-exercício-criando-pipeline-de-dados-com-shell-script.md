---
aliases:
  - Exercício de criação de pipeline ETL com shell script
nome-do-curso: ETL e pipelines de dados com Shell, Airflow e Kafka
link: https://www.coursera.org/learn/etl-and-data-pipelines-shell-airflow-kafka/home/week/1
tipo-curso:
  - online
local:
  - Coursera
topico:
  - ETL usando Shell Scripts
tags:
  - data_processing
  - ETL
  - shell_script
  - revisão
sr-due: 2023-12-09
sr-interval: 3
sr-ease: 250
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%


---
# Exercício Criando pipeline de dados com shell script

## ETL usando Shell Scripts

Problema:

Copie os dados no arquivo 'web-server-access-log.txt.gz' para a tabela 'access_log' no banco de dados PostgreSQL 'template1'.

O arquivo está disponível no seguinte local: [https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBM-DB0250EN-SkillsNetwork/labs/Bash%20Scripting/ETL%20using%20shell%20scripting/web-server-access-log.txt.gz](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBM-DB0250EN-SkillsNetwork/labs/Bash%20Scripting/ETL%20using%20shell%20scripting/web-server-access-log.txt.gz)

As seguintes são as colunas e seus tipos de dados no arquivo:

a. timestamp - TIMESTAMP

b. latitude - float

c. longitude - float

d. visitorid - char(37)

e mais duas colunas: accessed_from_mobile (boolean) e browser_code (int)

As colunas que precisamos copiar para a tabela são as quatro primeiras colunas: timestamp, latitude, longitude e visitorid.

OBSERVAÇÃO: O arquivo possui um cabeçalho. Portanto, use a opção 'HEADER' no comando 'COPY'.

_**Task 1: Iniciar o servidor Postgres.**_  

> Passos para criar e inicializar um contêiner Postgres com o banco de dados `template1`.

_**Task 2: Criar a tabela que irá receber os dados.**_  

- Step 1: Conecte-se com o servidor Postgres: 

```bash
psql --username=postgres --host=localhost
```

- Step 2: No prompt do Postgres (`postgres=#`), conecte-se com o banco de dados `template1`:

```
postgres=# \c template1
```


- Step 3: Uma vez conectado ao banco de dados, crie a tabela `access_log`:

```bash
CREATE TABLE access_log(timestamp TIMESTAMP, latitude float, longitude float, visitor_id char(37));`
```

- Step 4: Após receber a mensagem de confirmação (`CREATE TABLE`), saia do `psql` com `\q`.

_**Task 3. Crie um script shell chamado `cp-access-log.sh` escreva os comando para completar o restante das tasks para extrair e copiar os dados no banco de dados.**_

```bash
# cp-access-log.sh

# Este script faz o download do arquivo 'web-server-access-log.txt.gz' 
# de [ver se é possível colocar o link do drive para dowload ]. 

# Em seguida, o script extrai o arquivo .txt usando o gunzip.

# O arquivo .txt contém o carimbo de data/hora, latitude, longitude 
# e ID do visitante, além de outros dados.

# Transforma o delimitador de texto de "#" para "," e salva em um arquivo CSV.

# Carrega os dados do arquivo CSV na tabela 'access_log' no banco de dados PostgreSQL.`
```

_**Task 4. Download arquivo access_log.**_  

```bash 
# Baixa o arquivo access_log
wget "[URL do Arquivo]"
```

_**Task 5. Unzip o arquivo gzip**_  

Use o utilitário `gunzip` com a opção `-f`.

```bash
# Unzip e extraia o arquivo .txt 
gunzip -f web-server-access-log.txt.gz
```

A opção `-f` do `gunzip` irá sobrescrever arquivo caso ele já exista.

_**Task 6. Extraia os campos requerido do arquivo.**_  

Extraia `timestamp`, `latitude`, `longitude` and `visitorid` que são os primeiro quatro campos do arquivo usando o comando `cut`.

A colunas do arquivo `web-server-access-log.txt` são delimitadas por `#`.

Step 1: Referencie o caractere na opção _delimiter_ (`-d`) do comando `cut`.

```bash
# Etapa de extração
echo "Extracting data"

# Extrai as colunas 1 (timestamp), 2 (latitude), 3 (longitude) and 4 (visitorid)
cut -d"#" -f1-4 web-server-access-log.txt
```

Step 2: Salve o arquivo e execute o script para verificar a saída.

```bash 
bash cp-access-log.sh
 ```

_**Task 7. Redirecione a saída para outro arquivo**_  

Step 1: No script, edite o comando `cut` de maneira que passe a redirecionar saída, isto é, os dados extraídos, para um arquivo chamado `extracted-data.txt`:

```bash 
cut -d"#" -f1-4 web-server-access-log.txt > extracted-data.txt
```

Step 2: Salve o arquivo e execute.

Step 3: Para verificar o conteúdo direcionado para `extracted-data.txt`, use o comando `cat`.

```bash
cat extracted-data.txt
```

_**Task 8. Transforme o dados para o formato de arquivo CSV.**_  

As colunas extraídas são, originalmente, delimitadas pelo caractere `#`. Precisamos substituir esse delimitador para `,`. Para essa tarefa vamos usar o comando `tr`:

Step 1: Adicione as linhas abaixo no final do script:

```bash # Transform phase
echo "Transforming data"

# Lê os dados extraídos e substitui # por ,
tr "#" "," < extracted-data.txt
```

Step 2: Salve o arquivo.

Step 3: Execute o script.

Step 4: Verifique se a saída contém as ',' no lugar dos '#', como esperado.

Agora precismos salvar os dados transformados em um arquivo .csv: 

Step 5: Edite o comando `tr` da seguinte maneira: 

```bash
tr "#" "," < extracted-data.txt > transformed-data.csv
```

O script lê o arquivo de entrada `extracted-data.txt` e redireciona a operação do comando `tr` para um arquivo chamado `transformed-data.csv`.

Step 6: Salve the file e execute o script.

Step 8: Execute `cat` novamente para verificar se temos os dados corretos. 

```bash
cat transformed-data.csv
```

_**Task 9. Carrege os dados para dentro da tabela `access_log` do PostgreSQL**_  

O comando do PostgreSQL para copiar os dados para uma tabela é simples: `COPY`.

A estrutura básica do comando é a seguinte: 

```
COPY table_name FROM 'filename' DELIMITERS 'delimiter_character' FORMAT;
```

O arquivo possui um cabeçalho, portanto, precisamos usar a opção `HEADER` do comando `COPY`:

Chame este comando a partir do script shell, enviando-o como entrada para o comando de filtro 'psql'.

Para carregar dados de um script shell, envie os comandos do banco de dados por meio de um pipeline de comandos para o comando psql, com a ajuda do comando echo.

Ex: `echo ‘_psql commands_‘ | psql`

Step 1: Adicione o comando `COPY`

```bash 
# Etapa de carregamento
echo "Loading data"

# Envia as instruções para conexão com o banco de dados 'template1' e
# copia o arquivo para a tabela 'access_log' atravéz da pipeline.
echo "\c template1;\COPY access_log  FROM '/home/project/transformed-data.csv' DELIMITERS ',' CSV HEADER;" | psql --username=postgres --host=localhost

```

Step 2: Salve o arquivo.

_**Task 10. Execute o script final**_  

```bash
bash cp-access-log.sh
```

_**Task 11. Verifique se tudo correu bem executando um consulta.**_

No terminal, execute a declaração ‘select’ do ‘psql’ com a ajuda de uma pipeline de comandos:

```
echo '\c template1; \\SELECT * from access_log;' | psql --username=postgres --host=localhost
```

Se tudo correu bem, você deve ver os registros.

|Date (YYYY-MM-DD)|Version|Changed By|Change Description|
|---|---|---|---|
|2022-07-27|0.3|Lakshmi Holla|Updated Linux command|
|2021-09-06|0.2|Ramesh Sannareddy|Incorporated the beta feedback.|
|2021-06-07|0.1|Ramesh Sannareddy|Created initial version of the lab|

----
## Referências 