---
aliases:
  - Diagramas de Entidade-Relacionamento (DER)
tags:
  - sql
  - modelagem_de_databases
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Diagramas de Entidade-Relacionamento (DER)

Conceito de Diagrama Entidade-Relacionamento

é uma ferramenta gráfica utilizada na modelagem de dados para representar as relações entre diferentes entidades em um sistema. O DER é especialmente associado ao modelo Entidade-Relacionamento (ER), uma abordagem conceitual para representar a estrutura de dados de um sistema.

Principais componentes de um Diagrama ER:

1. **[[23112023181230-entidades|Entidades]]:** Representam objetos do mundo real sobre os quais deseja-se armazenar informações. Cada entidade é geralmente representada por um retângulo no diagrama.
    
2. **[[23112023181702-atributos|Atributos]]:** São características ou propriedades das entidades. Eles são representados dentro das entidades e estão relacionados aos dados que desejamos armazenar para cada instância da entidade.
    
3. **[[23112023182611-relacionamentos|Relacionamentos]]:** Indicam como as entidades estão conectadas entre si. Os relacionamentos são representados por linhas que ligam entidades, e podem ter rótulos que descrevem a natureza da relação.
    
4. **[[23112023171427-chave-primária|Chaves Primárias]] e [[23112023170931-chave-estrangeira|Chaves Estrangeiras]]Estrangeiras:** A chave primária é o atributo (ou conjunto de atributos) que identifica de forma única cada instância de uma entidade. A chave estrangeira é um atributo em uma entidade que estabelece uma ligação com a chave primária de outra entidade, criando assim uma relação entre elas.
    
5. **[[23112023182611-relacionamentos#^18b2e4|Cardinalidades]]:** Indica quantas instâncias de uma entidade podem estar associadas a uma instância de outra entidade. Por exemplo, em um relacionamento "Um para Muitos", uma instância de uma entidade pode estar associada a várias instâncias da outra entidade, mas não vice-versa.
     ^693742

O Diagrama ER fornece uma visão visual e intuitiva da estrutura de dados do sistema, ajudando os designers a compreender e comunicar as complexas relações entre as diferentes partes do sistema que estão sendo modeladas.

## Exemplo de modelagem Conceitual

Com base na [[23112023175625-definição-de-modelagem-conceitual|Definição de Modelagem Conceitual]], vamos modelar um banco de dados de um sistema de gestão de pedidos conforme o seguinte escopo:

>[!abstract] Escopo do projeto enviado pelo cliente
>
> Eu cadastro os pedidos informando o nome do cliente, os itens dos pedidos, e os produtos desses itens.
> Depois que tenho os pedidos cadastrados, eu realizo as buscas desses pedidos por cliente, por produto e por dada.
> Eu também gostaria de saber quais são os pedidos que mais vendem durante um determinado período de tempo.

----
**Determinação do domínio**
- Gestão de pedidos

**Análise do escopo**
- [[23112023175625-definição-de-modelagem-conceitual#^025868|Possíveis tabelas analisando os substantivos utilizados pelo cliente]]:
	- "Eu" -> Usuário do Sistema
	- Pedidos 
	- Cliente
	- Itens do Pedido
	- Produtos
 
>[!note] Perceba que esse escopo não possui [[23112023175625-definição-de-modelagem-conceitual#^570ebe|adjetivos que podem descrever os atributos dessas possíveis entidades]]. Em casos como esses, devemos solicitar ao cliente mais informações.
 
Feito isso, o cliente nos retorna
>[!abstract] Retorno do Cliente 
> Eu acesso o sistema por meio de autenticação, usando meu e-mail e senha. Uma vez autenticado, cadastro os pedidos informando o nome do cliente, sexo, a data do pedido, o código, os itens dos pedidos, e os produtos desses itens.
> Posso fazer essa importação cliente por cliente ou port um lote dos pedidos dos clientes.
> 
> Sobre o cliente eu devo informar, além do nome completo, a data de nascimento, o CPF, endereço completo, telefone e email. 
> 
> Para cada item do pedido, eu informo a descrição do item, o valor unitário, o valor total (quantidade de itens por valor unitário menos o desconto), o percentual de desconto e o produto.
> 
> Por fim, para o produto eu informo o código do produto, seu nome, sua categoria e sua descrição.
>  
> Depois que tenho os pedidos cadastrados, eu realizo as buscas desses pedidos por cliente, por produto e por dada.
> Eu também gostaria de saber quais são os pedidos que mais vendem durante um determinado período de tempo.

Esse novo retorno do cliente nos permite definir algumas características (adjetivos ou [[23112023181702-atributos|atributos]]) das nossas [[23112023181230-entidades|entidades]] iniciais:

- Funcionário
	- Registro do funcionário
	- Nome completo
	- Email
- Conta do Ecommerce
	- Email do funcionário
	- Password
- Pedidos 
	- Código do Produto
	- Nome 
- Cliente
	- CPF
	- Nome
	- Sobrenome
	- Gênero
	- Data de nascimento
	- Idade
	- Endereço completo
	- Telefone
	- Email
- Itens do Pedido
	- Descrição do item
	- Valor unitário
	- Percentual de desconto
	- Valor total (deduzindo o desconto)
	- Produtos
- Produtos
	- Código do produto
	- Nome
	- Descrição
	- Categoria
 
 
---- 

## Definição do MER (Modelo Entidade Relacionamento)

Com base nas entidades identificadas e em suas características, passamos a analisar os verbos usados pelo cliente para poder identificar a naturezas das relações entres as entidades. 

Utilizando a [[23112023195019-simbologia-para-modelagem-conceitual-de-bancos-de-dados|Simbologia para Modelagem conceitual de Bancos de Dados]], chegamos ao seguinte resultado:
![[exemplo_diagrama_DER.png]]

## Principais pontos de destaque do modelo

- Cliente: 
A entidade Cliente, possui os [[23112023183654-atributos-compostos|Atributos Compostos]] "nome completo" e "endereço". Também possui o [[23112023194319-atributos-multivalorados|Atributo Multivalorado]] "telefones" e o [[23112023184014-atributos-calculados|Atributo Calculado]] "idade".

- Cliente e pedido:
A relação entre "cliente" e "pedido" é uma relação de [[23112023201212-participação-total|Participação Total]], denotada pela ligação dupla. Isso significa que a entidade pedido existe em função da entidade cliente. Logo a data de realização é uma característica dessa relação, ou seja, [[23112023194614-atributos-de-relacionamento|Atributo de Relacionamento]].  

Semelhantemente, a entidade "cancelamento pedido" possui uma relação obrigatória com o pedido. No entanto ser uma entidade faz sentido, pois o cancelamento do pedido não está diretamente ligada a [[23112023171427-chave-primária|Chave Primária]]da entidade "pedido". Portanto, conforme as [[23112023173238-regras-da-segunda-forma-normal|Regras da Segunda Forma Normal]], optei por gerar uma [[23112023202014-entidade-fraca|Entidade Fraca]]

- Item de Pedido
Item de pedido é outra entidade fraca. Um item de pedido é dependente de "pedido". Um item de pedido reúne os produtos de um "cliente", por isso também possui um atributo calculado que representa o valor total do pedido.


---
## Referencias