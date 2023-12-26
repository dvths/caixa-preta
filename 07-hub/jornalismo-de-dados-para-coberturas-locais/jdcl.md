## Continue daqui

```dataview
table without id 
	alias as "TÍTULO",
	file.cday as "DATA",
	topico as "TÓPICO",
	file.link as "LINK"
from
	"04-notas-de-literatura"
where
	nome-do-curso = "Jornalismo de Dados para Coberturas Locais"
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
WHERE file.cday > (date(today) - dur(7 days)) and nome-do-curso = "Jornalismo de Dados para Coberturas Locais"
SORT file.cday desc
LIMIT
	10
```

---
## Últimas atualizações

```dataview
TABLE WITHOUT ID 
	alias as "TÍTULO",
	topico as "TÓPICO",
	file.mday as "DATA DA ATUALIZAÇÃO",
	file.link as "LINK"
	
FROM
	"04-notas-de-literatura"
WHERE
	nome-do-curso = "Jornalismo de Dados para Coberturas Locais"
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
	nome-do-curso = "Jornalismo de Dados para Coberturas Locais"
group by 
	topico
sort length(rows) desc
	
limit
	10	
```
---
## Tarefas