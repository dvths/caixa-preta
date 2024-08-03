---
alias: Google Sheets SUMPRODUCT
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#google_sheets 

---
# Google Sheets SUMPRODUCT

- Multiplica arrays e retorna a soma dos seus produto**s.
	- Sintaxe:
	 ```
	  =SUMPRODUCT(array; [array1...])
	 ```
  
>[!warning] Um array em uma planilha é uma coleção de valores em células e não as células em si.

## Exemplo

Se quisermos o valor total das vendas de um produto considerando seu preço unitário:

|     | A          | B        | C          | D      | E                              |
| --- | ---------- | -------- | ---------- | ------ | ------------------------------ |
| 1   | Product ID | Quantity | Unit Price | Margin | TOTAL                          |
| 2   | 789        | 50       | $1.25      | 20%    | =SUMPRODUCT(B1:B6;C1:C6,D1:D6) | 
| 3   | 790        | 25       | $5.00      | 25%    |                                |
| 4   | 791        | 30       | $4.25      | 20%    |                                |
| 5   | 792        | 80       | $3.00      | 30%    |                                |
| 6   | 793        | 200      | $0.50      | 15%    |                                |

|     | A          | B        | C          | D      | E        |
| --- | ---------- | -------- | ---------- | ------ | ------- |
| 1   | Product ID | Quantity | Unit Price | Margin | TOTAL   |
| 2   | 789        | 50       | $1.25      | 20%    | $156.25 |
| 3   | 790        | 25       | $5.00      | 25%    | $143.75 |
| 4   | 791        | 30       | $4.25      | 20%    | $112.50 |
| 5   | 792        | 80       | $3.00      | 30%    | $87.00  |
| 6   | 793        | 200      | $0.50      | 15%    | $15.00  |

----
## Referências 

- [[27062023104930-google-sheets-fórmulas-de-cálculos-comuns-com-planilhas|Fórmulas de cálculos comuns com planilhas]]
- [Documentação](https://support.google.com/docs/answer/3094294?hl=en)