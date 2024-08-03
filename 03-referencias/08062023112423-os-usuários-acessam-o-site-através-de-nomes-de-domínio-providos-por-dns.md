---
alias: Os usuários acessam o site através de nomes de domínio providos por DNS (Domain Name Design) 
---
%%
data: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#system_design 
___
# Os usuários acessam o site através de nomes de domínio providos por DNS (Domain Name Design)

Domain Name System é um serviço que tem a finalidade de converter o nome de domínio ("www.exemplo.com") em um endereço de
IP como 192.0.2.1 ([[08062023112731-ip-internet-protocol-é-o-identificador-que-conecta-dois-computadores-na-rede|IP(Internet Protocol) é o identificador que conecta dois computadores na rede]]).

Todos os serviços de DNS se enquadram em uma dessas quatro categorias:

- **Resolvedores Recursivos (DNS recursivo)**:
  - Atua como um intermediário entre o client e o nameserver DNS raiz.
- **Servidores Raiz**:
  - São os 13 tipos de servidores, conhecidos por todos os resolvedores, que
    direcionam a solicitação do servidor recursivo para um nameserver TDL com
    base na extensão do domínio (.com, .net, .org, etc).
- **Servidores TDL (Top Level Domain)**:
  - Mantém informações sobre todos os nomes de domínio que compartilham uma
    extensão de domínio comum, como .com, .net, .org, que são chamados de
    domínios genéricos. Além dos domínios de código de país: .br, .uk, .ru. e
    .jp
- **Servidores Autoritativos (DNS autoritativo)**:
  - Mantém as informações específicas do nome de domínio que ele atende.

O fluxo da consulta de um IP pode ser desenhado da seguinte forma:

![[fluxo-dns.jpg]]

1. Um resolvedor recursivo é a primeira parada em uma consulta DNS, como dito, ele é um intermediário entre o cliente e um nameserver DNS.

2. Após receber a solicitação, o resolvedor irá responder com dados armazenados em cache (11) ou enviar uma solicitação para um dos servidores-raiz. O resolvedor mantém uma listas com os 13 endereços de IP referentes aos servidores-raiz.

3. O servidor-raiz aceita a consulta do resolvedor recursivo, que inclui um nome de domínio, e responde com o direcionamento para um nameserver TDL com base na extensão do domínio (.com, .net, .org, etc.).

4. Após a resposta do servidor-raiz, o resolvedor recursivo envia uma solicitação para um nameserver TDL que mantém todas as informações específicas da extensão do nome de domínio da solicitação e responde apontando o nameserver autoritativo.
   
5. O nameserver autoritativo, geralmente é o último passo do resolvedor na jornada pelo endereço de IP. O nameserver autoritativo contém todas as informações específicas do nome de domínio que ele atente (por exemplo: google.com) e responde com o número do IP que representa o nome de domínio solicitado.

6. Por fim, o resolvedor reponde o cliente com o IP obtido e armazena as informações em cache de maneira que, quando houver outra solicitação desse endereço de IP, os servidor-raiz possa responder diretamente.

É importante lembrar, que apesar desse fluxo parecer demorado, na verdade não é graças a um método de endereçamento e roteamento de rede chamado Anycast que é baseado em carga e proximidades.

Outro ponto importante de se ressaltar é que cada um dos 13 servidores-raiz, possuem mais de 600 cópias espalhadas por todos os continentes.

---
## Referencias

- [Mozilla - How does the Internet work?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work)