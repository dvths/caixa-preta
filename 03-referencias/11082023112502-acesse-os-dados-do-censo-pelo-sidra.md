---
classe: [JDCL1]
topico: O Censo - bairros e aglomerados subnormais
nome-do-curso: Jornalismo de Dados para Coberturas Locais
alias: Acesse os dados do Censo pelo SIDRA
instrutor: Pedro Renaux
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#JDCL #IBGE #IBGE_censo
____

# Acesse os dados do Censo pelo SIDRA

## Explorando alguns dados do Censo Demográfico.

Os da dos do Censo também são acessados pelo SIDRA ([[17062023142631-conhecendo-as-pesquisas-do-ibge|Conhecendo as pesquisas do IBGE]]) para explorar os dados do senso vamos pesquisar por:
### Deslocamento para o trabalho

O passo a passo para encontrar e baixar a tabela pode ser visto [aqui](https://scribehow.com/shared/JDCL__Acessando_dados_do_Censo_IBGE_Deslocamento_para_o_Trabalho__F30oO29BTTOU-J5AsC0Mmw)

### Bairros com maior número de crianças do meu município

Uma das características mais importantes das pesquisas do IBGE é a abrangência das pesquisas. Somente o IBGE consegue realizar pesquisas que cheguem até os bairros de um município. 

Para acessar as tabelas de dados dos dos bairros de um município, primeiro <mark class="hltr-red">é preciso entender a legislação da divisão politico-territorial do município</mark>, pois o que podemos entender como bairro, na verdade pode ser um distrito. 

O passo a passo de como acessar dados por bairros de um município pode ser visto [aqui](https://scribehow.com/shared/JDCL__Acessando_dados_do_Censo_Proporcao_de_Criancas_por_Bairro_de_um_Municipio__FcuT3WSPTI6n4wQO09SXhQ)

### Aglomerados subnormais

Aglomerados subnormais é a terminologia utilizada pelo IBGE para se referir à favelas, grotas, comunidades, invasões, etc.. Ou seja, [formas irregulares de ocupação de terrenos públicos ou privados, caracterizados por um padrão urbanístico irregular, carência de serviços públicos essenciais e localização em áreas que apresentam restrições à ocupação. As populações dessas comunidades vivem sob condições socioeconômicas, de saneamento e de moradias precárias.](https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/15788-aglomerados-subnormais.html?=&t=o-que-e)

Para saber os aglomerados do município, siga o passo a passo disponível [aqui](https://scribehow.com/shared/JDCL__Acessando_dados_do_Censo_Aglomerados_Subnormais__QceYX3nrRJW0wDzCO0f-KQ)

Além dos dados sobre quantidade de habitantes vivendo em aglomerados subnormais, as tabelas também trazem dados sobre saneamento básico, raça, alfabetização, abastecimento de água e fornecimento de energia elétrica, descarte de lixo, entre outras informações.


### Cuidados com a comparação direta dos resultados entre os Censos

O período de um Censo para outro é de 10 anos (por conta do período de pandemia e por negligências do governo Bolsonaro, especialmente a edição de 2020 foi adiada para 2023). Isso significa que os métodos de coleta do IBGE evoluíram, tanto em questão de tecnologia quanto em abrangência territorial. Por isso, especialmente nos casos de Aglomerados Subnormais, não é possível afirmar que as diferenças nos resultados de uma edição para outra tenha relação apenas com a dinâmica populacional. Ou seja, é preciso ter cuidado ao realizar comparações entre uma edição e outra, pois os meios de coleta evoluíram com o passar do tempo. 




