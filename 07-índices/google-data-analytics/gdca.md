## Continue daqui

```dataview
table without id 
	aliases as "TÍTULO",
	file.cday as "DATA",
	topico as "TÓPICO",
	file.link as "LINK"
from
	"04-notas-de-literatura"
where
	nome-do-curso = "Google Data Analytics Certification"
sort file.cday desc
limit
	1
```

---
## Notas da semana

```dataview
TABLE WITHOUT ID
	alias as "TÍTULO",
	file.cday as "DATA", 
	file.link as "LINK"
FROM 
	"04-notas-de-literatura"
WHERE file.cday > (date(today) - dur(7 days)) and nome-do-curso = "Google Data Analytics Certification"
SORT file.cday desc
LIMIT
	10
```

```dataview
TABLE WITHOUT ID
	alias as "TÍTULO",
	file.cday as "DATA", 
	file.link as "LINK"
FROM 
	"03-notas"
WHERE file.cday > (date(today) - dur(7 days)) and nome-do-curso = "Google Data Analytics Certification"
SORT file.cday desc
LIMIT
	10
```
---
## Últimas atualizações

```dataview
TABLE WITHOUT ID 
	file.link as "LINK",
	aliases as "TÍTULO",
	topico as "TÓPICO",
	file.mday as "DATA DA ATUALIZAÇÃO"
	
FROM
	"04-notas-de-literatura"
WHERE
	nome-do-curso = "Google Data Analytics Certification"
SORT 
	file.mday desc
LIMIT
	10	
```

## Últimos tópicos estudados

```dataview
table without id
	topico as "Últimos tópicos",
	length(rows) as "QTD"
from "04-notas-de-literatura"
where
	nome-do-curso = "Google Data Analytics Certification"
group by 
	topico
sort length(rows) desc
	
limit
	10	
```
---

# Funções de Limpeza de dados usando Google Sheets
```dataview
table without id
	file.link
from #data_wranglin 
sort file.ctime asc
```

## Todas as notas

```dataview
TABLE WITHOUT ID 
	nome-do-curso as CURSO,
	length(rows) as QTDE_NOTAS
FROM
	"04-notas-de-literatura"
WHERE
	nome-do-curso = "Google Data Analytics Certification"
GROUP BY
	nome-do-curso
```
