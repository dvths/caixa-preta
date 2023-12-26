---
alias: a obtenção dos recursos solicitados ao servidor se dá por meio do protocolo HTTP 
---
%%
data: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#system_design 
___
# A obtenção dos recursos solicitados ao servidor se dá por meio do protocolo HTTP

Hiper Text Transfer Protocol (Protocolo de Transferencia de Hipertexto), ou HTTP é um dos protocolos de comunicação que compõe a Camada de Aplicação da Pilha de Protocolos TCP-IP ([[08062023121223-tcp-ip-é-o-conjunto-de-protocolos-de-comunicação-no-qual-a-internet-e-redes-comerciais-funcionam|TCP-IP é o conjunto de protocolos de comunicação no qual a internet e redes comerciais funcionam]])

É considerado a base para comunicação de dados na Web por ter sido projetado especificamente para suportar Hipertexto. Ou seja, permite que os usuários acessem, naveguem e interajam com documentos hipertexto como as páginas da web por meios de URLs (Uniform Resource Locators).

A conexão HTTP se dá por meio de solicitações (requests) de um user-agent. Um user-agent é qualquer ferramenta cliente que age em nome do usuário, como um robô que varre a Web para preencher ou manter um índice de mecanismo de pesquisa e coletar informações. Contudo, normalmente, o user-agent é um navegador web. Portanto, o protocolo HTTP é quem estabelece a comunicação entre um máquina cliente e um servidor. ([[08062023085042-conceitos-do-desenvolvimento-de-aplicações-web-por-uma-visão-holística-do-design-do-sistema|Conceitos do desenvolvimento de aplicações web por uma visão holística do design do sistema]])

Sempre será o user-agent (ou client) que iniciará a comunicação como o servidor web. Cada _request_ é individual e transferida via protocolo TCP ([[08062023115052-tcp-é-um-dos-protocolos-de-comunicação-que-dão-suporte-de-rede-para-internet|TCP é um dos protocolos de comunicação que dão suporte de rede para internet]]) para um servidor web que irá fornecer um resultado (response) que pode ser positiva, isto é, devolver o documento solicitado, ou negativa para os casos em que uma não conformidade ocorre. 

Cada solicitação carrega consigo um conjunto de dados codificados que tipicamente incluem:
- A versão HTTP 
- URL
- Um método HTTP 
- Cabeçalhos de solicitação HTTP
- Corpo opcional do HTTP





---
## Referencias

https://www.freecodecamp.org/news/what-is-http/#introduction-to-http

https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview#componentes_de_sistemas_baseados_em_http