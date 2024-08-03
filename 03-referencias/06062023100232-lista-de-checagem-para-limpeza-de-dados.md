---
alias: Lista de checagem para limpeza de dados 
---
%%
data: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#GDCA #data_wranglin #google_sheets 
___
# Lista de checagem para limpeza de dados

>[!warning] Não há uma lista universal de pontos a serem verificados. Cada projeto segue seu próprio conjunto de requisitos. Contudo, certifique-se de ter identificado os problemas mais comuns e corrija-os, incluindo:

- **Origem dos erros.** Você usou as ferramentas e funções certas para encontrar a origem dos erros no seu conjunto de dados?

- **Dados nulos**. Você procurou por NULOS com filtros e formatação condicional?

- **Palavras digitadas incorretamente**. Você localizou todas as palavras com erro de digitação?

- **Números digitados incorretamente.** Você verificou se os dados numéricos foram digitados corretamente?

- **Caracteres e espaços extras.** Você excluiu os caracteres ou espaços extras com a função TRIM?

- **Duplicatas.** Você excluiu as duplicatas nas planilhas ou SQL com as funções Remove duplicates ou DISTINCT, respectivamente?

- **Tipos de dados incompatíveis.** Você verificou se os dados numéricos, de datas e strings foram convertidos corretamente?

- **Strings desorganizadas (inconsistentes)**. Você verificou se todas as strings são consistentes e pertinentes?

- **Formatos de dados desorganizados (inconsistentes).** Você formatou as datas de forma consistente no conjunto de dados?

- **Identificações (colunas) variáveis incorretas**. Você nomeou suas colunas de forma adequada?

- **Dados truncados**. Você verificou se há dados ausentes ou truncados que exigem correção?

- **Lógica nos negócios**. Com base em seu conhecimento nos negócios, você verificou se os dados são coerentes? 

## Revisar a meta do projeto

Depois de concluídas as tarefas de limpeza dos dados, revise a meta do seu projeto e verifique se seus dados continuam alinhados à meta. Esse é um processo contínuo que deverá ser feito durante todo o projeto; há, no entanto, três etapas para levar em consideração ao refletir a respeito: 

- Confirmar o problema dos negócios 
    
- Confirmar a meta do projeto
    
- Verificar se os dados têm potencial para solucionar o problema e estão alinhados à meta

## Como manter os dados limpos e sincronizados com uma fonte

