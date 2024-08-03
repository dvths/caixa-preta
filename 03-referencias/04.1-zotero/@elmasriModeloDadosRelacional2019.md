ano:: 2019
autor:: Ramez Elmasri, Navath ShamkantB.
titulo do livro:: Sistemas de Bancos de Dados
seção:: [1]O Modelo de Dados Relacional e as restrições em bancos de dados relacionais
url: 
zotero link: [Elmasri e ShamkantB. - 2019 - [1]O Modelo de Dados Relacional e as restrições em.pdf](zotero://select/library/items/EUTLZ2XP)

 
 
## Definição Informal e Formal do Modelo Relacional 
 
>[!cite]  O modelo relacionai representa o banco de dados como uma coleção de relações. InformaImente, cada relação é semelhante a uma tabela de valores ou, até certo ponto, a um arquivo sequencial de registros” Yellow Highlight [Page 2](zotero://open-pdf/library/items/EUTLZ2XP?page=2&annotation=8CNTN82U) 
 
>[!cite]  Quando uma relação é considerada uma tabela de valores, cada linha na tabela representa uma coleção de valores de dados relacionados. Uma linha representa um fato que normalmente corresponde a uma entidade ou relacionamento do mundo real. Os nomes da tabela e da coluna são usados para ajudar a interpretar o significado dos valores em cada linha.” Yellow Highlight [Page 2](zotero://open-pdf/library/items/EUTLZ2XP?page=2&annotation=QLW6CEKT) 
 
>[!cite]  Na terminologia formal do modelo relacional, uma linha é chamada de tupla, um cabeçalho da coluna é chamado de atributo e a tabela é chamada de relação. O tipo de dado que descreve os tipos de valores que podem aparecer em cada coluna é representado por um domínio de valores possíveis.” Yellow Highlight [Page 2](zotero://open-pdf/library/items/EUTLZ2XP?page=2&annotation=HTNB8UGT) 
 
 
 
### Definição de Domínio 
 
>[!cite]  Um domínio D é um conjunto de valores atômicos.” Yellow Highlight [Page 3](zotero://open-pdf/library/items/EUTLZ2XP?page=3&annotation=V7JTX4V6) 
 
 
 
### Definição de Formal de um Relação 
 
>[!cite]  Um esquema de relação R, indicado por R(AP A,, ..., An), é composto de um nome de relação R e uma lista de atributos, Ap ..., An. Cada atributo Ai é o nome dc um papel desempenhado por algum domínio D no esquema de relação R. D é chamado dc domínio dc Ai c indicado por dom(A;).” Yellow Highlight [Page 3](zotero://open-pdf/library/items/EUTLZ2XP?page=3&annotation=SRZJ7EWR) 

^edc63d

 
>[!cite]  Um esquema de relação é usado para descrever uma relação” Yellow Highlight [Page 3](zotero://open-pdf/library/items/EUTLZ2XP?page=3&annotation=2U8QAP6R) 
 
>[!cite]  R é chamado de nome dessa relação. O grau (ou aridade) de uma relação é o número de atributos n desse esquema de relação.” Yellow Highlight [Page 3](zotero://open-pdf/library/items/EUTLZ2XP?page=3&annotation=86WJZFB4) 
 
>[!cite]  Apresentamos a relação como uma tabela, na qual cada tupla aparece como uma linha e cada atributo corresponde a um cabeçalho de coluna, indicando um papel ou interpretação dos valores nesta coluna. Valores NULL representam atributos cujos valores são desconhecidos ou não existem para alguma tupla individual de ALUNO.” Yellow Highlight [Page 4](zotero://open-pdf/library/items/EUTLZ2XP?page=4&annotation=UMFEYNIK) 
 
>[!cite]  Uma relação (ou estado de relação) $r(R)$ é uma relação matemática de grau $n$ sobre os domínios $dom(A_{j})$, $dom(A_{2})$,..., $dom(A_{n})$, que é um subconjunto do produto cartesiano (indicado por $\times$) dos domínios que definem $R$: $$
r(R) \subseteq (dom(A_{1}) \times dom(A_{2}) \times ... \times dom(A_{n}))$$” Yellow Highlight [Page 4](zotero://open-pdf/library/items/EUTLZ2XP?page=4&annotation=ERB5U2CQ) 

^eeadd6

 
![[image-4-x23-y136.png]] 
 
 
 
## Características das relações 
 
>[!cite]  A ordenação da tupla não faz parte da definição da relação porque uma relação tenta representar fatos em um nível lógico ou abstrato.” Yellow Highlight [Page 5](zotero://open-pdf/library/items/EUTLZ2XP?page=5&annotation=S88R87U4) 
 
>[!cite]  Por exemplo, as tuplas na relação ALUNO da Figura 5.1 poderiam ser ordenadas pelos valores de Nome, Cpf, Idade ou algum outro atributo. A definição de uma relação não especifica ordem alguma: não existe preferência por uma ou outra ordenação. Logo, a relação apresentada na Figura 5.2 é considerada idêntica à mostrada na Figura 5.1.” Yellow Highlight [Page 5](zotero://open-pdf/library/items/EUTLZ2XP?page=5&annotation=3F3NZXBD) 
 
![[image-5-x30-y44.png]] 
 
> Figura 5.2 A relação ALUNO da Figura 5.1 com uma ordem de tuplas diferente. 
 
>[!cite]  A ordem dos atributos não c importante, pois o nome do atributo aparece com seu valor.” Yellow Highlight [Page 6](zotero://open-pdf/library/items/EUTLZ2XP?page=6&annotation=NNN3SBTG) 
 
> Este é um coceito chamado de alternativo pelo autor e usado no capitulo 18  quando será discutido o processamento e otimização das consultas. 
 
>[!cite]  Logo, atributos compostos ou multivalorados (ver Capítulo 3) não são permitidos. Esse modelo às vezes é chamado de modelo relacionai plano. Grande parte da teoria por trás do modelo relacionai foi desenvolvida com essa suposição em mente, que é chamada pressuposto da primeira forma normal.” Blue Highlight [Page 6](zotero://open-pdf/library/items/EUTLZ2XP?page=6&annotation=SRPYB8GS) 
 
#primeira_forma_normal
> Capitulo 14 - 14.3.4 
 
>[!cite]  O significado exato de um valor NULL determina como ele será aplicado durante agregações aritméticas ou comparações com outros valores.” Blue Highlight [Page 7](zotero://open-pdf/library/items/EUTLZ2XP?page=7&annotation=7LZE6BS6) 
 
> O valor NULL é discutido nos Capitulos 7 e 8 e no Capitulo 14 
 
>[!cite]  O esquema de relação pode ser inter­ pretado como uma declaração ou um tipo de afirmação (ou asserção).” Yellow Highlight [Page 7](zotero://open-pdf/library/items/EUTLZ2XP?page=7&annotation=4K954F9Y) 
 
>[!cite]  Cada tupla na relação pode então ser interpretada como um fato ou uma instância em particular da afirmação. Por exemplo, a primeira tupla na Figura 5.1 afirma que existe um ALUNO cujo Nome é Bruno Braga, o Cpf é 305.610.243-51, a Idade é 19, e assim por diante.” Yellow Highlight [Page 7](zotero://open-pdf/library/items/EUTLZ2XP?page=7&annotation=9SN49T89) 
 
>[!cite]  Observe que algumas relações podem representar fatos sobre entidades, enquanto outras podem representar fatos sobre relacionamentos.” Yellow Highlight [Page 7](zotero://open-pdf/library/items/EUTLZ2XP?page=7&annotation=JVU2UR2N) 
 
>[!cite]  Logo, o modelo relacionai representa fatos sobre entidades e relacionamentos uniformemente como relações. Isso às vezes compromete a compreensão,pois é preciso descobrir se uma relação representa um tipo de entidade ou um tipo de relacionamento. Apresentamos o modelo entidade-relacionamento (ER) com detalhes no Capítulo 3, no qual os conceitos de entidade e relacionamento foram descritos minuciosamente.” Blue Highlight [Page 7](zotero://open-pdf/library/items/EUTLZ2XP?page=7&annotation=ZUYA2IAW) 
 
>[!cite]  Uma interpretação alternativa de um esquema de relação é como um predicado; neste caso, os valores em cada tupla são interpretados como valores que satisfazem o predicado.” Yellow Highlight [Page 7](zotero://open-pdf/library/items/EUTLZ2XP?page=7&annotation=JFV5MGY7) 
 
---




%% Import Date: 2023-05-28T17:49:11.498-03:00 %%
