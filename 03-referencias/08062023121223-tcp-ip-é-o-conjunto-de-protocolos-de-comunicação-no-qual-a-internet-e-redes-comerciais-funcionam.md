---
alias: TCP-IP é o conjunto de protocolos de comunicação no qual a internet e redes comerciais funcionam 
---
%%
data: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#system_design 
___
# TCP-IP é o conjunto de protocolos de comunicação no qual a internet e redes comerciais funcionam

O conjunto de Protocolos de Internet é formado por um grupo de protocolos de comunicação que implementam a pilha de protocolos no qual a internet e a maioria das redes comerciais funcionam. Essa pilha é chamada de TCP/IP porque os protocolos
TCP e IP foram os primeiros a serem definidos.

- [[08062023112731-ip-internet-protocol-é-o-identificador-que-conecta-dois-computadores-na-rede|IP(Internet Protocol) é o identificador que conecta dois computadores na rede]]
- [[08062023115052-tcp-é-um-dos-protocolos-de-comunicação-que-dão-suporte-de-rede-para-internet|TCP é um dos protocolos de comunicação que dão suporte de rede para internet]]

O protocolo TCP/IP possui 4 camadas:

- **APLICAÇÃO**
  - Nesta camada temos os protocolos SMTP (email), FTP (transferência de arquivo) e HTTP (Hypertext Transfer Protocol), para navegação com a internet.
- **TRANSPORTE**
  - Usualmente TCP responsável pro receber os dados da camada de aplicação,
    dividir em IP Packets ([[08062023113531-pacote-é-um-termo-para-referenciar-uma-unidade-de-transferência-básica-ip-packets|Pacote é um termo para referenciar uma unidade de transferência básica-IP Packets]]), ordenar dos dados, checar a integridades dos pacotes, enviá-los para camada inferior.
- **INTERNET**
  - Aqui temos o IP que adiciona os endereços de IP dos computadores da conexão aberta.
- **REDE/ENLACE**
  - Os pacotes endereçados vindos da camada de internet são chamados aqui de Datagramas. A interface de rede irá enviá-los através da rede (ou recebê-los) e o que terá dentro dessa camada dependerá do tipo de rede que o computador estiver inserido.


---
## Referencias