---
aliases:
  - Utilizando DevTools para obter cabeçalhos
tags:
  - python_scprapy
  - python
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Utilizando DevTools para obter cabeçalhos

Para reunir os cabeçalhos de navegador podemos simplesmente usar as **ferramentas do desenvolvedor**.

Na guia de rede, selecione `Fetch/XHR`, que mostrará todas as requisições de rede que usamos para obter a página.

Ao clicar em uma das respostas, uma guia **Cabeçalhos (Headers)**, deve surgir e mostrará todos os cabeçalhos de requisição e resposta que o navegador recebeu.

O que interessa de fato são os **Cabeçalhos de requisição**

Podemos copiar esses cabeçalhos para o raspador e limpar eventuais cabeçalhos redundantes ou que são muito específicos como `cookie` ou `x-client-data`.

Abaixo, um exemplo dos cabeçalhos de requisição do site google.com no navegador Firefox.

![[cabecalhos-devtools.png]]

Em geral, precisamos apenas incluir os seguintes cabeçalhos nas requisições:

```
Host
Connection
Cache-Control
sec-ch-ua
sec-ch-ua-mobile
sec-ch-ua-platform
Upgrade-Insecure-Requests
User-Agent
Accept
Sec-Fetch-Site
Sec-Fetch-Mode
Sec-Fetch-User
Sec-Fetch-Dest
Accept-Encoding
Accept-Language
```

1. **Host**: Esse cabeçalho especifica o nome do servidor que está sendo solicitado. Ele é essencial para o servidor direcionar a requisição para o site correto quando vários sites estão hospedados no mesmo servidor.

2. **Connection**: Define a opção de conexão para a requisição. Geralmente, é usado para indicar se a conexão deve ser mantida viva após a resposta ser recebida (valor "Keep-Alive").

3. **Cache-Control**: Define as diretrizes de armazenamento em cache para o navegador ou intermediários (como servidores proxy). Isso ajuda a controlar como o conteúdo da página é armazenado temporariamente para melhorar o desempenho e economizar largura de banda.

4. **sec-ch-ua**: É um cabeçalho usado para fornecer informações sobre o agente do usuário (navegador) do cliente, incluindo detalhes sobre compatibilidade com recursos específicos.

5. **sec-ch-ua-mobile**: Fornece informações adicionais sobre a plataforma do dispositivo móvel do cliente.

6. **sec-ch-ua-platform**: Especifica a plataforma do sistema operacional do cliente.

7. **Upgrade-Insecure-Requests**: Este cabeçalho é usado para indicar ao servidor que o navegador deseja carregar recursos inseguros (HTTP) de forma segura (HTTPS) sempre que possível, ajudando a proteger a privacidade e a segurança do usuário.

8. **User-Agent**: Contém informações sobre o navegador e o sistema operacional do usuário, permitindo que o servidor adapte o conteúdo ou o comportamento com base nas capacidades do navegador.

9. **Accept**: Indica os tipos de conteúdo (por exemplo, MIME types) que o navegador aceitará como resposta. Isso ajuda o servidor a escolher a melhor representação de conteúdo.

> [!warning] Enviar os cabeçalhos corretos pode ser um processo de tentativa e erro, pois é preciso encontrar o conjunto ideal para o site de destino

> [!warning] A ordem dos cabeçalhos pode fazer com que as requisições sejam sinalizadas como suspeitas, portanto, é vital garantir que estejam corretamente ordenados para a requisição ser bem sucedida. 

## Utilizando o Curl Converter para obter os cabeçalhos

Uma outra forma de obter os cabeçalhos é utilizar o o site [Curl Converter](https://curlconverter.com/).

A ferramenta do desenvolvedor, permite que copiemos as requisições que o site realiza para sintaxe utilizada pela biblioteca `curl`. 

Como o botão direito, clique na requisição e escolha a opção **Copiar como Curl**.

No site curlconverter.com, cole o valor da área de transferência no espaço indicado e observe que será criado um script python (ou de outra linguagem caso você escolha outra nas opções) que já lista os cabeçalhos da requisição em uma variável `headers`:

![[curl_converter_1.png]]

![[curl_converter_2.png]]
---
## Referencias