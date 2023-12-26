---
nome-do-curso: Google Data Analytics Certification
topico:
  - Entendendo o básico de R
aliases:
  - Exemplos de uso de operadores lógicos em R
instrutor: 
tags:
  - GDCA
  - R
  - R_operadores
link: https://www.coursera.org/programs/trybe-google-learning-program-hrevt/professional-certificates/google-data-analytics?collectionId=twDTY
local:
  - Coursera
tipo-curso:
  - online
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%
____

# Exemplos de uso de operadores lógicos em R

O data frame tem seis colunas: _Ozone_ (a medida de ozônio), _Solar.R_ (a medida solar), _Wind_ (a medida do vento), _Temp_ (a temperatura em Fahrenheit) e _Month_ (mês) e _Day_ (dia) das medidas (cada linha representa uma combinação específica de mês e dia).

![Image of the first four rows of the “airquality” dataset in the RStudio data viewer.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/KyQMjIMnQOOkDIyDJ1DjtQ_3cf5fd385d564847939e6ae0ef867af6_pasted-image-0.png?expiry=1691539200000&hmac=8IilXv1PESijjXTXJN2CJrcSKSGvKfZKfGMQKdD3xf4)

Vamos conferir como os operadores AND, OR e NOT podem ser úteis nessa situação.

### **Exemplo de AND**

Imagine que você quer especificar as linhas que são excessivamente ensolaradas e ventosas, que, segundo sua definição, têm medidas acima de 150 e 10 para _Solar_ e _Wind_, respectivamente.  

Em R, você pode expressar a instrução lógica como Solar.R > 150 & Wind > 10.

Somente as linhas com _ambas_ as condições verdadeiras é que atendem ao critério:

![Image of a single row of the “airquality” dataset in the RStudio data viewer.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/UkM2a25mSAODNmtuZugD7A_0f9d0b6b38294d19b8c8775daa1e6686_unnamed.png?expiry=1691539200000&hmac=GX5Ipq1odws0H_UKqL0QUfKUsWK3WVZgoZNZPSacNbA)

### **Exemplo de OR**

Em seguida, imagine que você quer especificar as linhas em que está excessivamente ensolarado ou ventoso, que, segundo sua definição, têm medidas acima de 150 ou 10 para _Solar_ e _Wind_, respectivamente. 

Em R, você pode expressar a instrução lógica como Solar.R > 150 | Wind > 10.

Todas as linhas em que _alguma das duas_ condições é verdadeira atendem ao critério:

![Image of three rows of the “airquality” dataset in the RStudio data viewer.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/BiQTSOx1Qz2kE0jsdZM9Qg_d80e67ab81444bc79158b097434b05bf_unnamed-1-.png?expiry=1691539200000&hmac=5CYna8bXC3XBW4T3xw4LMHzHLWnBy-I0ED1h1N551VI)

### **Exemplo de NOT**

Agora imagine que você quer focar apenas em medidas climáticas para dias que não o primeiro dia do mês.

Em R, você pode expressar a instrução lógica como Day != 1.

As linhas em que a condição é verdadeira atendem ao critério:

![Image of three rows of the “airquality” dataset in the RStudio data viewer.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/Xg4WXZgIS-aOFl2YCNvmSA_756d3a7c761348208f31aa83c2b49479_unnamed-2-.png?expiry=1691539200000&hmac=pHKL0cliVNwakrQQOq7CKyO2lf1VI1N1QEv_NSUQLGM)

Por fim, imagine que você quer focar apenas em cenários que não sejam excessivamente ensolarados e não sejam excessivamente ventosos, com base em definições prévias de excessivamente ensolarado e excessivamente ventoso. Em outras palavras, a seguinte instrução não deve ser verdadeira: tanto uma medida _Solar_ maior do que 150 ou uma medida _Wind_ maior do que 10.

Observe que a instrução é o oposto da instrução OR acima. Para expressar a instrução em R, insira um ponto de exclamação (!) em frente à instrução OR anterior: !(Solar.R > 150 | Wind > 10). R aplicará o operador NOT a tudo o que estiver dentro dos parênteses. 

Nesse caso, só uma linha atende ao critério:

![Image of a single row of the “airquality” dataset in the RStudio data viewer.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/K8erATULR16HqwE1C3deAg_da0f95bba16042bca56b7b9c967ec986_pasted-image-0-1-.png?expiry=1691539200000&hmac=OB5sYrfJQzM5rTK4QF7mIwKb5hVO6h566CcXj_3viDM)

---
## Referências adicionais

[Operadores lógicos e controle de fluxo em R](https://www.datacamp.com/tutorial/conditionals-and-control-flow-in-r)
