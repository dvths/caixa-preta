---
nome-do-curso: Google Data Analytics Certification
topico:
  - Verificar e relatar os resultados da limpeza
aliases:
  - Google Sheets funções avançadas para limpeza de dados
instrutor: 
tags:
  - GDCA
  - data_wranglin
  - google_sheets
link: https://www.coursera.org/programs/trybe-google-learning-program-hrevt/professional-certificates/google-data-analytics?collectionId=twDTY
local:
  - Coursera
tipo-curso:
  - online
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%
____
# Google Sheets-funções avançadas para limpeza de dados

Na aula sobre documentação dos resultados e processo de limpeza, foi apresentado um conjunto de funções avançadas úteis para o processo de limpeza dos dados em planilhas. São elas:

| Função      | Sintaxe(Planilhas Google)                 |  Principal uso                                                                           |     |
| ----------- | ------------------------------------------------- | ------------------------------------------------ |
| IMPORTRANGE | =IMPORTRANGE(spreadsheet_url, range_string)       | Importa (cola) dados de uma planilha para outra e os mantém atualizados automaticamente |
| QUERY       | Sintaxe: =QUERY(Planilha e Intervalo, "Select ") |  Permite que instruções falsas do SQL (do tipo SQL) ou um assistente importem os dados.  |
| FILTER      | =FILTER(intervalo, condição1 [condição2, ...])    |  Exibe somente os dados que atendem às condições especificadas.                          |     | 


