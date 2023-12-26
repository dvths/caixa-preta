---
alias: Google Sheets MAXIFS
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#google_sheets 

---
# Google Sheets MAXIFS

- Retorna o valor máximo de um intervalo de células, filtrado por um conjunto de critérios.
	- Sintaxe:
 
	 ```
		=MAXIF(intervalo, intervalo_criterio, criterio1, [intervalo_criterio2, criterio2, …])
	 ```

	- `intervalo`: é o intervalo de células onde o valor máximo será determinado.
	- `intervalo_criterio`: é o intervalo de células sobre o qual avaliar.
	- `criterio`: é o critério utilizado para condicionar o resultado.
	- `[intervalo_criterio2, criterio2, …]`: (opcional) outros intervalos e critérios a serem checados. 

----
## Referências 
- [[27062023104930-google-sheets-fórmulas-de-cálculos-comuns-com-planilhas|Fórmulas de cálculos comuns com planilhas]]
- [Documentação](https://support.google.com/docs/answer/7013817?hl=en&sjid=18044002281751170894-SA)