---
aliases:
  - Definição de Modelagem Conceitual
tags:
  - sql
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Definição de Modelagem Conceitual

> [!Summary] Resumo
> 
> A modelagem conceitual tem o objetivo de entender os principais elementos do domínio do sistema e busca mostrar em alto nível de abstração todos os conceitos importantes e os relacionamentos entre esses conceitos. Com base no escopo do sistema, posso encontrar entidades, seus atributos e relacionamentos com a seguinte técnica:
>
> - **Isolando os SUBSTANTIVOS**: os substantivos da especificação do escopo contribui para encontrar entidades que podem vir a se tornar tabelas do banco de dados.
> - **Isolando os ADJETIVOS**: os adjetivos da especificação podem ajudar a encontrar atributos dessas entidades que, por sua vez, podem se tornar as colunas de uma tabela.
> - **Isolando os Verbos**: Os verbos podem ajudar a definir os relacionamentos entre as entidades.

^025868

A modelagem conceitual tem o objetivo de entender os principais elementos do domínio do sistemar a modelagem conceitual mostra todos os conceitos importantes e os relacionamentos entres esses conceitos.

Nessa fase, não há preocupação estabelecer quais serão as tabelas, os atributos ou qualquer outra especificidade do banco, além da ideia inicial de como ele se parecerá. Ou seja, o foco é ser o ponto de partida para o posterior refinamento desses elementos e deve sofrer alterações constantes até que possa der implementado.

Como o próprio nome diz, nessa fase, elaboramos os conceitos relativos ao problema, **também chamado de domínio**, que parte da análise do **escopo**, do sistema. O escopo deve ser uma especificação clara do sistema que precisa ser modelado e, geralmente é definido com o cliente que encomenda o software.

Da analise desse escopo, partimos para a modelagem buscando definir suas entidades, os atributos dessas entidades e como elas se relacionam.

Para fazer isso podemos:

**Isolando os SUBSTANTIVOS**: os substantivos da especificação do escopo contribui para que possamos começar a encontrar [[23112023181230-entidades|Entidades]] que podem vir a se tornar tabelas do banco de dados.

**Isolando os ADJETIVOS**: os adjetivos da especificação podem ajudar a encontrar [[23112023181702-atributos|Atributos]] dessas entidades que, por sua vez, podem se tornar as colunas de uma tabela. ^570ebe

**Isolando os Verbos**: Os verbos podem ajudar a definir os [[23112023182611-relacionamentos|Relacionamentos]] entre as entidades.

---
## Referencias