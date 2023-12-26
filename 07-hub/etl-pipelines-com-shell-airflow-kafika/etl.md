---
titulo_livro: 
ano: 
autor: []
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
	nome-do-curso = "ETL e pipelines de dados com Shell, Airflow e Kafka"
sort file.cday desc
limit
	1
```
----

## Notas feitas na última semana
```dataview
TABLE WITHOUT ID
	aliases as "Título",
	topico as "Tópico",
	file.cday as "Data", 
	file.link as "link"
FROM 
	"04-notas-de-literatura"
WHERE file.cday > (date(today) - dur(7 days)) and nome-do-curso = "ETL e pipelines de dados com Shell, Airflow e Kafka"
SORT file.cday desc
LIMIT
	10
```
----
## Próximas revisões
```dataview
TABLE WITHOUT ID 
	file.link as "Link para Nota",
	aliases as "Título",
	topico as "Tópico",
	sr-due as "Data da próxima revisão"
	
FROM
	"04-notas-de-literatura"
WHERE
	nome-do-curso = "ETL e pipelines de dados com Shell, Airflow e Kafka"
SORT 
	file.mday desc
```

___
## Tabela de duração
Qual a nota mais antiga?
```dataview
table without id 
	file.link as "Link da nota",
	topico as "Tópico",
	file.cday as "Início",
	(date(today) - file.cday).days as "Mais antigo (em dias)"
from
	"04-notas-de-literatura"
where
	nome-do-curso = "ETL e pipelines de dados com Shell, Airflow e Kafka"
sort file.cday asc 
limit
	10
```

## Tópicos
Qual tópico exigiu mais anotações?
```dataview
table without id 
	min(rows.topico) as "Tópico",
	length(rows.topico) as "Qtde de anotações"
from
	"04-notas-de-literatura"
where
	nome-do-curso = "ETL e pipelines de dados com Shell, Airflow e Kafka"
group by topico
sort rows.file.cday asc 
limit
	10
```

---
## Referência cruzada com outras obras
- [ ] Corrigir os atributos dos outros curso para poder visualizar como as anotações deste curso se relaciona com os demais cursos e leituras que estou fazendo
```dataview
table without id 
	file.inlinks as "Nota Relacionada",
	file.inlinks.topico as "Tópico",
	file.inlinks.nome-do-curso as "Curso Relacionado"
where this.file.nome-do-curso = "ETL e pipelines de dados com Shell, Airflow e Kafka" 
```

---
## Tarefas
```dataview
TABLE WITHOUT ID 
	regexreplace(Tasks.text, "\[.*$", "") AS TAREFA, 
	choice(Tasks.completed, "🟢", "🔴") AS ANDAMENTO,
	Tasks.priority AS PRIORIDADE,
	Tasks.created AS DATA_DA_CRIAÇÃO,
	Tasks.due AS DEADLINE, 
	Tasks.completion AS DATA_DA_CONCLUSÃO,
	regexreplace(Tasks.subtasks.text, "\[.*$", "") AS SUBTAREFAS,
	choice(Tasks.subtasks.completed, "🟢", "🔴") AS ANDAMENTO_SUBTASKS, 
	file.link AS LINK
FROM "04-notas-de-literatura"
WHERE file.tasks and nome-do-curso = "ETL e pipelines de dados com Shell, Airflow e Kafka"
FLATTEN file.tasks AS Tasks
SORT Tasks.priority DESC
```

---
## Notas por tópico