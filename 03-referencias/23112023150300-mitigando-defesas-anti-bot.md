---
aliases:
  - Mitigando defesas anti-bot
tags:
  - python_scprapy
  - python
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Mitigando defesas anti-bot

A maioria dos site possuem um métodos para detectar e proibir que scrapers extraiam dados, por exemplo:
- [[08062023112731-ip-internet-protocol-é-o-identificador-que-conecta-dois-computadores-na-rede|Endereço IP]]
- [[08062023121223-tcp-ip-é-o-conjunto-de-protocolos-de-comunicação-no-qual-a-internet-e-redes-comerciais-funcionam|Impressão digital TCP-IP ou TLS]]
- Cabeçalhos HTTP (valores, ordem e use cases)
- Cookies/Sessões



A maneira mais importante e mais fácil de mitigar os sistemas de proteção anti-bot de um site é utilizar  [[23112023150741-cabeçalhos-e-user-agents-falsos|Cabeçalhos e User-Agents falsos]] ou usar [[23112023153901-proxy-inteligente|Proxy inteligente]]. 




---
## Referencias