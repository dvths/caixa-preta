---
alias: Google Sheets funções SUMIF e SUMIFS
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#google_sheets 

---
# Google Sheets funções SUMIF e SUMIFS
	 
Assim como as funções `CONTIF` e `COUNTIFS` ([[27062023154219-google-sheets-funções-countif-e-countifs|Google Sheets funções COUNTIF e COUNTIFS]]), as funções `SUMIF` e `SUMIFS`  retornam valores dada uma ou mais condições. `SUMIF` utiliza apenas um critério, enquanto `SUMIFS` pode utilizar mais de um critério.

O primeiro parâmetro da função `SUMIF` é o intervalo onde a função pesquisará a condição definida. O segundo parâmetro, critério, é a condição em si e o último parâmetro, intervalo_a_somar, é o intervalo de células que será incluído no cálculo.

Na tabela abaixo, podemos contar a quantidade gasta de combustível utilizando `SUMIF`:

![[sumif_example.png]]

```
=SUMIF(A1:A9;"Fuel";B1:B9)
```

Contudo, podemos adicionar mais condições usando a função `SUMIFS`:

A sintaxe básica da função `SUMIFS` é:`SUMIF(intervalo_a_somar;intervalo_de_criterio;criterio;[intervalo_de_criterio2;criterio2;...])`

>[!tip] Os colchetes indicam que essa parte é opcional Contando que se siga corretamente a sintaxe, é possível adicionar até 127 condições.

```
=SUMIFS(B1:B9;A1:A9;"Fuel";C1:C9;"12/15/2020")
```

A função retorna o custo total de cada despesa de combustível a partir da data indicada que é a condição passada como último argumento.

`C1:C9` é o segundo intervalo_de_criterio e a data é a segunda condição.

----
## Referências 

- [[27062023104930-google-sheets-fórmulas-de-cálculos-comuns-com-planilhas|Fórmulas de cálculos comuns com planilhas]]
- [Documentação](https://support.google.com/docs/answer/3093583?hl=en&sjid=15482988136596872416-SA)