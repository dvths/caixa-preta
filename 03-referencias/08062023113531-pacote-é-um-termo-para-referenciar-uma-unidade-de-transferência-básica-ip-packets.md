---
alias: Pacote é um termo para referenciar uma unidade de transferência básica-IP Packets 
---
%%
data: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#system_design 
___
# Pacote é um termo para referenciar uma unidade de transferência básica-IP Packets

Um pequeno seguimento de uma mensagem maior. Todos os dados transferidos pela rede
de internet são dividido nesses pacotes e recombinados pelo host que os recebe.

Pacotes são utilizados para que otimizar a Largura de Banda da rede e minimizar a Latência, aumentando a robustez da comunicação.

Essa forma de transferência obedece os princípios de um paradigma de comunicação chamado de [Comutação de Pacotes](https://pt.wikipedia.org/wiki/Comuta%C3%A7%C3%A3o_de_pacotes)

Comutação é uma palavra que tem a ver com transformação, metamorfose, alteração. Indica que os dados que trafegam seguindo o paradigma de Comutação de Pacotes são transformados ou alterados de alguma forma. Na verdade os dados são divididos em inúmeros pacotes e então transmitidos pela rede.

Os pacotes são encaminhados independentemente, assim a rede pode reajustar-se no caso de quebras de link de transmissão. Isto é, os pacotes podem tomar diferentes caminhos de rede para chegarem ao mesmo destino. Portanto podem viajar sobre os mesmo fios basicamente em qualquer ordem. Isto permite que múltiplas conexões ocorram ao mesmo tempo no mesmo equipamento de rede.

Cada pacote possui um cabeçalho que contém informações importantes para a transmissão, como o endereço de IP ([[08062023112731-ip-internet-protocol-é-o-identificador-que-conecta-dois-computadores-na-rede|IP(Internet Protocol) é o identificador que conecta dois computadores na rede]]) tanto do remetente, quanto do destinatário.

Os cabeçalhos de IP também relatam:

- Comprimento do cabeçalho
- Comprimento do pacote
- TTL (Time to Live)
- Qual Protocolo de Transporte está sendo utilizado TCP (Transmition Control Protocol,
  UDP, etc.)

O IP tem a função fundamental de endereçar o tráfego de dados pela rede. No entanto não é responsabilidade do IP processar a ordem dos pacotes, ou remontá-los na entrega e nem verificar erros que podem acontecer. Essa tarefa normalmente atribuída ao Protocolo de Controle de Trasmissão ([[08062023115052-tcp-é-um-dos-protocolos-de-comunicação-que-dão-suporte-de-rede-para-internet|TCP é um dos protocolos de comunicação que dão suporte de rede para internet]]),

> [!TIP] Para ver mais detalhes do
> [formato e componentes do cabeçalho IPv4](https://pt.wikipedia.org/wiki/Protocolo_de_Internet#Formato_do_Cabe.C3.A7alho_do_IPv4)

> [!INFO] Quando estamos nos referenciando um pacote na camada de transporte usamos o termo segmento, na camada de rede, utilizamos o termo datagrama e finalmente na camada de enlace, utilizamos o termo quadro. Veja [[08062023121223-tcp-ip-é-o-conjunto-de-protocolos-de-comunicação-no-qual-a-internet-e-redes-comerciais-funcionam|TCP-IP é o conjunto de protocolos de comunicação no qual a internet e redes comerciais funcionam]]

----



---
## Referencias