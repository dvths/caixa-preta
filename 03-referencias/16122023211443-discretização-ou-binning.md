---
titulo_livro: SQL para Análise de Dados
ano: 2022
autor:
  - Cathy Tanimura
aliases:
  - Discretização ou Binning
topico:
  - "Criação de perfis: Distribuições"
capitulo: 2 - Preparando os dados para análise
tags:
  - sql
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

---
# Discretização ou Binning

## Útil com [[17052023211923-a-taxonomia-de-tipos-de-dados-importa-para-estruturação-manipulação-e-processamento-correto-dos-dados#^0a5c74|dados contínuos]]
- Intervalos de valores são agrupados em Bins que podem ter:
	- Tamanho variável ou Fixo se:
		- possuem um significado específico
		- possuem largura aproximadamente igual
		- possuem números de registros semelhantes

Quando agrupamos valores em bins, estamos categorizando dados contínuos. Um exemplo é a faixa etária: podemos categorizar a idade de um grupo de pessoas entre 5-10, 15-20, 25-30, etc, de acordo com o significado que essa categorização tem para o negócio de um empresa ou para uma pesquisa de um estudo. 

A largura de um bin refere-se à amplitude do intervalo dos agrupamentos, isto é, imagine um estudo em que eu posso ter uma quantidade muito maior de pessoas entre 15-20 do que 25-30 e uma porção inesperada de crianças entre 5-10. Dependendo do que estou observando, isso pode significar algo. Chamamos isso de largura variável e significa que os intervalos variam entre entre um bin e outro. Outro exemplo são as empresas B2B, que classificam seus clientes por pequenos e médios de acordo com seus faturamentos ou quantidades de funcionários. Algo comum, pois os padrões de compra são diferentes. Suponha que estamos considerando oferecer algum tipo de desconto na entrega e precisamos saber quantos clientes serão afetados. Decidimos usar uma variável da base chamada `order_amount`, vamos classificar os clientes como pequenos e médios pela quantidade de pedidos registrados. 

Em SQL, uma forma de lidar com bins de largura variável seria através da instrução `CASE` da seguinte forma:   

```sql
SELECT
 case when order_amount <= 100 then 'up to 100'
	  when order_amount <= 500 then '100 - 500'
	  else '500+' end as amount_bin
,case when order_amount <= 100 then 'small'
	  when order_amount <= 500 then 'medium' 
	  else 'large' end as amount_category
,count(customer_id) as customers
FROM orders
GROUP BY 1,2
;
```

Esta consulta irá contar a frequência com que clientes, nas condições declaradas, ocorrem na base e projetar o resultado agrupado pelos bins.

Bins de largura variável são úteis em diversas ocasiões, mas os bins de largura fixa são mais apropriados para análise. Embora haja uma redução da precisão dos valores, bins de largura fixa podem facilitar a visualização dos dados e a sua comunicação para um público leigo. Também simplifica cálculos estatísticos, permite uma comparação direta e é menos sensível a outliers. Claro que a escolha do tipo de bin deve ser orientada ao tipo de estudo que você está realizando. Geralmente pensamos em usá-lo para reduzir o número de casas decimais ou removê-los, ou seja, o arredondamento é útil.    

Além da instrução `CASE`, bins podem ser criados utilizando:
- Arredondamentos
- Logaritmos

Estes, no geral são mais úteis para análise
- [ ] Concluir a escrita do resumo sobre Discretização
----
## Referências 