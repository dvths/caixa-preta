---
classe: [JDCL1]
topico: Usando SIDRA para conhecer seu município
nome-do-curso: 
alias: Dados de todos os municípios e cruzamento de tabelas
instrutor: Pedro Renaux
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#JDCL  
____
# Dados de todos os municípios e cruzamento de tabelas

## Exercício 1: Obtendo informações sobre Produto interno bruto municipal

O primeiro exercício proposto nesta aula foi a busca por informações no SIDRA a partir da seguinte pergunta:

>[!question] Quantos municípios têm a administração pública representando mais da metade da sua atividade econômica?

- A dependência econômica excessiva da administração pública acarreta uma série de problemas como:

	- **Instabilidade financeira**: A dependência excessiva do setor público para o PIB de um município pode torná-lo altamente vulnerável a mudanças nas políticas governamentais, cortes de gastos públicos ou crises econômicas. Qualquer redução nos investimentos do governo pode ter um impacto significativo na economia local, levando a instabilidade financeira e dificuldades para a população e as empresas locais.
    
	- **Falta de diversificação econômica**: A dependência da administração pública pode impedir o desenvolvimento de outros setores econômicos no município. A ausência de uma base econômica diversificada torna a região mais suscetível a choques externos e limita as oportunidades de emprego e crescimento para os moradores locais.
    
	- **Baixa capacidade de inovação**: Quando a administração pública é a principal fonte de renda de um município, pode haver uma falta de incentivos para a inovação e o empreendedorismo. Sem a necessidade de competir no mercado aberto, a criatividade e a busca por soluções inovadoras podem ser negligenciadas, o que prejudica o desenvolvimento econômico a longo prazo.
    
	- **Dependência política**: A dependência da administração pública para o PIB pode levar a uma maior influência política na economia local. Isso pode resultar em um ambiente propenso a práticas corruptas, falta de transparência e clientelismo, onde os interesses políticos se sobrepõem aos interesses da comunidade.
    
	- **Falta de investimentos privados**: A dependência excessiva do setor público pode desencorajar investimentos privados no município. As empresas podem considerar a região como arriscada ou pouco atrativa devido à falta de diversificação econômica, instabilidade financeira e dependência política. Isso pode limitar o crescimento econômico e a criação de empregos no local.

- Para termos uma visualização do grau de dependência econômica dos municípios, o IBGE fornece a pesquisa "Produto Interno Brutos dos Municípios". O caminho até chegar a pesquisa está descrito [neste passo a passo](https://scribehow.com/shared/JDCL1__Usando_SIDRA_para_conhecer_seu_municipio__Busca_por_PIB_municipal__dK5CCes4T06dWRQgfDyBNw)

- A pesquisa "Produto interno Bruto dos Municípios" é divulgada todos os anos sempre com dois anos de defasagem em relação a divulgação do PIB Nacional e reúne informações sobre agropecuária, indústria, serviços, impostos, PIB e PIB per capita, por município.

- Para importar os dados ao Google Sheets veja: [[17062023225459-como-importar-arquivos-csv-para-o-google-sheets|Como importar arquivos CSV para o Google Sheets]]  

>[!todo] Respondendo o primeiro questionamento:
> Segundo dados levantados pelo IBGE em 2020, há 1.076 municípios cuja dependência econômica da administração pública é igual ou maior a 50% do PIB. Os estados com a maior quantidade de municípios nesta condição são Piauí, com 164 municípios, logo em seguida vem Paraíba, com 163, Minas Gerais com 108 e Maranhão com 105. Contudo, os municípios com maior dependência estão concentrados na região Norte, onde Uiramutã, em Roraima, é o município com maior dependência entre todos os municípios do país, com 85,17%, seguido por Vitória do Jari e Serra do Navio, no Amapá, com 76,71% e 76,69% respectivamente. Estes municípios são seguidos por Jordão, no Acre, e Rio da Conceição, no Tocantins, também com mais de 76% do PIP proveniente do poder público. 

## Exercício 2: Comparação de criação de bovinos por habitante a nível municipal

- O segundo exercício proposto combina duas tabelas: "Estimativas da População" e a "Pesquisa Pecuária Municipal".
	- [Passo a passo para obter a tabela de Estimativas da População](https://scribehow.com/shared/JDCL1__Como_obter_a_tabela_de_Estimativas_da_Populacao__nSrIdKyAQjOkfSGMiVXMew).
	- [Passo a passo para obter a tabela da Pesquisa Pecuária Municipal](https://scribehow.com/shared/JDCL1__Como_obter_a_tabela_da_Pesquisa_Agropecuaria_Municipal_para_informacoes_sobre_a_criacao_de_bovinos_por_municipio__pAiKqd_UTAyqXvFCkq66GQ).

- O intuito é respondermos o seguinte questionamento:

>[!question] Quais os municípios com a maior quantidade de bovinos por habitante?

- Ao saber dessa informação podemos ter um ponto de partida para uma investigação mais aprofundada sobre a economia desses municípios, além de podermos levantar questões relacionadas a sustentabilidade, já que a criação de bovinos em grande escala pode ter impactos significativos ao meio ambiente incluindo desmatamento, emissão de gases de efeito estufa, consumo de grandes volumes de água potável e poluição de água e solo, por exemplo.  

- Após importarmos os dados para o Google Sheets, relacionamos as duas tabelas utilizando a função `VLOOKUP` para relacionar os municípios e dividimos o total de bovinos pelo total de habitantes de cada município para obtermos a proporção de cabeças de gado por habitante. 

>[!todo] Respondendo o questionamento:
>A análise revela que o município com a maior quantidade de bovinos por habitante é Alto Paraíso, no Paraná, com uma taxa de 134 bovinos por habitante. Contudo, o Mato Grosso do Sul possui a maior quantidade de municípios com as maiores taxas de bovinos por habitante: Rio Branco com 103, Araguaiana com 98 e Cocalinho com 92.  






