---
nome-do-curso: Google Data Analytics Certification
topico:
  - Garantir a integridade dos dados
aliases:
  - Google Sheets-ferramentas e técnicas de limpeza de dados
instrutor: 
tags:
  - GDCA
  - data_wranglin
  - google_sheets
tipo-curso:
  - online
link: https://www.coursera.org/programs/trybe-google-learning-program-hrevt/professional-certificates/google-data-analytics?collectionId=twDTY
local:
  - Coursera
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

____
# Google Sheets-ferramentas e técnicas de limpeza de dados

- Para tarefas corriqueiras de limpeza de dados o Google Sheets concentra as funcionalidades no menu "Dados"
	![[tecnicas-limpeza-google-sheets.png]]

- Na opção "Limpeza de dados" são disponibilizadas algumas funcionalidades básicas para limpeza de dados:  
	- Remoção de dados duplicados: "Remover cópias".
	- Remoção de espaços extras e espaços em branco: "Cortar espaços em branco"
- Para além da opção padrão, existe uma extensão para remover duplicatas que fornece funcionalidades mais avançadas:
	![[remover_duplicados_avancado.png]]
 
- Uma outra opção disponível é "Dividir texto em colunas", essa opção nos permite separar células multivaloradas em colunas separadas.  
- Outras preocupações durante a limpeza dos dados envolvem: 
	- Correção de erros ortográficos
	- Letras maiúsculas inconsistentes
	- Pontuação incorreta ou erros de digitação
 - Para essas situações, podemos utilizar "Verificação Ortográfica":
	![[verificacao_ortografica.png]]
 
	- Em alguns casos, a "Formatação condicional" pode ser muito útil para identificar inconsistências nos dados da planilha:
	![[formatacao_condicional.png]]
 
 - Por fim, manter os dados na formatação correta é outra forma de manter a integridade e a consistência dos dados da planilha. As opções de formatação estão disponíveis no menu "Formatar":
	![[formatacao_de_celulas.png]]

Para mais algumas funções básicas para automatizar o processo de limpeza de dados abordados na aula:

[[28062023122423-google-sheets-otimização-do-processo-de-limpeza-de-dados|Google Sheets-Otimização do processo de limpeza de dados]]

---

## Links uteis

- [Documentação](https://support.google.com/docs/answer/6325535?hl=pt-BR&co=GENIE.Platform%3DDesktop)



