---
aliases:
  - Xpath-consultas complexas
tags:
  - xpath
  - raspagem_de_dados
  - python_scprapy
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Xpath-consultas complexas

Na pagina do Mac, eu queris selecionar a lista de instituições federais do mac. No fima das contas, ela se tornou pouco útil para o meu propósito, mas permitiu que eu criasse uma expressão xpath bem complexa que quero estudar quando tiver oportunidade 

Esta lista é feita utilizando uma tag p para cada instituição contendo uma taga a com o endereço web da instituição.
Precisamos selecionar todas as tags p seguintes à tag que contém o nome da região, por exempo "Região Nordeste". Para isso vamos utilizar o caminho xpath:

link da página: 
"http://portal.mec.gov.br/pec-g/cursos-e-instituicoes"

Expressões criadas para selecionar apenas as tags necessárias:
```
//p[preceding-sibling::p[starts-with(., 'Região Nordeste')]][following-sibling::p[not(starts-with(., 'Região Norte'))]][following-sibling::p[starts-with(., 'Região Norte')]]
```
Para selecionarmos as tags a com o atributo href que contêm o endereço url de cada universidade:

```
//p[preceding-sibling::p[starts-with(., 'Região Nordeste')]][following-sibling::p[not(starts-with(., 'Região Norte'))]][following-sibling::p[starts-with(., 'Região Norte')]]//a/@href
```



---
## Referencias