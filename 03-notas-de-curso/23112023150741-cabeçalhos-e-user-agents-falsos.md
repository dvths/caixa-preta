---
aliases:
  - Cabeçalhos e User-Agents falsos
tags:
  - python_scprapy
  - python
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Cabeçalhos e User-Agents falsos

User-agents são strings que permitem que o site identifique o aplicativo, sistema operacional, navegador, etc. Essas informações são enviadas ao servidor como parte dos Cabeçalhos de requisição. ^697415

Um exemplo de user-agent do navegador Chrome:

```
user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36
```

> [!tip] O site [useragentstring.com](https://useragentstring.com/) é uma ferramenta excelente para consultar e analisar o que significam os valores que compões um agente de usuário.
> 
![[user-agent_string.png]]

Ao raspar um site, é preciso definir o agente de usuário em cada solicitação, caso contrário, o site poderá bloquear as requisições porque saberá que não se trata de um usuário real.

O Scrapy possui uma configuração padrão para user-agent que é enviado quando a spider envia a requisição:

```
Scrapy/VERSION (+https://scrapy.org)
```

Este user-agent identifica claramente que a requisição parte de um raspador para que o site impeça facilmente a raspagem.

É por isso que precisamos gerenciar os user-agents que o Scrapy envia coma as requisições.

Existem algumas maneiras de definir um user-agent falso com Scrapy:

1. [[23112023151104-definir-um-novo-user-agent-padrão|Definir um novo user-agent padrão]]
2. [[23112023151225-adicionar-um-user-agent-a-cada-requisição|Adicionar um user-agent a cada requisição]]

Ambas funcionam, no entanto, ainda haverá o mesmo agente de usuário para cada solicitação, ou seja, o site de destino ainda conseguirá bloquear. Para dificultar ainda o trabalho das defesas anti-bot, podemos:

3. [[23112023151329-selecionar-um-user-agent-aleatório-para-cada-requisição|Selecionar um user-agent aleatório para cada requisição]]

Isso irá permitir que a raspagem atinja seus objetivos em site com defesas simples, mas existem defesas anti-bot mais sofisticadas e que exigirão mais do que user-agents falsos. Para disfarçar ainda mais o robô, será necessário imitar cabeçalhos de navegador de usuários reais para nos misturarmos ao tráfego normal de um site.  ^94cb81

Cada navegador anexa cabeçalhos ligeiramente diferentes em uma ordem diferente, com base no sistema operacional em que o navegador é executado. O objetivo, portanto, é usar as combinações mais comuns de navegador/sistema operacional para realizar as requisições.

Para usar cabeçalhos reais e evitar ao máximo que as requests pareçam suspeitas, precisamos:  ^1bf795
- [[23112023151742-utilizando-devtools-para-obter-os-cabeçalhos-http|Obter os cabeçalhos Http]]
- [[23112023153419-garantir-a-ordem-adequada-dos-cabeçalhos|Garantir a ordem adequada dos cabeçalhos]]
- [[23112023152609-manter-os-cabeçalhos-atualizados|Manter os cabeçalhos atualizados]]
- [[23112023153527-remover-cabeçalhos-incorretos|Remover cabeçalhos incorretos]]

Gerenciar os cabeçalhos pode ser complexo. Contudo, podemos utilizar [[23112023134721-middlewares|Middlewares]] para gerenciar tanto [[23112023151329-selecionar-um-user-agent-aleatório-para-cada-requisição#^f4f21f]] quanto cabeçalhos falsos. Esses middlewares podem gerar milhares de cabeçalhos falsos e enviá-los aleatoriamente a requisição. Para isso, temos duas opções:

1. [[23112023152457-api-de-cabeçalhos-de-navegador-falsos|API de cabeçalhos de navegador falsos]]
2. [[23112023153901-proxy-inteligente]]




---
## Referencias