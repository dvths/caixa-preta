---
aliases:
  - Remover cabeçalhos incorretos
tags:
  - python_scprapy
  - python
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Remover cabeçalhos incorretos

Muitos desenvolvedores desconhecem que os servidores proxy podem adicionar cabeçalhos extras às requisições. Isso pode tornar os crawlers detectáveis.

Quando a requisição é encaminhada do servidor proxy para o site de destino, às vezes eles podem adicionar inadvertidamente cabeçalhos adicionais.  

Os seguintes cabeçalhos são um sinal claro de que foram incluídos por um servidor proxy:

```
'Forwarded', 
'Proxy-Authorization',
'X-Forwarded-For', 
'Proxy-Authenticate',
'X-Requested-With',
'From', 
'X-Real-Ip', 
'Via', 
'True-Client-Ip', 
'Proxy_Connection'
```

> [!tip] Antes de comprar um pacote de proxy com um provedor, verifique se o servidor não está adicionando esses cabeçalhos às requisições.
> É possível fazer isso enviando algumas solicitações através do provedor de proxy para um site como http://httpbin.org/headers e inspecionar a reaposta que chega:
> ```python
> import requests
> proxies = {
> 	"http": "PROXY"
> }
> r = requests.get("http://httpbin.org/headers", proxies=proxies, verify=False)
> print(r.text)

Se o servidor proxy está adicionando cabeçalhos suspeitos à solicitação, use um provedor proxy diferente ou entre em contato com a equipe de suporte para pedir que atualizem os servidores para descartar esses cabeçalhos antes de serem enviados ao site de destino.

Embora isso não deva acontecer com grandes provedores, é possível que ocorra com provedores menores ou redes de proxy construídas pelo próprio usuário.



---
## Referencias