---
classe: [PYIC3]
topico: Entendendo os dados da CEAP
nome-do-curso: Python para Inovação Cívica
alias: CEAP é a verba mensal para reembolso de gastos vinculados à atividade parlamentar
instrutor: Fernanda Souza
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#PYIC
____

# CEAP é a verba mensal para reembolso de gastos vinculados à atividade parlamentar

[A Cota para o Exercício da Atividade Parlamentar – CEAP (antiga verba indenizatória) é uma cota única mensal destinada a custear os gastos dos deputados exclusivamente vinculados ao exercício da atividade parlamentar.](https://www2.camara.leg.br/transparencia/acesso-a-informacao/copy_of_perguntas-frequentes/cota-para-o-exercicio-da-atividade-parlamentar)

O valor máximo mensal da cota depende da unidade da federação que o deputado representa. Essa variação ocorre por causa das passagens aéreas e está relacionada ao valor do trecho entre Brasília e o Estado que o deputado representa.

Para contextualizar os dados, a seguinte tabela apresenta apresenta os limites mensais que cada deputado tem para solicitação do reembolso por estado:

| UNIDADE DA FEDERAÇÃO | VALOR DA COTA |
| -------------------- | ------------- |
| AC                   | 33.516,34     |
| AL                   | 30.723,33     |
| AM                   | 32.711,89     |
| AP                   | 32.563,97     |
| BA                   | 29.259,38     |
| CE                   | 31.865,01     |
| DF                   | 23.033,13     |
| ES                   | 28.057,67     |
| GO                   | 26.606,13     |
| MA                   | 31.637,78     |
| MG                   | 27.049,62     |
| MS                   | 30.419,48     |
| MT                   | 29.575,29     |
| PA                   | 31.695,15     |
| PB                   | 31.547,57     |
| PE                   | 31.278,18     |
| PI                   | 30.744,29     |
| PR                   | 29.154,13     |
| RJ                   | 26.797,65     |
| RN                   | 32.077,21     |
| RO                   | 32.789,41     |
| RR                   | 34.258,50     |
| RS                   | 30.671,69     |
| SC                   | 29.915,86     |
| SE                   | 30.113,87     |
| SP                   | 27.769,62     |
| TO                   | 29.632,50     |

Entender este contexto dos dados é fundamental para a distinção entre causa e correlação durante a análise dos gastos dos parlamentares.  

Os valores acima foram retirados do [ATO DA MESA Nº 43/09](https://www2.camara.leg.br/legin/int/atomes/2009/atodamesa-43-21-maio-2009-588364-publicacaooriginal-112820-cd-mesa.html), documento que específica quais são os gastos considerados da atividade parlamentar e as regras para a solicitação do reembolso.

Entre os gastos considerados da atividade parlamentar estão:

- Despesas com passagens aéreas
- Telefonia
- Serviços postais
- Manutenção de escritórios de apoio à atividade parlamentar
- Assinatura de publicações
- Fornecimento de alimentação ao parlamentar
- Hospedagem
- Locação ou fretamento de aeronaves, veículos automotores e embarcações, serviços de táxi, pedágio e estacionamento e passagens terrestres, marítimas ou fluviais
- Combustíveis e lubrificantes
- Serviços de segurança
- Contratação de consultorias e trabalhos técnicos
- Divulgação da atividade parlamentar, exceto nos 120 dias anteriores às eleições
- Participação do parlamentar em cursos, palestras, seminários, simpósios, congressos ou eventos congêneres
- Complementação do auxílio-moradia.

Para acessar os dados do CEAP, usamos o [Portal da Transparência da Cota Parlamentar](https://www.camara.leg.br/cota-parlamentar/). No entanto, automatizaremos o processo [utilizando a API do Serviço de Dados Abertos da Câmara dos Deputados](13072023152704-utilizando-a-api-do-serviço-de-dados-abertos-da-câmara-dos-deputados.md).

## Alguns pontos de atenção

- Alguns gastos podem ser feitos por assessores
- O deputado não pode ser dono da empresa prestadora de serviço ou ter qualquer tipo de participação 
- O saldo é acumulativo ao longo do exercício financeiro (ano civil). Ou seja, pode ocorrer que em um determinado mês um deputado exceda a cota, contudo esse excesso é um saldo de um mês anterior em que ele tenha ficado abaixo da cota. 