---
aliases:
  - Definição do conceito de Pipelines de dados
tags:
  - ETL
  - pipeline_de_dados
  - revisão
  - data_processing
sr-due: 2023-12-07
sr-interval: 1
sr-ease: 230
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Definição do conceito de Pipelines de dados

Um pipeline de dados é uma forma de mover os dados de um local (a origem) para um destino (um Data Warehouse, ou Data Lake, por exemplo).

Ao longo desse caminho, os dados podem ser limpos, transformados, otimizados e enriquecidos em um processo de várias etapas até chegarem a um estado em que podem ser usados para desenvolver insights de negócios.  

Em um pipeline, cada saída de um processo é também a entrada do próximo e, em alguns casos, as etapas são independentes, ou seja, ocorrem em paralelo.  

>[!warning] Exite uma diferença conceitual entre "Pipeline de Dados" e "ETL". Embora sejam muito semelhantes, Pipeline de Dados é um conjunto amplo de processamento de dados que incorporou o conceito de ETL. Este, atualmente pode ser considerado uma parte do Pipeline de Dados.
>Atualmente, com o aumento da necessidade de processos mais robustos de engenharia de dados, as etapas de processamento Pipelines de Dados modernos incluem:
> - Processamento de dados contínuo e extensível;
> - Elasticidade e agilidade da Nuvem
> - Recursos isolados e independentes para processamento dos dados
> - Acesso democratizado a dados e gerenciamento de autoatendimento
> - Alta disponibilidade e recuperação de desastres
> 
> Estas necessidades, tornaram o processamento de dados muito mais complexo do que as abordagens estabelecidas no conceito de ETL. 

Um Pipeline de Dados terá, pelo menos, 3 componentes:

- Origem
- Processamento
- Destino

Algumas das principais ferramentas para pipelines de dados podem ser divididas em três grupos:

- Transformação de Dados:
	- Algumas opções de ferramentas:
		- Apache Beam
		- Airbyte
		- Stitch
		- Keboola
		- Dremio
		- Fivetram
		- Dataform
		- Apache Airflow
		- Apache Kafka (stream)
		- Apache Spark
		- Dbt
		- AWS Glue
		- Amazon Athena
- Armazenamento de Dados e Cloud Computing
	- Algumas opções de ferramentas:
		- Databriks (Apache Spark na Nuvem)
		- Delta Lake (open source)
		- Apache Hadoop
		- Apache Hive
		- Snowflake
		- Google BigQuery (Google Cloud)
		- Amazon S3 (data store)
		- Amazon Redshift
		- Segment
		- Azure Data Factory 
 - Ferramentas de Stream e Analytics
	- Algumas opções de ferramentas:
		 - Tableou
		 - Amazon Kinesis (dados IoT)
		 - Metabase (possui uma versão open source)
		 - Looker Studio (Google Studio)
		 - Apache Flink (analise de logs)
		 - Apache Druid (banco de dados em tempo real)
		 - Apache Superset
		 - Azure Synapse Analytics
		 - Redash
		 - MicroStrategy
		 - Dataedo (gestão de metadados)
		 - Microssoft Power Bi
		 - Presto (motor SQL)

De maneira geral, grande parte dessas ferramentas precisam ser configuradas. A infraestrutura é vital para utilização das ferramentas. Muitas empresas possuem suas estruturas em nuvem na AWS ou na OCI.  

Uma ferramenta para configuração de infra:
- Infra estrutura como código (IaC)
	- Terraform (open source)







---
## Referencias

Curso Fundamentos da Engenharia de Dados - Data Science Academy.