---
alias: Google Sheets AVARAGEIF e AVARAGEIFS
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#google_sheets 

---
# Google Sheets AVARAGEIF e AVARAGEIFS

- `AVERAGEIF`: Retorna a média de um intervalo dependendo de um critério
	- Sintaxe:
	
	```
	=AVERAGEIF(intervalo, criterio, [intervalo_para_media])
	```
	
	- `intervalo`: é o intervalo de células que serão contados para média caso `intervalo_para_media` não seja especificado.
	- `critério`: o critério utilizado para condicionar a contagem da média.
	- `intervalo_para_media` (opcional): é o valor utilizado para contar a média. Caso não seja especificado, `intervalo` é utilizado
	
- AVERAGEIFS: Assim como o primeiro, retorna a media de um intervalo, contudo com múltiplas condicionantes.
	- Sintaxe:
	 ```
	  AVERAGEIFS(intervalo, intervalo1, criterion1, [intervalo2, criterio2, ...])`
	 ```
	- `intervalo`: é o intervalo de células que serão contados para média caso `intervalo_para_media` não seja especificado.
	- `intervalo1`: é o intervalo a ser verificado em relação ao `critério`.
	- `critério`: o critério utilizado para condicionar a contagem da média.
	- `[intervalo2, criterio2, ...]` (opcional): representam os outros intervalos e critérios a serem checados.

----
## Referências 
- [[27062023104930-google-sheets-fórmulas-de-cálculos-comuns-com-planilhas|Fórmulas de cálculos comuns com planilhas]]
- [Documentação](https://support.google.com/docs/answer/3256534?sjid=18044002281751170894-SA)