---
alias: Google Sheets VLOOKUP
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#google_sheets 

---
# Google Sheets VLOOKUP

A função `VLOOKUP` (também conhecida como `PROCV`) é utilizada para relacionar os registros de diferentes tabelas. Ela tem uma utilidade semelhante a função `JOIN` do SQL ([[16062023105729-agregação-de-dados-utilizando-join-em-sql|Agregação de dados utilizando JOIN em SQL]]).

A sintaxe básica de uma função `VLOOKUP`  é a seguinte:

```
=VLOOKUP(chave_pesquisa;intervalo;indice;classificação)
```
![[vlookup_google_sheets.png]]

Os parâmetros são:

- `chave_pesquisa`: é o valor que será usado como base de comparação na primeira coluna do intervalo.
- `intervalo`: é o intervalo de células onde a função procurará a chave de pesquisa especificada. 
- `indice`: referencia o índice da coluna (também chamado de "número da coluna") onde está o valor a ser retornado pela função.
	- O menor índice possível é 1.
	- O maior índice é o número máximo de colunas do intervalo.
- `classificação`: é um valor booleano onde:
	- TRUE (padrão) retorna o valor aproximado correspondente.
	- FALSE retorna exatamente o valor buscado
	- Este é um parâmetro opcional, mas seu uso altamente recomendado por uma questão de garantia de consistência dos dados retornados.
 
	

----
## Referências  
- [[27062023232857-google-sheets-diferentes-perspectivas-dos-dados-com-vlookup-e-tabelas-dinamicas|Google Sheets-Diferentes perspectivas dos dados com Vlookup e Tabelas Dinâmicas]] 
- [[]]