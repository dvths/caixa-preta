---
titulo_livro: A Arte da Estatística
autor:
  - Joe Reis
  - Matt Housley
ano: 2023
tags:
  - engenharia_de_dados
repo:
---

## Inbox
```dataview
table without id 
	file.link as "LINK",
	criado-em as "DATA",
	(date(today) - file.cday).days as "DIAS DECORRIDOS"
from
	#inbox
where
	origem = [[REIS, HOUSLEY - FUNDAMENTOS DA ENGENHARIA DE DADOS, 2023]] 
sort "DIAS DECORRIDOS" asc
limit
	10
```
----

## Tópicos
```dataview
table without id 
	min(rows.topico) as "Tópico",
	length(rows.topico) as "Qtde de anotações"
from
	"04-notas-de-literatura"
where
	titulo_livro = "Fundamentos da Engenharia de Dados"
group by topico
sort rows.file.cday asc 
limit
	10
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
WHERE file.tasks and titulo_livro = "Fundamentos da Engenharia de Dados"
FLATTEN file.tasks AS Tasks
SORT Tasks.priority DESC
```
