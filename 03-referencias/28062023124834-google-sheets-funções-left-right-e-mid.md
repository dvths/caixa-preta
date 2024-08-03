---
aliases:
  - Google Sheets funções LEFT
  - RIGHT e MID
nome-do-curso: Google Data Analytics Certification
tags:
  - GDCA
  - data_wranglin
  - google_sheets
topico:
  - Garantir a integridade dos dados
link: https://www.coursera.org/programs/trybe-google-learning-program-hrevt/professional-certificates/google-data-analytics?collectionId=twDTY
local:
  - Coursera
tipo-curso:
  - online
instrutor:
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

---
# Google Sheets funções LEFT, RIGHT e MID

- `LEFT` : retorna uma substring do início de uma string especificada:
	- Sintaxe:
	```
	 =LEFT(string;[numero_caracteres])
	```
	 - `string`: é a string da qual a parte esquerda será retornada.
	 - `[numero_caracteres]`: (opcional) é a quantidade de caracteres que serão retornados.

- `RIGHT` : retorna uma substring do fim de uma string especificada:
	- Sintaxe:
	```
	 =RIGHT(string;[numero_caracteres])
	```
	 - `string`: é a string da qual a parte direita será retornada.
	 - `[numero_caracteres]`: (opcional) é a quantidade de caracteres que serão retornados.

- `MID` : retorna um seguimento de um string:
	- Sintaxe:
	```
	 =MID(string;inicio;tamanho_da_extração)
	```
	 - `string`: é a string da qual o seguimento será retornado.
	 - `começa_com`: índice da esquerda da string a partir do qual iniciar a extração.
	 - `tamanho_da_extração`: tamanho do seguimento a extrair.

----
## Referências

- [[28062023122423-google-sheets-otimização-do-processo-de-limpeza-de-dados|Google Sheets-otimização do processo de limpeza de dados]]
- [Documentação](https://support.google.com/docs/topic/3105625?hl=en&ref_topic=3046366&sjid=11943168060303920875-SA)