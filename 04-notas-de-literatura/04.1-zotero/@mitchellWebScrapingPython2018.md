ano:: 2018
autor:: Ryan E. Mitchell
titulo do livro:: 
seção:: Web scraping with Python: collecting more data from the modern web
url: 
zotero link: [Mitchell - 2018 - Web scraping with Python collecting more data fro.pdf](zotero://select/library/items/58JPUIX8)

 
 
## Web scraping é a prática de coletar dados por qualquer meio que não seja um  programa interagindo com uma API 
 
>[!cite]  A coleta automatizada de dados da internet é quase tão antiga quanto a própria internet.” Yellow Highlight [Page 10](zotero://open-pdf/library/items/58JPUIX8?page=10&annotation=HKCTDI6B) 
 
>[!cite]  Teoricamente, web scraping é a prática de coletar dados por qualquer meio que não seja um programa interagindo com uma API (ou, obviamente, por um ser humano usando um navegador web). Isso” Yellow Highlight [Page 10](zotero://open-pdf/library/items/58JPUIX8?page=10&annotation=EPNL3XAY) 
 
>[!cite]  comumente feito escrevendo um programa automatizado que consulta um servidor web, requisita dados (em geral, na forma de HTML e de outros arquivos que compõem as páginas web) e então faz parse desses dados para extrair as informações necessárias.” Yellow Highlight [Page 10](zotero://open-pdf/library/items/58JPUIX8?page=10&annotation=SBKTA5ND) 
 
>[!cite]  Na prática, o web scraping engloba uma grande variedade de técnicas de programação e de tecnologias, por exemplo, análise de dados, parsing de idiomas naturais e segurança de informação.” Yellow Highlight [Page 10](zotero://open-pdf/library/items/58JPUIX8?page=10&annotation=83AI7DDA) 

^0bc5cf

 
>[!cite]  os web scrapers são ótimos para coletar e processar grandes volumes de dados rapidamente.” Yellow Highlight [Page 10](zotero://open-pdf/library/items/58JPUIX8?page=10&annotation=M3DEUC85) 
 
>[!cite]  Além disso, os web scrapers podem acessar lugares que as ferramentas de pesquisa tradicionais não conseguem.” Yellow Highlight [Page 10](zotero://open-pdf/library/items/58JPUIX8?page=10&annotation=VX8B8TJ3) 
 
>[!cite]  No entanto, um web scraper bem desenvolvido pode colocar em um gráfico o custo de um voo para Boston ao longo do tempo para uma variedade de sites e informar qual é o melhor momento para comprar uma passagem.” Green Highlight [Page 11](zotero://open-pdf/library/items/58JPUIX8?page=11&annotation=WG3ACWVB) 
 
>[!tip] Um insigth 
 
>[!cite]  Mesmo que haja uma API, os limites para volume e taxa de requisição dos dados, ou os tipos e formatos disponibilizados, podem ser insuficientes para seus propósitos.” Yellow Highlight [Page 11](zotero://open-pdf/library/items/58JPUIX8?page=11&annotation=MHINISJ4) 
 
>[!cite]  O projeto “We Feel Fine” (http://wefeelfine.org/) de 2006, de Jonathan Harris e Sep Kamvar, coletou dados de vários sites de blogs em inglês em busca de expressões como “I feel” (Sinto) ou “I am feeling” (Estou me sentindo). Isso resultou em uma visualização de dados populares, que descrevia como o mundo estava se sentindo dia a dia e minuto a minuto.” Green Highlight [Page 12](zotero://open-pdf/library/items/58JPUIX8?page=12&annotation=BEC4PEQJ) 
 
>[!tip] Outra ideia interessante 
 
>[!cite]  web scraping quase sempre oferece uma forma de orientar práticas de negócios com mais eficiência, melhorar a produtividade ou até mesmo dar origem a uma área totalmente nova.” Yellow Highlight [Page 12](zotero://open-pdf/library/items/58JPUIX8?page=12&annotation=AJBU759G) 
 
>[!cite]  urllib é uma biblioteca-padrão de Python” Yellow Highlight [Page 21](zotero://open-pdf/library/items/58JPUIX8?page=21&annotation=UJUSMFAQ) 
 
> [!note] `urllib` é um pacote que reúne vários módulos para trabalhar com URLs. 
 
>[!cite]  ela contém funções para requisitar dados da web, tratando cookies e até mesmo modificando metadados como cabeçalhos e o agente de usuário (user agent).” Red Highlight [Page 21](zotero://open-pdf/library/items/58JPUIX8?page=21&annotation=LUUMHG6C) 
 
Importante descrever um pouco mais o que é "cabeçalho", "cookies" e "user agente". 
 
>[!cite]  BeautifulSoup tenta dar sentido ao que não faz sentido: ajuda a formatar e a organizar a web confusa, fazendo correções em um código HTML mal formatado e apresentando objetos Python que podem ser facilmente percorridos, os quais representam estruturas XML.” Yellow Highlight [Page 21](zotero://open-pdf/library/items/58JPUIX8?page=21&annotation=Z74FBBHQ) 
 
> [!note] BeatifulSoup é um pacote python para extrair dados de arquivos HTML e XML 
 
>[!cite]  Ao criar um objeto BeautifulSoup, dois argumentos são passados: bs = BeautifulSoup(html.read(), 'html.parser') O primeiro é o texto HTML no qual o objeto se baseia, e o segundo especifica o parser que queremos que o BeautifulSoup use para criar esse objeto.” Yellow Highlight [Page 25](zotero://open-pdf/library/items/58JPUIX8?page=25&annotation=PNJ7GW35) 
 
>[!cite]  velocidade não seja necessariamente uma vantagem no web scraping, considerando que a própria velocidade da rede quase sempre será o principal gargalo.” Yellow Highlight [Page 25](zotero://open-pdf/library/items/58JPUIX8?page=25&annotation=W8HDL8QA) 
 
>[!cite]  A web é confusa. Os dados são mal formatados, os sites ficam inativos e tags de fechamento podem estar ausentes. U” Yellow Highlight [Page 26](zotero://open-pdf/library/items/58JPUIX8?page=26&annotation=YGPQ3TAC) 
 
>[!cite]  Isso quer dizer que não foi possível acessar nenhum servidor e, como o servidor remoto é responsável por devolver códigos de status HTTP, um HTTPError não pôde ser lançado, e o erro URLError, mais grave, deve ser capturado.” Yellow Highlight [Page 27](zotero://open-pdf/library/items/58JPUIX8?page=27&annotation=9MZMEHGT) 
 
>[!cite]  e você tentar acessar uma tag que não existe, o BeautifulSoup devolverá um objeto None.” Yellow Highlight [Page 27](zotero://open-pdf/library/items/58JPUIX8?page=27&annotation=LNEZ89FE) 
 
>[!cite]  modo mais fácil é verificar as duas situações explicitamente:” Yellow Highlight [Page 28](zotero://open-pdf/library/items/58JPUIX8?page=28&annotation=FKSMHZEL) 
 
>[!cite]  Ao escrever scrapers, é importante pensar no padrão geral de seu código a fim de lidar com as exceções e, a” Yellow Highlight [Page 29](zotero://open-pdf/library/items/58JPUIX8?page=29&annotation=7Z7CKHLW) 
 
 
 
## Parsing de HTML avançado 
 
>[!cite]  e estiver diante de dados escondidos ou mal formatados, é importante não começar simplesmente a escrever um código que faça você cavar um buraco do qual talvez não saia. Respire fundo e pense nas alternativas.” Yellow Highlight [Page 31](zotero://open-pdf/library/items/58JPUIX8?page=31&annotation=D7VRZGMH) 
 
>[!cite]  O CSS se baseia na diferenciação de elementos HTML que, de outro modo, poderiam ter exatamente a mesma marcação – para estilizá-los de modo distinto.” Yellow Highlight [Page 32](zotero://open-pdf/library/items/58JPUIX8?page=32&annotation=FD2JJ2XW) 
 
>[!cite]  find_all pode ser usada para extrair uma lista Python com nomes próprios, encontrados ao selecionar somente o texto entre as tags <” Yellow Highlight [Page 32](zotero://open-pdf/library/items/58JPUIX8?page=32&annotation=PT9BZCSR) 
 
>[!cite]  agName antes para obter a primeira ocorrência dessa tag na página. Agora chamamos bs.find_all(tagName, tagAttributes) para obter uma lista de todas as tags da página, em vez de obter somente a primeira.” Yellow Highlight [Page 33](zotero://open-pdf/library/items/58JPUIX8?page=33&annotation=IGURDW5G) 
 
>[!cite]  find() e find_all() são as duas funções do BeautifulSoup que provavelmente serão mais usadas. Com elas, é possível filtrar facilmente as páginas HTML e encontrar as listas de tags desejadas – ou uma só tag – de acordo com seus vários atributos.” Yellow Highlight [Page 33](zotero://open-pdf/library/items/58JPUIX8?page=33&annotation=W8A7SXEB) 
 
>[!cite]  o argumento tag; podemos passar o nome de uma tag como string ou até mesmo uma lista Python de nomes de tags definidos como strings.” Yellow Highlight [Page 33](zotero://open-pdf/library/items/58JPUIX8?page=33&annotation=XBEKD3NR) 
 
>[!cite]  O argumento attributes aceita um dicionário Python de atributos e faz a correspondência com tags que contenham qualquer um desses atributos.” Yellow Highlight [Page 34](zotero://open-pdf/library/items/58JPUIX8?page=34&annotation=7GQ6UH74) 
 
>[!cite]  O argumento recursive é um booleano. Qual é o nível de aprofundamento que você gostaria de alcançar no documento? Se recursive for True, a função find_all analisará os filhos, e os filhos dos filhos, em busca de tags que correspondam aos parâmetros.” Yellow Highlight [Page 34](zotero://open-pdf/library/items/58JPUIX8?page=34&annotation=UDGQCX73) 
 
>[!cite]  Se for False, somente as tags de nível mais alto no documento serão verificadas. Po” Yellow Highlight [Page 34](zotero://open-pdf/library/items/58JPUIX8?page=34&annotation=G8T28Q38) 
 
>[!cite]  O argumento text é peculiar por fazer a correspondência com base no conteúdo textual das tags, em vez de usar suas propriedades. Por exemplo, se quiser encontrar o número de vezes que “the prince” está cercado por tags na página de exemplo, a função .find_all() poderia ser substituída no exemplo anterior pelas linhas a seguir: nameList = bs.find_all(text='the prince') print(len(nameList)) O resultado desse código é 7” Yellow Highlight [Page 34](zotero://open-pdf/library/items/58JPUIX8?page=34&annotation=VY4EHGP6) 
 
Interessante, pois posso fazer contagem de palavras ou termos em uma pesquisa de satisfação, por exemplo. 
 
>[!cite]  O argumento limit obviamente é usado somente no método find_all; find é equivalente à chamada de find_all com um limite igual a 1. Esse parâmetro pode ser definido se você estiver interessado apenas em obter os primeiros x itens da página. S” Yellow Highlight [Page 34](zotero://open-pdf/library/items/58JPUIX8?page=34&annotation=K8H5WT3V) 
 
>[!cite]  O argumento keyword permite selecionar tags que contenham um atributo ou um conjunto de atributos específicos. Por exemplo: title = bs.find_all(id='title', class_='text')” Yellow Highlight [Page 34](zotero://open-pdf/library/items/58JPUIX8?page=34&annotation=FPZPP73W) 
 
>[!cite]  Argumentos nomeados e “class”” Green Highlight [Page 35](zotero://open-pdf/library/items/58JPUIX8?page=35&annotation=B5LEI9K7) 
 
>[!cite]  Lembre-se de que passar uma lista de tags para .find_all() por meio da lista de atributos atua como um filtro “ou” (seleciona uma lista com todas as tags que tenham tag1, tag2 ou tag3...). Se tivermos uma lista de tags longa, poderemos acabar com muita informação indesejada. O argumento keyword permite acrescentar um filtro “e”.” Yellow Highlight [Page 35](zotero://open-pdf/library/items/58JPUIX8?page=35&annotation=ZUSVFIKZ) 
 
>[!cite]  Objetos NavigableString” Green Highlight [Page 36](zotero://open-pdf/library/items/58JPUIX8?page=36&annotation=DTYBSYMJ) 
 
>[!cite]  Objeto Comment” Green Highlight [Page 36](zotero://open-pdf/library/items/58JPUIX8?page=36&annotation=KUVQSM8Z) 
 
 
 
### Navegação em Árvore 
 
>[!cite]  char uma tag com base em sua localização em um documento?” Yellow Highlight [Page 36](zotero://open-pdf/library/items/58JPUIX8?page=36&annotation=7W9CJ7PZ) 
 
 
 
#### Lidando com filhos e descendentes 
 
>[!cite]  dos os filhos são descendentes, mas nem todos os descendentes são filhos.” Green Highlight [Page 38](zotero://open-pdf/library/items/58JPUIX8?page=38&annotation=ZEI3SEU7) 
 
>[!cite]  Em geral, as funções do BeautifulSoup sempre lidam com os descendentes da tag selecionada no momento. Por” Yellow Highlight [Page 38](zotero://open-pdf/library/items/58JPUIX8?page=38&annotation=HDMP4MWG) 
 
>[!cite]  De modo semelhante, bs.div.find_all('img') encontrará a primeira tag div no documento, e então obterá uma lista de todas as tags img que são descendentes dessa tag div.” Yellow Highlight [Page 38](zotero://open-pdf/library/items/58JPUIX8?page=38&annotation=RQ54WC9Y) 
 
>[!cite]  Se quiser encontrar somente os descendentes que sejam filhos, a tag .children pode ser usada:” Yellow Highlight [Page 38](zotero://open-pdf/library/items/58JPUIX8?page=38&annotation=TBLHAJNG) 
 
 
 
#### Lidando com Irmãos 
 
>[!cite]  Sempre que os irmãos de um objeto forem obtidos, o próprio objeto não estará incluído na lista. C” Yellow Highlight [Page 39](zotero://open-pdf/library/items/58JPUIX8?page=39&annotation=GTP9L3K6) 
 
>[!cite]  o selecionar a linha de títulos e chamar next_siblings, podemos selecionar todas as linhas da tabela, sem selecionar a própria linha de títulos.” Yellow Highlight [Page 39](zotero://open-pdf/library/items/58JPUIX8?page=39&annotation=KDAPMWAG) 
 
>[!cite]  Deixe as seleções mais específicas O código anterior funcionará igualmente de forma apropriada se você selecionar bs.table.tr ou até mesmo somente bs.tr para selecionar a primeira linha da tabela. Entretanto, no código, eu me dei ao trabalho de escrever tudo em um formato mais longo: bs.find('table',{'id':'giftList'}).tr Mesmo que pareça haver somente uma tabela (ou outra tag desejada) na página, é fácil cometer erros. Além do mais, os layouts das páginas mudam o tempo todo. O que poderia ter sido a primeira tag da página um dia pode vir a ser a segunda ou a terceira tag desse tipo encontrada na página. Para deixar seus scrapers mais robustos, é melhor ser o mais específico possível nas seleções de tags. Tire proveito dos atributos de tags se estiverem disponíveis.” Green Highlight [Page 39](zotero://open-pdf/library/items/58JPUIX8?page=39&annotation=L8LBD2K7) 
 
>[!cite]  Além disso, é claro, temos as funções next_sibling e previous_sibling, que têm quase a mesma função de next_siblings e previous_siblings, mas devolvem uma única tag, em vez de devolver uma lista delas.” Yellow Highlight [Page 40](zotero://open-pdf/library/items/58JPUIX8?page=40&annotation=4ITBUEE8) 
 
Note que uma é no singular e outra no plural... 
 
 
 
#### Lidando com pais 
 
>[!cite]  Em geral, ao analisar páginas HTML com o objetivo de rastreá-las, começamos observando as tags de nível mais alto e, em seguida, descobrimos como descer para outros níveis até alcançar a porção exata de dados que queremos.” Yellow Highlight [Page 40](zotero://open-pdf/library/items/58JPUIX8?page=40&annotation=HUMEFD9L) 
 
>[!cite]  ções do BeautifulSoup para encontrar os pais: .parent e .parents.” Yellow Highlight [Page 40](zotero://open-pdf/library/items/58JPUIX8?page=40&annotation=V8XH883T) 
 
>[!cite]  O diagrama a seguir representa a estrutura de árvore da parte da página HTML com a qual estamos trabalhando, com os passos numerados:” Green Highlight [Page 40](zotero://open-pdf/library/items/58JPUIX8?page=40&annotation=MHCTETK6) 
 
 
 
## Expressões Regulares 
 
>[!cite]  As expressões regulares recebem esse nome porque são usadas para identificar strings regulares;” Yellow Highlight [Page 41](zotero://open-pdf/library/items/58JPUIX8?page=41&annotation=VUP23HQR) 
 
>[!cite]  É qualquer string que seja gerada por uma série de regras lineares 3” Yellow Highlight [Page 41](zotero://open-pdf/library/items/58JPUIX8?page=41&annotation=AKMXEMGH) 
 
>[!cite]  o entanto, esses 12 símbolos são as expressões regulares mais comuns usadas em Python e podem ser utilizadas para encontrar e coletar praticamente qualquer tipo de string.” Green Highlight [Page 43](zotero://open-pdf/library/items/58JPUIX8?page=43&annotation=IQT5GKH6) 
 
![[image-43-x53-y55.png]] 
 
![[image-44-x57-y575.png]] 
 
![[image-44-x62-y57.png]] 
 
Uma forma interessante de pensar em regex é criar uma tabela como essa acima. De um lado define-se as regras e do outro desenhamos a expressão. Depois será necessário apenas concatenar as partes. 
 
 
 
### Expressões Regulares com BeutifulSoup 
 
>[!cite]  Com efeito, a maioria das funções que aceita um argumento do tipo string (por exemplo, find(id="umaTagIdAqui")) também aceitará uma expressão regular.” Yellow Highlight [Page 45](zotero://open-pdf/library/items/58JPUIX8?page=45&annotation=EDBZ45W9) 
 
>[!cite]  ém das evidentes imagens “extras” (por exemplo, logos), os sites modernos muitas vezes têm imagens ocultas, imagens em branco usadas para espaçamento e alinhamento de elementos, além de outras tags de imagens aleatórias que talvez não sejam de seu conhecimento. Ce” Yellow Highlight [Page 45](zotero://open-pdf/library/items/58JPUIX8?page=45&annotation=YH3247AN) 
 
>[!cite]  não queremos depender da posição da imagem na página para encontrar a tag correta. Iss” Yellow Highlight [Page 46](zotero://open-pdf/library/items/58JPUIX8?page=46&annotation=DYID5D9K) 
 
>[!cite]  A solução é procurar algo que sirva como identificador da própria tag. Nesse caso, podemos analisar o path de arquivo das imagens dos produtos:” Yellow Highlight [Page 46](zotero://open-pdf/library/items/58JPUIX8?page=46&annotation=U3AJKEES) 
 
>[!cite]  Uma expressão regular pode ser inserida como qualquer argumento em uma expressão do BeautifulSoup,” Yellow Highlight [Page 46](zotero://open-pdf/library/items/58JPUIX8?page=46&annotation=46X7RXBU) 
 
 
 
## Acessando Atributos 
 
>[!cite]  rá particularmente útil com tags como a, em que o URL para o qual elas apontam está contido no atributo href, ou para a tag img, em que a imagem desejada está no atributo src.” Yellow Highlight [Page 46](zotero://open-pdf/library/items/58JPUIX8?page=46&annotation=TIMVZ9H8) 
 
>[!cite]  Tenha em mente que esse código devolve literalmente um objeto de dicionário Python, fazendo com que seja trivial acessar e manipular esses atributos. O local em que está a fonte de uma imagem, por exemplo, pode ser encontrado com a linha a seguir: myImgTag.attrs['src']” Yellow Highlight [Page 47](zotero://open-pdf/library/items/58JPUIX8?page=47&annotation=KDTE54VI) 
 
(nesse treho, não há exemplos de código, mas você pode criar um...) 
 
 
 
## Expressões Lambda 
 
>[!cite]  Essencialmente, uma expressão lambda é uma função que é passada para outra função como uma variável; em vez de definir uma função como f(x, y), é possível defini-la como f(g(x), y) ou até mesmo como f(g(x), h(x)).” Yellow Highlight [Page 47](zotero://open-pdf/library/items/58JPUIX8?page=47&annotation=I3RCPF8E) 
 
>[!tip] Conteúdo sobre funções lambda ou anonimas em python pode ser encontrada na seção Anonymous functions - Learn Python 3 - página 146) 
 
>[!cite]  A única restrição é que essas funções devem aceitar um objeto tag como argumento e devolver um booleano. Todo objeto tag encontrado pelo BeautifulSoup é avaliado por essa função, e as tags avaliadas como True são devolvidas, enquanto as demais são descartadas.” Yellow Highlight [Page 47](zotero://open-pdf/library/items/58JPUIX8?page=47&annotation=JJQDJ6X5) 
 
>[!cite]  bs.find_all(lambda tag: len(tag.attrs) == 2) Nesse caso, a função passada como argumento é len(tag.attrs) == 2 . Quando ela for True, a função find_all devolverá a tag. Isso significa que ela encontrará as tags com dois atributos, por exemplo: <div class="body" id="content"></div> <span style="color:red" class="title"></span>” Yellow Highlight [Page 47](zotero://open-pdf/library/items/58JPUIX8?page=47&annotation=894WPWMB) 
 
>[!cite]  As funções lambda são tão úteis que você pode usá-las até mesmo para substituir funções do BeautifulSoup: bs.find_all(lambda tag: tag.get_text() == 'Or maybe he\'s only resting?') Isso pode ser feito sem uma função lambda: bs.find_all('', text='Or maybe he\'s only resting?')” Green Highlight [Page 47](zotero://open-pdf/library/items/58JPUIX8?page=47&annotation=QRX5ZDDT) 
 
>[!cite]  Todavia, se você se lembrar da sintaxe da função lambda e de como acessar propriedades de tags, talvez não seja necessário se lembrar de mais nenhuma outra sintaxe do BeautifulSoup novamente!” Yellow Highlight [Page 48](zotero://open-pdf/library/items/58JPUIX8?page=48&annotation=RYKCMQYP) 
 
>[!cite]  Como a função lambda fornecida pode ser qualquer função que devolva um valor True ou False, podemos até mesmo combiná-la com expressões regulares para encontrar tags com um atributo que corresponda a determinado padrão de string.” Green Highlight [Page 48](zotero://open-pdf/library/items/58JPUIX8?page=48&annotation=5TJMU3JZ) 
 
 
 
## Escrevendo web crawlers 
 
>[!cite]  Os web crawlers (rastreadores web) recebem esse nome porque rastreiam (crawl) a web. Em seu núcleo, encontra-se um elemento de recursão. E” Yellow Highlight [Page 49](zotero://open-pdf/library/items/58JPUIX8?page=49&annotation=JFDTKGWJ) 
 
>[!cite]  Six Degrees of Wikipedia. Você poderá começar na página de Eric Idle (https://en.wikipedia.org/wiki/Eric_Idle) e encontrar o menor número de cliques em links que levarão até a página de Kevin Bacon (https://en.wikipedia.org/wiki/Kevin_Bacon).” Green Highlight [Page 50](zotero://open-pdf/library/items/58JPUIX8?page=50&annotation=UZH928AX) 
 
>[!tip] Uma explicação sobre [Os Seis Graus de Separação](https://pt.wikipedia.org/wiki/Teoria_dos_seis_graus_de_separa%C3%A7%C3%A3o) 
 
>[!cite]  e analisarmos os links que apontam para páginas de artigos (em oposição a outras páginas internas), veremos que todos eles têm três características em comum:” Green Highlight [Page 51](zotero://open-pdf/library/items/58JPUIX8?page=51&annotation=RXLCXMXY) 
 
>[!tip] Perceba que se trata da importância de conhecer a estrutura do (ou dos sites) que se deseja minerar e encontrar padrões que ajudem a desvendar a melhor forma de trabalhar. 
 
>[!cite]  Essas regras podem ser usadas para uma pequena revisão no código a fim de obter somente os links desejados para artigos, usando a expressão regular ^(/wiki/)((?!:).)*$")” Green Highlight [Page 51](zotero://open-pdf/library/items/58JPUIX8?page=51&annotation=Q4I2PXJL) 
 
>[!tip] Neste exemplo, o padrão encontrado nos links contribuíram para que fosse possível o uso de expressão regular. 
 
>[!cite]  • Uma única função, getLinks, que receba um URL de um artigo da Wikipédia no formato /wiki/<Nome_do_Artigo> e devolva uma lista com os URLs de todos os artigos associados, no mesmo formato. • Uma função principal que chame getLinks com um artigo inicial, escolha um link de artigo aleatório na lista devolvida e chame getLinks novamente, até que você interrompa o programa ou nenhum link de artigo seja encontrado na nova página.” Green Highlight [Page 51](zotero://open-pdf/library/items/58JPUIX8?page=51&annotation=TUL78BL3) 
 
>[!tip] Tornar o projeto mais útil dando uma funcionalidade realmente que agregue valor. 
 
![[image-52-x57-y449.png]] 
 
>[!warning] A continuação desse código está no capitulo 6. Inseri um link dessa página para a página que continua este exemplo no documento. 
 
>[!cite]  Para os curiosos, o gerador de números pseudoaleatórios de Python usa o algoritmo Mersenne Twister. Embora gere números aleatórios difíceis de prever e uniformemente distribuídos, ele exige um pouco do processador. Números aleatórios bons assim não são baratos” Yellow Highlight [Page 52](zotero://open-pdf/library/items/58JPUIX8?page=52&annotation=GXQJJYKG) 
 
 
 
## Rastreando um site completo 
 
>[!cite]  r um site completo, particularmente um site grande, é um processo que exige bastante memória, e é mais apropriado para aplicações em que um banco de dados para armazenar o” Yellow Highlight [Page 53](zotero://open-pdf/library/items/58JPUIX8?page=53&annotation=L8CYUWPB) 
 
>[!cite]  A dark web, também conhecida como darknet, é uma criatura totalmente diferente 3. Ela executa na infraestrutura de hardware da rede existente, porém utiliza o Tor, ou outro cliente, com um protocolo de aplicação sobre o HTTP, oferecendo um canal seguro para troca de informações. Embora seja possível coletar dados da dark web, como faríamos com qualquer outro site, fazer isso está além do escopo deste livro. De modo diferente da dark web, é relativamente fácil coletar dados da deep web. Muitas ferramentas neste livro ensinarão você a rastrear e a coletar informações de vários lugares que os bots do Google não conseguem alcançar.” Red Highlight [Page 54](zotero://open-pdf/library/items/58JPUIX8?page=54&annotation=995LCIPA) 
 
>[!warn] Acima um tópico interessante para se aprofundar 
 
>[!cite]  Gerar um mapa do site” Yellow Highlight [Page 54](zotero://open-pdf/library/items/58JPUIX8?page=54&annotation=WZBHZ66U) 
 
>[!tip] Como parte do trabalho é entender a estrutura do site que quer raspar, gerar um mapa do site pode ser um recurso interessante para auxiliar nessa tarefa. 
 
>[!cite]  Pude usar um crawler para percorrer o site todo, coletar todos os links internos e organizar as páginas na estrutura de pastas usada no site. Isso me permitiu encontrar rapidamente seções do site que eu nem mesmo sabia que existiam e contar exatamente quantos designs de páginas seriam necessários e o volume de conteúdo que teria de ser migrado.” Green Highlight [Page 54](zotero://open-pdf/library/items/58JPUIX8?page=54&annotation=MEP6MPGL) 
 
>[!cite]  Coletar dados” Yellow Highlight [Page 54](zotero://open-pdf/library/items/58JPUIX8?page=54&annotation=RQF6UIZN) 
 
>[!tip] Aqui, provavelmente a função mais importante (ou mais relevante) dos scrappers.
Note que no exemplo ele utiliza a coleta de artigos para a criação de uma plataforma específica de pesquisa especializada. 
 
>[!cite]  A abordagem geral para um rastreamento completo de sites consiste em começar com uma página de nível mais alto (por exemplo, a página inicial) e procurar uma lista de todos os links internos nessa página.” Yellow Highlight [Page 54](zotero://open-pdf/library/items/58JPUIX8?page=54&annotation=N63VZ3H7) 
 
>[!cite]  Um conjunto é semelhante a uma lista, mas os elementos não têm uma ordem específica, e somente elementos únicos são armazenados, o que é ideal para as nossas necessidades” Cyan Highlight [Page 55](zotero://open-pdf/library/items/58JPUIX8?page=55&annotation=LSKG7Y4T) 
 
>[!tip] Para aprofundar o conhecimento sobre essa estrutura de dados, o livro Leaning Python 3 aborda a questão no Capítulo 2, a partir da página 59. 
 
 
 
>[!tip] O código aborda tanto a estrutura de dados de conjuntos quanto o conceito de recursão. Sobre conjuntos, o livro Leaning Python 3 aborda a questão no Capítulo 2, a partir da página 59. Sobre recursão, o livro Python Algorithms Mastering Basic Algorithms in the Python Language, aborda o tema no Capítulo 3 a partir da página 53. 
 
>[!cite]  Python tem um limite default para recursão (o número de vezes que um programa pode chamar a si mesmo recursivamente) igual a 1.000. Como a rede de links da Wikipédia é extremamente grande, em algum momento esse programa atingirá esse limite de recursão e será interrompido, a menos que você coloque um contador de recursão ou algo para impedir que isso aconteça.” Green Highlight [Page 56](zotero://open-pdf/library/items/58JPUIX8?page=56&annotation=ZXC67UII) 
 
[!warning] Informação importante! 
 
>[!cite]  Ao modificar nosso código básico de rastreamento, podemos criar um programa que combine rastreamento/coleta de dados (ou, pelo menos, exibição de dados):” Yellow Highlight [Page 57](zotero://open-pdf/library/items/58JPUIX8?page=57&annotation=J5PCS73K) 
 
>[!tip] Implementação do código que não só rastreia, mas coleta os dados. 
 
>[!cite]  Obviamente, há alguns riscos envolvidos ao englobar várias linhas em um handler de exceção. Não é possível dizer qual das linhas lançou a exceção, para começar. Além do mais, se, por algum motivo, uma página contiver um botão Edit, mas não tiver um título, o botão não será registrado. No entanto, é suficiente para muitos casos em que haja uma ordem provável de itens presentes no site, e perder alguns pontos de dados inadvertidamente ou deixar de manter logs detalhados não seja um problema.” Yellow Highlight [Page 58](zotero://open-pdf/library/items/58JPUIX8?page=58&annotation=AVKP8A64) 
 
>[!tip] Se a ideia de englobar várias linha em um handler de exceção não é boa, é melhor criar funções separadas que apenas cuidam das exceções. Isso, inclusive é uma boa prática de codificação. Contudo, essas exceções devem ser mapeadas. Portanto, é possível codificar como no exemplo e, posteriormente, refatorar. 
 
>[!cite]  Com redirecionamentos do lado do servidor, em geral não é preciso se preocupar. Se você estiver usando a biblioteca urllib com Python 3.x, ela tratará os redirecionamentos automaticamente! Se a biblioteca requests estiver sendo usada, não se esqueça de definir a flag para permitir redirecionamentos com True: r = requests.get('http://github.com', allow_redirects=True)” Yellow Highlight [Page 58](zotero://open-pdf/library/items/58JPUIX8?page=58&annotation=RMPRVPMH) 
 
 
 
## Rastreando pela internet 
 
>[!cite]  Para fazer qualquer análise de dados envolvendo vários domínios, precisamos construir crawlers capazes de interpretar e de armazenar dados de uma série de páginas da internet” Yellow Highlight [Page 59](zotero://open-pdf/library/items/58JPUIX8?page=59&annotation=86Y7JHXD) 
 
 
 
>[!tip] Mais uma vez fazer as perguntas certas na hora do planejamento do projeto. 
 
 
 
Um exemplo de como construir um script genérico. 
 
>[!cite]  Figura 3.2 – Fluxograma do web crawler que coleta todos os links externos” Green Highlight [Page 63](zotero://open-pdf/library/items/58JPUIX8?page=63&annotation=4P82G22E) 
 
>[!tip] Construir um fluxograma do projeto é uma boa maneira de visualizar o projeto em alto nível. 
 
---




%% Import Date: 2023-06-07T22:47:52.056-03:00 %%
