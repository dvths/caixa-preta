---
aliases:
  - Conceito Geral sobre XPATH
tags:
  - python_scprapy
  - python
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Conceito Geral

- XPath (XML Path Language) é uma linguagem de consulta para selecionar e navegar por nós de um documento XML ou HTML.
	- XML (Extensible Markup Language) é uma formato baseado em texto para representação de informações estruturadas, como documento, configurações, livros, transações, etc.
	- HTML (HyperText Markup Language) é uma linguagem de marcação para estruturação de páginas da web.
 
O uso mais comum para os [[scrapy_exemplo_1#^b31d3b|Seletores XPath é localizar os elementos de interesse na página]]. Ou seja, usamos o XPath para nos orientarmos na [[XPath Selectors#^1139ca|Árvore DOM]].  

Árvore DOM é como chamamos o conjunto de objetos que compõem o Document Object Model (DOM). Ele é fundamental para a interatividade e dinamicidade das aplicações da web. O DOM é uma especificação oficial da W3C (World Wide Web Consortium) para representar a estrutura de páginas da web que permite a interação com objetos/elementos de documentos XML, XHTML ou HTML, sendo muito mais comum os documentos HTML. O DOM permite acessar e manipular elementos usando funções e métodos especificados pela interface de programação de aplicações (API) correspondente. Isso é geralmente realizado em linguagens como JavaScript, mas não é exclusivo do JavaScript. Outras linguagens, como Python, também têm suas próprias bibliotecas para interagir com o DOM permitindo sua manipulação para acesso e modificação do conteúdo e da estrutura da página. ^c07391

Em uma árvore DOM, os galhos, ou nós, são os elementos que compõem o documento. No caso mais comum, HTML, são as tags e seus atributos, textos, etc. Em uma árvore, os nós têm uma relação hierárquica, ou seja, um nó pode ter filhos (descendants) ou pais (parents). Uma expressão XPath, define uma rota de navegação por essa árvore para acessarmos um elemento específico. Essa rota é dividida por etapas (**steps**) que orientam a localização dos nós da árvore. A localização atual de um nó na hierarquia, também é chamada de contexto do nó, que marca a relação desse nó atual com outros nós subjacentes, seus filhos, por exemplo, ou adjacentes, seus irmãos. Essa relação é denominada eixo (**axes**). Os eixos são representados tanto por palavras-chave como `child`, `ancestor`, `decendant`, entre outros, quanto pelo caractere "/". Além disso, uma ou mais etapas de uma expressão XPath pode ter predicados (expressões de filtro) ou chamadas de função que servem como *atalhos* dos caminhos XPath.

Por tanto, os componentes de uma expressão XPath são:

- [[23112023142413-nós]]
- [[23112023142708-eixos]]
- [[23112023143005-etapas]]
- [[23112023143528-contexto]]
- [[23112023144324-predicados]]
- [[23112023143410-operadores-e-funções]]





---
## Referencias