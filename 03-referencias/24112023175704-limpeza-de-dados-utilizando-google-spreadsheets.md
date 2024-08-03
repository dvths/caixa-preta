---
aliases:
  - Limpeza de dados utilizando Google Spreadsheets
tags:
  - GDCA
  - data_wranglin
  - ETL
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Limpeza de dados utilizando Google Spreadsheets

```dataview
table without id
	aliases,
	file.link
from "04-notas-de-literatura"
where contains(file.tags, "#google_sheets") and contains(file.tags, "data_wranglin") 
```


---
## Referencias