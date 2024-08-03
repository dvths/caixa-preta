---
nome-do-curso: Google Data Analytics Certification
topico:
  - Garantir a integridade dos dados
aliases:
  - Google Sheets funções COUNTIF e COUNTIFS
tags:
  - GDCA
  - data_wranglin
  - google_sheets
link: https://www.coursera.org/programs/trybe-google-learning-program-hrevt/professional-certificates/google-data-analytics?collectionId=twDTY
tipo-curso:
  - online
local:
  - Coursera
instrutor:
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%


---
# Google Sheets funções COUNTIF e COUNTIFS

Assim como as funções `SUMIF` e `SUMIFS` ([[27062023153908-google-sheets-funções-sumif-e-sumifs|Google Sheets funções SUMIF e SUMIFS]]), as funções `COUNTIF` e `COUNTIFS` retornam valores dada uma ou mais condições. A diferença é que as primeiras somam valores e estas contam valores. `COUNTIF` utiliza apenas um critério enquanto `COUNIFS` pode utilizar mais de um critério para contagem. 

Se quisermos contar quantas vezes o registro "Food" apareceu na tabela abaixo, podemos utilizar a função `COUNTIF`:

![[sumif_example.png]]

```
=COUNTIF(A1:A9;"Food")
```

A função retorna a quantidades de ocorrências do registro "Food".

A sintaxe básica da função `COUNTIFS` é a seguinte:

```
=COUNTIFS(intervalo_de_criterio1, criterio1, [intervalo_de_criterio2, criterio2, ...])
```

Então, se você quiser saber quantas vezes o registro "Coffee" em "12/15/2020", podemos utilizar a `COUNTIFS` da seguinte maneira:

```
=COUNTIFS(A1:A9;"Coffee";C1:C9;"12/15/2020")
```

Isso retornará a quantidade de ocorrências do registro "Coffee" na data indicada como condição no último argumento da função.


----
## Referências 
- [[27062023104930-google-sheets-fórmulas-de-cálculos-comuns-com-planilhas|Fórmulas de cálculos comuns com planilhas]]
- [Documentação](https://support.google.com/docs/answer/3093480?hl=en)