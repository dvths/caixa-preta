---
alias: TCP é um dos protocolos de comunicação que dão suporte de rede para internet 
---
%%
data: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#system_design 
___
# TCP é um dos protocolos de comunicação que dão suporte de rede para internet

O Protocolo de Controle de Transmissão, é um dos protocolos de comunicação que dão suporte de rede para a internet. É desse protocolo a responsabilidade da entrega correta dos pacotes ([[08062023113531-pacote-é-um-termo-para-referenciar-uma-unidade-de-transferência-básica-ip-packets|pacote é um termo para referenciar uma unidade de transferência básica-IP Packets]]) entre os diferentes nós da rede de computadores.

Entre as características técnicas fundamentais do TCP estão:

| Características              | Descrição                                                                                                                                                                                                                                                                                                                           |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Orientado à conexção         | Sequencia de passos definida no protocolo para que os dois pontos da conexão possam interagir entre si                                                                                                                                                                                                                              |
| Handshake                    | Mecanismo que garante o recebimento de todos os pacotes de dados.                                                                                                                                                                                                                                                                   |
| Ponto a ponto                | Uma conexão TCP é estabelecida entre dois pontos.                                                                                                                                                                                                                                                                                   |
| Confiabilidade               | O TCP permite recuperação de pacotes perdidos, eliminação de pacotes duplicados, recuperação de dados corrompidos e recuperação da ligação em caso de problemas no sistema de rede                                                                                                                                                  |
| Full duplex                  | Possibilidade de transferências simultânea em ambas direções (client-servidor) durante toda a sessão.                                                                                                                                                                                                                               |
| Entrega ordenada             | O TCP garante a reconstrução do fluxo (**stream**) no destinatário mediante os números de sequencia (como octetos de IP).                                                                                                                                                                                   |
| Controle de fluxo            | O TCP evita que um emissor não afogue um receptor enviando mais dados do que o receptor pode processar. Quando uma conexão recebe bytes que estão corretos e em sequência ela os armazena em um buffer de recepção para que a aplicação possa processá-los.                                                                         |
| Controle de congestionamento | O TCP é auto regulado, o remetente limita ou aumenta a taxa de entrega de dados para conexão em função do congestionamento percebido. Isso é feito através do número de mensagens de reconhecimento recebidos pelo remetente por unidade de tempo que são calculadas com dados do tempo de ida e de volta (RTT - Round Trip Travel) |

> [!INFO] Info:
> Detalhes sobre o fluxo de transferência de dados podem ser vistos [aqui](https://pt.wikipedia.org/wiki/Protocolo_de_controle_de_transmiss%C3%A3o)

O TCP também introduz o conceito de Portas de Protocolos TCP. [[08062023120231-uma-porta-tcp-representa-o-ponto-final-específico-de-comunicação-em-um-sistema-operacional-hospedeiro|Uma porta TCP representa o ponto final específico de comunicação em um sistema operacional hospedeiro]].

Assim cada um dos pontos da conexão dispõe de uma porta associada (um valor de 16 bit) que dificilmente será a mesma do interlocutor. Alguns serviços que fazem uso de protocolos específicos possuem portas fixas, por exemplo: Servidores que manipulam requisições FTP(File Transfer Protocol) sempre ouvirá na porta TCP 21, da mesma maneira um servidor HTTP (Hypertext Transfer Protocol) ouvirá a porta TCP 80. Essas portas fixas são chamadas de **portas bem conhecidas**.

O TCP usa o IP ([[08062023112731-ip-internet-protocol-é-o-identificador-que-conecta-dois-computadores-na-rede|IP(Internet Protocol) é o identificador que conecta dois computadores na rede]]) para a entrega dos pacotes à rede e os pontos de acesso são identificados por portas acessadas por multiplexação que permite múltiplas ligações em cada host. Essa ligação entre TCP e IP formam um conjunto de protocolos que é chamado de TCP-IP. [[08062023121223-tcp-ip-é-o-conjunto-de-protocolos-de-comunicação-no-qual-a-internet-e-redes-comerciais-funcionam|TCP-IP é o conjunto de protocolos de comunicação no qual a internet e redes comerciais funcionam]].




---
## Referencias