---
classe:
  - GDAC6
topico:
  - Visualização de dados
nome-do-curso: Google Data Analytics Certification
aliases:
  - Correlação é a medida do grau em que duas variáveis mudam em relação uma à outra
instrutor: 
tags:
  - GDCA
  - estatística
  - estatística_correlação
  - visualização_de_dados
link: https://www.coursera.org/programs/trybe-google-learning-program-hrevt/professional-certificates/google-data-analytics?collectionId=twDTY
tipo-curso:
  - online
local:
  - Coursera
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%
____

# Correlação é a medida do grau em que duas variáveis mudam em relação uma à outra

"À medida que a temperatura sobe, as vendas de sorvetes aumentam". Essa afirmação pode dar entender que há uma causalidade entre as variáveis **temperatura** e **vendas de sorvetes**. Mas não há. Uma análise mais aprofundada dos dados revelaria que cada mudança de temperatura não leva a uma mudança na compra de sorvetes. Ou seja, o que existe é uma relação entre elas, contudo, pode ter acontecido um pico de vendas por um determinado fator que pode não ter sido considerado na análise.  

Uma correlação pode ser um guia para a causa real da mudança de uma variável em relação à outra, contudo, invariavelmente, será necessário:
1. A analisar criticamente quaisquer correlações que encontrar
2. Examinar o contexto dos dados para determinar se uma causa faz sentido (e pode ser suportada por todos os dados)
3. Entender as limitações das ferramentas que você usa para análise

>[!tip] Na aula sobre Dados da CEAP ([CEAP é a verba mensal para reembolso de gastos vinculados à atividade parlamentar](13072023102625-ceap-é-a-verba-mensal-para-reembolso-de-gastos-vinculados-à-atividade-parlamentar.md)), do curso Python Para Inovação Cívica, temos outro exemplo da importância de sabermos diferenciar causa e correlação. Sem o completo entendimento do contexto dos dados, poderíamos concluir erroneamente que um eventual gasto superior ao limite da cota estabelecida por estado, configuraria um comportamento suspeito. Contudo, há contexto para esses dados, por exemplo: o saldo da CEAP é acumulativo, portanto, é possível que um deputado tenha saldo residual de meses anteriores que foram utilizados em um determinado mês. Ou seja, isso poderia ultrapassar o limite da cota, mas não configurar uma violação das diretrizes para gastos parlamentares.


A Causalidade é a ideia de que um evento leva a um resultado específico.

## Leitura adicional indicada na aula

[Correlação não é Causalidade](https://towardsdatascience.com/correlation-is-not-causation-ae05d03c1f53)