Com a função [**IMPORTRANGE**](https://support.google.com/docs/answer/3093340?hl=en)

do Planilhas Google e o recurso [**Paste Link**](https://professor-excel.com/how-to-paste-cell-links/)

(opção Paste Special no Microsoft Excel), você pode inserir dados de uma planilha para outra. Usá-los com uma grande quantidade de dados é mais eficiente do que copiar e colar manualmente. Além disso, diminuem a chance de que surjam erros ao copiar e colar dados incorretos, e são úteis durante a limpeza dos dados, pois você pode escolher a dedo os dados que quer analisar e deixar de lado aqueles que sejam irrelevantes para seu projeto. É, basicamente, como tirar tudo aquilo que atrapalhe em seus dados, para que você se concentre no que é mais importante para resolver o problema. Esta funcionalidade também é útil no monitoramento diário dos dados; com ela, é possível criar uma planilha de acompanhamento para compartilhar dados relevantes com outras pessoas. Os dados são sincronizados com a fonte de dados. Dessa forma, quando os dados forem atualizados no arquivo de origem, o dado monitorado também será atualizado. 

Ao usar a função IMPORTRANGE no Planilhas Google, os dados podem ser extraídos de outra planilha; é necessário, no entanto, permitir o acesso à planilha na primeira vez que os dados são extraídos. **A URL mostrada abaixo é apenas para fins de sintaxe. Não insira-o em sua planilha.** Faça a substituição por uma URL para uma planilha que você criou para poder controlar o acesso a ela, clicando no botão Permitir acesso.

![This image shows an IMPORTRANGE formula in a cell and a #REF! error with the message "You need to connect these sheets."](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/MIPP12QFSu6Dz9dkBXruHQ_7eae892291704199ac5e03c99b75a5f1_allow_access_Importrange.png?expiry=1686182400000&hmac=FnHNAX57P413gk5CMQhE5_yvSp-et2-uQoW1inYuLOs)

Consulte a [página de Suporte do Google sobre a função IMPORTRANGE](https://support.google.com/docs/answer/3093340?hl=en)para obter a sintaxe e o uso de amostra.

### Exemplo de como usar a função IMPORTRANGE

Um analista que está monitorando uma campanha de arrecadação de fundos precisa acompanhar e garantir a distribuição dos fundos correspondentes. Ele usa a função **IMPORTRANGE** para extrair as transações correspondentes em uma planilha com todas as doações individuais, o que permite a ele determinar quais doações são elegíveis aos fundos correspondentes que ainda precisam ser processados. Como o número total de transações correspondentes cresce a cada dia, ele só precisa alterar o intervalo usado pela função para importar os dados mais atualizados. 

Na terça-feira, ele usou a fórmula abaixo para importar os nomes dos doadores e os valores correspondentes:

```
=IMPORTRANGE(“https://docs.google.com/spreadsheets/d/1cOsHnBDzm9tBb8Hk_aLYfq3-o5FZ6DguPYRJ57992_Y”, “Matched Funds!A1:B4001”)
```

Na quarta-feira, outras 500 transações foram processadas. Ele aumenta o intervalo usado em 500 para incluir facilmente as últimas transações ao importar os dados na planilha do doador individual:

```
=IMPORTRANGE(“https://docs.google.com/spreadsheets/d/1cOsHnBDzm9tBb8Hk_aLYfq3-o5FZ6DguPYRJ57992_Y”, “Matched Funds!A1:B4501”)
```

>[!warning] **Observação: Os exemplos acima são meramente ilustrativos. Não os copie e cole em sua planilha. Para tentar você mesmo, é necessário substituir seu URL (e o nome da planilha, no caso de haver várias abas) junto com o intervalo de células da planilha que foram preenchidas com os dados.** 

## Como extrair dados de outras fontes

A função [**QUERY**](https://support.google.com/docs/answer/3093343?hl=en) também é útil quando se quer extrair dados de outra planilha. O recurso do tipo SQL da função **QUERY** consegue extrair dados específicos de uma planilha. Em se tratando de quantidades maiores de dados, usar a QUERY função é muito mais rápido do que filtrar os dados manualmente, o que fica ainda mais evidente quando se precisa repetir filtros. Você pode gerar, por exemplo, uma lista de todos os clientes que compraram produtos da sua empresa em determinado mês com um filtro manual. Se quiser descobrir o crescimento mensal de clientes, você precisará copiar os dados filtrados em uma nova planilha, filtrar os dados de vendas durante o mês seguinte e copiar os resultados para análise. Com a função **QUERY**, você obtém todos os dados dos meses sem precisar alterar o conjunto de dados original ou copiar os resultados.

A sintaxe da função **QUERY** é similar à função **IMPORTRANGE.** Você insere a planilha por nome e o intervalo de dados em que deseja fazer a consulta, e usa o comando **SELECT** do SQL para selecionar colunas específicas. Você também pode adicionar critérios específicos após a instrução **SELECT**, basta incluir uma instrução **WHERE**. Mas não se esqueça de que todos os códigos SQL usados devem ser colocados entre aspas!

O Planilhas Google roda a Linguagem de consulta da API de visualização do Google nos dados. As planilhas do Excel usam um assistente de consulta para orientar você pelas etapas para conectar a uma fonte de dados e selecionar as tabelas. Independentemente do caso, você tem a certeza de que os dados são importados, verificados e limpos com base no critério da consulta.

### Exemplos de como usar a função QUERY

Consulte a [página de Suporte do Google sobre a função QUERY](https://support.google.com/docs/answer/3093343?hl=en)

com a sintaxe e uso de amostra, além de exemplos que você pode baixar em uma planilha do Google.

Link para copiar a planilha: [exemplos da função QUERY](https://docs.google.com/spreadsheets/d/1815H5TCe91LLT6tD6FmxMHmeJAAkr4o5Q6rNpV6xiFk/copy)

### Solução prática

Os analistas usam o SQL para extrair um conjunto de dados específico em uma planilha. Eles usam a função **QUERY** para criar várias abas (visualizações) do conjunto em questão. Uma aba, por exemplo, pode incluir todos os dados de vendas de determinado período, enquanto outra aba inclui todos os dados de vendas de uma região específica. A solução mostra como o SQL e as planilhas funcionam bem juntos.

## Como filtrar os dados para obter o que procura

A função [**FILTER**](https://support.google.com/docs/answer/3093197?hl=en) é totalmente interna em uma planilha e não exige o uso de uma linguagem de consulta. Com ela, você consegue visualizar somente as linhas (ou colunas) nos dados de origem que atendem às condições especificadas. A função permite pré-filtrar os dados antes de analisá-los.

Ela pode rodar de forma mais rápida do que a função **QUERY**. Lembre-se: a função **QUERY** pode ser combinada a outras funções em casos de cálculos mais complexos. A função **QUERY** pode ser usada, por exemplo, com outras funções, como **SUM** e **COUNT**, para sintetizar os dados; já com a função **FILTER**, isso não é possível. 

### Exemplo de como usar a função FILTER

Consulte a [página de Suporte do Google sobre a função FILTER](https://support.google.com/docs/answer/3093197?hl=en)

com a sintaxe e uso de amostra, além de exemplos que você pode baixar em uma planilha do Google.

Link para copiar a planilha: [Exemplos da função FILTER](https://docs.google.com/spreadsheets/d/1caULJLQvQuzBnCN7rO9utg0xSKrYms7wM0Ph7A2JXY4/copy)

---
## Referencias