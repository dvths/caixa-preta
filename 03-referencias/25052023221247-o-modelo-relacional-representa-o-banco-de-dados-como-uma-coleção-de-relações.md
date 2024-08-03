---
aliases:
  - O Modelo Relacional representa o banco de dados como coleção de relações
tags:
  - analise_de_dados
  - analise_exploratória
  - processar
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

---
# O modelo relacional representa o banco de dados como uma coleção de relações

[[17052023175822-a-forma-como-os-dados-estão-estruturados-define-a-forma-como-trabalharemos-com-eles]]. 

O Modelo Relacional possui sua própria terminologia para definir o formato de um conjunto de dados: "uma linha é chamada de tupla, um cabeçalho da coluna é chamado de atributo e a tabela é chamada de relação. O tipo de dado que descreve os tipos de valores que podem aparecer em cada coluna é representado por um domínio de valores possíveis.”(ELMASRI; SHAMKANTB., 2019) 

Cada relação, portanto, é um conjunto de tuplas que, tanto podem representar fatos sobre entidades do mundo real, quanto fatos sobre os relacionamentos entre essas entidades. Cada tupla, é caracterizada normalmente por uma lista de atributos de diferentes tipos de valor que compõem o que é chamado de **esquema da relação**.  

Uma definição formal dos componentes de um modelo relacional:

- [ ] [[03062023222631-uma-tabela-é-uma-relação-matemática]]
- [ ] [[Um domínio é um conjunto de valores atômicos]]
- [ ] [[Cada atributo de uma relação é um papel desempenhado por um domínio]]
- [ ] [[Cada tupla é uma lista ordenada de valores]]
- [ ] [[Um esquema da relação é a descrição de uma relação]]

Um sistema de banco de dados normalmente possui várias relações interligadas, submetidas a uma série de restrições, e projetadas para garantir a integridade e a consistência dos dados. 

Um sistema é modelado em três níveis:
- [ ] [[A modelagem conceitual é a representação do sistema de forma abstrata e independente de tecnologia]].
- [ ] [[A modelagem lógica é a tradução da modelagem conceitual em um esquema de banco de dados específico]].
- [ ] [[A modelagem física é a implementação prática do modelo lógico]].

> Acho que esse trecho pode ir para definição de domínio
	[[17052023211923-a-taxonomia-de-tipos-de-dados-importa-para-estruturação-manipulação-e-processamento-correto-dos-dados|A taxonomia de tipos de dados importa para estruturação, manipulação e processamento correto dos dados]], contudo, enquanto no campo da Ciência de Dados entendemos duas categorias básicas (Numérico e Categórico), no contexto dos bancos de dados, [[@bruceEstatisticaPraticaPara2019#^f08154|a classificação dos tipos é mais específica e lida diretamente com questões da Ciência da Computação como armazenamento, indexação e otimização]].     
	
----
## Referências Adicionais

[[@bruceEstatisticaPraticaPara2019]]
[[@elmasriModeloDadosRelacional2019]]