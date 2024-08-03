---
titulo_livro: Python Fluente
ano: 2023
autor: Luciano Ramalho
---

## Continue daqui
```dataview
table without id 
	file.link as "LINK",
	file.cday as "DATA",
	topico as "TÓPICO"
from
	"04-notas-de-literatura"
where
	titulo_livro = "Python Fluente"
sort file.cday desc
limit
	1
```
----

## Notas feitas na última semana
```dataview
TABLE WITHOUT ID
	topico as "Tópico",
	file.cday as "Data", 
	file.link as "link"
FROM 
	"04-notas-de-literatura"
WHERE file.cday > (date(today) - dur(7 days)) and titulo_livro = "Python Fluente"
SORT file.cday desc
LIMIT
	10
```
----
## Próximas revisões
```dataview
TABLE WITHOUT ID 
	file.link as "Link para Nota",
	topico as "Tópico",
	sr-due as "Data da próxima revisão"
	
FROM
	"04-notas-de-literatura"
WHERE
	titulo_livro = "Python Fluente"
SORT 
	file.mday desc
```

___
## Tabela de duração
```dataview
table without id 
	file.link as "Link da nota",
	topico as "Tópico",
	file.cday as "Início",
	(date(today) - file.cday).days as "Mais antigo (em dias)"
from
	"04-notas-de-literatura"
where
	titulo_livro = "Python Fluente"
sort file.cday asc 
limit
	10
```

## Tópicos
```dataview
table without id 
	min(rows.topico) as "Tópico",
	length(rows.topico) as "Qtde de anotações"
from
	"04-notas-de-literatura"
where
	titulo_livro = "Python Fluente"
group by topico
sort rows.file.cday asc 
limit
	10
```

---
## Referência cruzada com outras obras
```dataview
table without id 
	file.inlinks as "Nota relacionada",
	file.inlinks.topico as "Tópico",
	file.inlinks.autor as "Autor",
	file.inlinks.titulo_livro as "Livro"
where file.name = this.file.name 
```

---
## Tarefas
```dataview
TABLE WITHOUT ID 
	regexreplace(Tasks.text, "\[.*$", "") AS TASK, 
	choice(Tasks.completed, "🟢", "🔴") AS STATUS,
	Tasks.priority AS "PRIORIDADE",
	Tasks.created AS "DATA DA CRIAÇÃO",
	Tasks.due AS "DEADLINE", 
	Tasks.completion AS "COMPLETO EM",
	regexreplace(Tasks.subtasks.text, "\[.*$", "") AS SUBTASKS,
	choice(Tasks.subtasks.completed, "🟢", "🔴") AS "STATUS DAS SUBTASKS", 
	file.link AS "LINK"
FROM "04-notas-de-literatura"
WHERE file.tasks and titulo_livro = "Python Fluente"
FLATTEN file.tasks AS Tasks
SORT Tasks.priority DESC
```

---
## Notas por tópico

### Uma coleção de sequências
```dataview
table without id
	file.link as Nota,
	file.ctime as Data
 from "04-notas-de-literatura"
 where contains(topico, "Uma coleção de sequências")
```
