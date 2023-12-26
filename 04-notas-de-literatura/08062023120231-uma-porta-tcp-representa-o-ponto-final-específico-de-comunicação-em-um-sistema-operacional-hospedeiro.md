---
alias: Uma porta TCP representa o ponto final específico de comunicação em um sistema operacional hospedeiro 
---
%%
data: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#system_design 
___
# Uma porta TCP representa o ponto final específico de comunicação em um sistema operacional hospedeiro

Uma porta representa um processo específico servindo de ponto final de comunicação em um sistema operacional hospedeiro de um computador. Uma porta tem associação com o IP ([[08062023112731-ip-internet-protocol-é-o-identificador-que-conecta-dois-computadores-na-rede|IP(Internet Protocol) é o identificador que conecta dois computadores na rede]]) hospedeiro, assim como o tipo de protocolo usado para comunicação.

A porta é identificada por um protocolo, com um número de 16 bits chamado de _port number_ que, por sua vez é adicionado a um endereço de IP completando o endereço de destino para uma sessão de comunicação.

O propósito das portas é identificar aplicações e processos de um único computador e possibilitá-lo a compartilhar uma única conexão física com uma rede de comutação de pacotes ([[08062023113531-pacote-é-um-termo-para-referenciar-uma-unidade-de-transferência-básica-ip-packets|pacote é um termo para referenciar uma unidade de transferência básica-IP Packets]]) onde IP Packets podem trafegar seguindo protocolos da camada de transporte, principalmente TCP ([[08062023115052-tcp-é-um-dos-protocolos-de-comunicação-que-dão-suporte-de-rede-para-internet|TCP é um dos protocolos de comunicação que dão suporte de rede para internet]]).

Importante lembrar que a combinação de endereço de IP e o port number, devem ser únicos. Dos milhares de portas numeradas, cerca de 250 das portas conhecidas são reservadas, por convenção, para identificar os tipos de serviços específicos de um
host.

No modelo Client-Servidor de arquitetura de aplicação, as portas são usadas para fornecer um serviço de multiplexação (a combinação de dois ou mais canais de informação por apenas um meio de transmissão) em cada número da porta do lado do
servidor onde os clientes da rede se conectam.

----


---
## Referencias