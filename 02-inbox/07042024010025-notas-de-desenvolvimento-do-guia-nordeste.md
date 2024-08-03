---
aliases:
  - Notas de desenvolvimento do guia nordeste
tags:
  - não_processado
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Notas de desenvolvimento do guia nordeste

## Obter os dados de bolsas e auxílios pagos pelo cnpq:

Embora a primeira intensão fosse a obtenção de dados do Lattes, que nos traria informações sobre todos os pesquisadores registrados na base que atual na região nordeste, esbarramos em problemas técnicos envolvendo a demora da resposta do CNPq em nos fornecer informações sobres sua ferramenta de extração de dados e na capacidade de armazenamento e manipulação desses dados uma vez que o órgão apenas permite acesso de um IP fixo da universidade. Uma regra que impossibilita o acesso à informação fora da universidade. Isso nos deixou com uma forte dependência da área de TI da UFPE que, embora tenham nos fornecido uma máquina como servidor de armazenamento, não garante prontidão caso precisemos de manutenção ou suporte. 

Os desafios atuais são: 
- Encontras fontes de dados alternativa à base do Lattes que nos ajudem a identificar pesquisadores de instituições de ensino federais na região nordeste. 
- Encontrar uma maneira de reduzir a curva de aprendizagem dos integrantes do grupo em relação aos assuntos que envolvam a coleta, processamento e armazenamento dos dados.
- Uma vez obtidos os dodos, armazenar esses dados em um serviço de armazenamento em nuvem.

## Encontrar fontes de dados alternativas

Atualmente entendemos como "fonte", um pesquisador ou pesquisadora que, de alguma maneira atue na região nordeste. Contudo, do ponto de vista do usuário, apenas ser um pesquisador não basta. É preciso fornecer ao usuário do guia mais informações para que este identifique se esse pesquisador é ou não o mais adequado para ser consultado como um fonte. A maneira como enxergo forma de qualificação da entidade "pesquisador" para o propósito do Guia é: sua área de conhecimento e os projetos em que está envolvido. Ou seja, o usuário, identificará sua fonte através desses atributos. Por tanto, pensando no tipo de informação que a base do Lattes forneceria, imagino que para quantidade de informações que precisamos, talvez, a não compense o trabalho que estamos tendo com a obtenção da base do Lattes. 

Uma fonte é:
- Alguém capaz de fornecer informações confiáveis e checáveis sobre o tema da pauta do jornalista.
- Alguém consolidados em sua área de conhecimento.

Como podemos obter dados de pesquisadores com essas características sem depender do Lattes?

Me ocorreu saber se existem outras bases de dados públicas que pudessem, fornecer de alguma maneira, essas informações.

Então pensei: se uma boa fonte é confiável, checável e consolidada em sua área de conhecimento, então deve ser alguém que possa ter recebido dinheiro do CNPq (e outras instituições) para seus projetos.

Foi aí que cheguei nas bases de dados [Bolsas e Auxílios Pagos pelo CNPq](http://dadosabertos.cnpq.br/pt_PT/dataset/bolsas-e-auxilios-pagos-ano-2020). O órgão disponibiliza dados de 2002 à 2022 de todas as bolsas fornecidas.  

Nessas bases de dados preciso verificar se consigo encontrar:
- Campos que identifiquem o beneficiário da bolsa
- Informação que me confirme se este beneficiário é mesmo um professor ou se inclui alunos também
- Se essas bolsas e auxílios caracterizam o beneficiário como pesquisador 
- Se é possível identificar se o beneficiário é de instituições federais do nordeste.

São as questões que me ocorrem no momento.

Uma vez que entendo que o financiamento de projetos de pesquisa pode me ajudar a identificar pesquisadores da região nordeste, fica a ideia: Será que posso obter dados de outras instituições ou órgãos que possam ser cruzados?


---
## Referencias