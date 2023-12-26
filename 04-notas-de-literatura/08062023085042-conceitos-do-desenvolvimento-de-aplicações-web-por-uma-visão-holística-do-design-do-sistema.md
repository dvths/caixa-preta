---
classe: Leitura
alias: Conceitos do desenvolvimento de aplicações web por uma visão holística do design do sistema 
livro: System Design Interview An Insider’s Guide
topico: Conceitos básicos do design de uma aplicação web 
---
%%
data: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%
#system_design
___
# Conceitos do desenvolvimento de aplicações web por uma visão holística do design do sistema

Toda aplicação que opera na web tem como fundamento uma estrutura para lidar com o tráfego de dados pela rede. Esse tráfego funciona da seguinte forma:


![[Figura1-2-esquema-detalhado.jpg]]

1. [[08062023112423-os-usuários-acessam-o-site-através-de-nomes-de-domínio-providos-por-dns|Os usuários acessam o site através de nomes de domínio providos por DNS (Domain Name Design)]]. Este, normalmente é um serviço de terceiros que não é hospedado nos servidores da aplicação.
2. [[08062023112731-ip-internet-protocol-é-o-identificador-que-conecta-dois-computadores-na-rede|IP(Internet Protocol) é o identificador que conecta dois computadores na rede]].O IP é retornado para o navegador (browser) ou um mobile app. No exemplo o IP é 15.123.23.214.
3. Uma vez que o endereço é obtido, [[08062023133511-a-obtenção-dos-recursos-solicitados-ao-servidor-se-dá-por-meio-do-protocolo-http|a obtenção dos recursos solicitados ao servidor se dá por meio do protocolo HTTP]] (Hypertext Transfer Protocol) são enviadas diretamente para o Servidor Web.
4. O servidor, então, retorna as páginas HTML ou dados no formato JSON para renderização.

No exemplo, o tráfego tem duas origens:

- **Web application**: Usa uma combinação de linguagens conhecidas como _server side_ (Java, C#, Python, etc) para manipular a lógica de negócio, armazenamento de dados, etc., e linguagens chamadas de _client side_ (JavaScript, HTML, CSS) para renderização e apresentação das informações.
  
- **Mobile web**: onde o protocolo HTTP é a comunicação entre o app e o web server. JSON (JavaScript Object Notation) é o formato usualmente utilizado devido a sua simplicidade e versatilidade.

## Uso de Databases

Com o crescimento da base de dados, um servidor se tornará insuficiente. Nesse ponto, se faz necessário dividir o backend da aplicação de maneira que possamos tornar independentes o tráfego da web (Web Tier) do armazenamento de dados (Data
Tier). Essa divisão permite o dimensionamento individual de cada uma dessas camadas:

![[Figura1-3-divisão-do-backend-em-camadas.jpg]]


---
## Referencias