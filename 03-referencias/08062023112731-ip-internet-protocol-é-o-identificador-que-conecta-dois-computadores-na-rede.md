---
alias: IP(Internet Protocol) é o identificador que conecta dois computadores na rede 
---
%%
data: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#system_design 
___
# IP(Internet Protocol) é o identificador que conecta dois computadores na rede

IP(Internet Protocol) é um dos protocolos do conjunto de Protocolos de Internet para comunicação. Ele é responsável por endereçar hosts, encapsular dados em pacotes ([[08062023113531-pacote-é-um-termo-para-referenciar-uma-unidade-de-transferência-básica-ip-packets|pacote é um termo para referenciar uma unidade de transferência básica-IP Packets]]), e rotear esses pacotes para um rost de destino através da rede de internet.

Cada dispositivo (ou domínio) conectado a Internet recebe um endereço IP e conforme os pacotes são direcionados para o endereço de IP anexado a eles, os dados chegam onde são necessários.

O protocolo de internet versão 4 (IPv4) é um dos principais protocolos de comunicação de redes na Internet. É composto por uma sequencia de 32 bits divididos em grupos de 8 bits cada, chamados de octetos. Cada octeto permite o uso de 256 cominações diferentes(2⁸) e são configurados usando números de 0 à 255 formando endereços como "220.45.100.222" ou "131.175.34.7".

No entanto, os endereços disponíveis para essa IPv4 não estão mais disponíveis e, desde meados dos anos 2000 a nova versão, o IPv6, que usa 128 (256¹⁶ endereços diferentes) bits para o endereço, vem sendo implantada.

A primeira parte de um endereço de IPv4 identifica a rede específica na internet, a segunda identifica um host dentro dessa rede:

> Dado um endereço de IP como 192.168.1.2
>
> - 192.168.1 -> rede
> - .2 -> host

> [!INFO] Um endereço de IP não identifica uma máquina individual, mas uma conexão à internet

Para tornar os endereços de IP mais amigáveis aos humanos, eles forma "mascarados" por nomes de domínio, por exemplo: www.google.com tem seu IPv6 = 2001:4860:4860::8888 (em 15/02/2023). Para que um host possa se comunicar com outro, é preciso "resolver" os nomes e para isso existe o mecanismo DNS, responsável por traduzir um nome de domínio em endereço de IP. [[08062023112423-os-usuários-acessam-o-site-através-de-nomes-de-domínio-providos-por-dns|Os usuários acessam o site através de nomes de domínio providos por DNS (Domain Name Design)]].

---


---
## Referencias