---
aliases:
  - Streeming de Dados
nome-do-curso: ETL e pipelines de dados com Shell, Airflow e Kafka
link: https://www.coursera.org/learn/etl-and-data-pipelines-shell-airflow-kafka/home/week/1
tipo-curso:
  - online
local:
  - Coursera
topico:
  - Técnicas de ETL
tags:
  - data_processing
  - ETL
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%


---
# Conceito de Processamento de dados de streeming

No contexto de processamento de dados, o termo "streaming" refere-se à abordagem de processar e transmitir dados de forma contínua e em tempo real, à medida que são gerados ou recebidos, em vez de processar dados em lote. Isso é particularmente relevante em situações em que lidamos com grandes volumes de dados que estão em constante fluxo, como dados de sensores, feeds de mídia social, transmissões ao vivo e eventos de telemetria.

A principal característica do processamento de streaming é lidar com dados à medida que eles são produzidos, permitindo a análise em tempo real e a tomada de decisões instantâneas com base nessas informações. 

## Conceitos chave associados ao processamento de streaming:

1. **Eventos contínuos:** Os dados são processados conforme são recebidos, em vez de serem armazenados para processamento em lote posterior. Isso é crucial para situações em que a latência é crítica.
    
2. **Fluxo de dados:** Os dados são tratados como um fluxo contínuo, onde novos eventos são adicionados continuamente. Isso contrasta com o processamento em lote, onde um conjunto fixo de dados é processado em uma única iteração.
    
3. **Processamento em tempo real:** O processamento de streaming permite análises em tempo real, possibilitando a detecção rápida de padrões, identificação de anomalias e geração de insights instantâneos.
    
4. **Arquiteturas de streaming:** Existem várias arquiteturas e ferramentas projetadas para facilitar o processamento de streaming, como Apache Kafka, Apache Flink, Apache Storm, e outros. Essas ferramentas ajudam a gerenciar e processar fluxos de dados de maneira eficiente e escalável.
    
5. **Janelas de tempo:** Para lidar com a natureza contínua dos dados de streaming, muitas vezes são utilizadas janelas de tempo, que representam intervalos de tempo durante os quais os dados são analisados.
    

O processamento de streaming é valioso em uma variedade de casos de uso, incluindo análise de dados em tempo real, monitoramento de sistemas, detecção de fraudes, processamento de eventos, entre outros. Ele oferece uma abordagem ágil e responsiva para lidar com o constante influxo de dados em muitos cenários modernos.


----
## Referências 