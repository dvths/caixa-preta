---
classe:
  - GDAC7
topico:
  - Entendendo o básico de R
nome-do-curso: Google Data Analytics Certification
aliases:
  - Como trabalhar com data e hora em R
instrutor: 
tags:
  - GDCA
  - R
link: https://www.coursera.org/programs/trybe-google-learning-program-hrevt/professional-certificates/google-data-analytics?collectionId=twDTY
tipo-curso:
  - online
local:
  - Coursera
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%
____

# Como trabalhar com data e hora em R

Antes de começar a trabalhar com datas e horas, é preciso carregar os pacotes tidyverse e lubridate. O lubridate é parte do pacote tidyverse.

Primeiramente, abra o RStudio. 

Ainda não instalou o tidyverse? Use a função install.packages() para instalar:

    install.packages(“tidyverse”)

Em seguida, carregue os pacotes tidyverse e lubridate com a função library(). Primeiro, carregue o núcleo do tidyverse para disponibilizá-lo na atual sessão de R:

    library(tidyverse)

Feito isso, carregue o pacote lubridate:

    library(lubridate)

Agora você já está pronto para conhecer as ferramentas do pacote lubridate. Veja [[07082023115654-instalando-pacotes-em-r|Instalando pacotes em R]] 

### **Tipos**

Há três tipos de dados em R que se referem a um instante de tempo:

- Uma data ("2016-08-16")
    
- Uma hora do dia (“20:11:59 UTC")
    
- E uma data-hora, ou seja, data mais a hora ("2018-03-31 18:15:48 UTC")
    

O horário é estimado em UTC, que, em inglês, significa Tempo Coordenado Universal. Refere-se ao padrão principal que rege os relógios e horários do mundo.

Para obter, por exemplo, a data atual, execute a função **today()**. A data é exibida no formato ano, mês e dia. 

today()

#> [1] "2021-01-20"

Para obter a data-hora atual, execute a função **now()**. Observe que a hora é exibida no segundo mais próximo. 

now()

#> [1] "2021-01-20 16:25:05 UTC"

Possivelmente, você usará uma das três seguintes formas para criar formatos data-hora ao trabalhar com R: 

- A partir de uma string
    
- A partir de uma data específica
    
- A partir de um objeto data/hora já existente
    

R cria datas no formato padrão aaaa-mm-dd.

Vamos conferi-las.

### **Como converter a partir de strings** 

Em geral, dados de data/hora aparecem como strings. É possível converter strings em datas e data-hora com as ferramentas integradas ao pacote lubridate, que automaticamente executam o formato data/hora. Antes de tudo, identifique a ordem em que ano, mês e dia aparece em suas datas. Feito isso, ordene as letras _y_, _m_ e _d_ na mesma ordem para obter o nome da função lubridate que analisará sua data. Por exemplo, para a data _2021-01-20_, use a ordem _ymd_:

ymd("2021-01-20")

Ao executar a função, R retorna a data no formato aaaa-mm-dd. 

#> [1] "2021-01-20"

O mesmo vale para qualquer ordem; por exemplo, mês, dia e ano. R ainda retorna a data no formato aaaa-mm-dd.

mdy("January 20th, 2021")

#> [1] "2021-01-20"

Ou dia, mês e ano. R ainda retorna a data no formato aaaa-mm-dd.

dmy("20-Jan-2021")

#> [1] "2021-01-20"

Essas funções também processam números sem aspas e os converte no formato aaaa-mm-dd.

ymd(20210120)

#> [1] "2021-01-20"

### **Como criar componentes de data-hora**

A função ymd() e suas variações criam datas. Para criar uma data-hora a partir de uma data, adicione um sublinhado e uma ou mais letras _h_, _m_ e _s_ (horas, minutos, segundos) ao nome da função:

ymd_hms("2021-01-20 20:11:59")

#> [1] "2021-01-20 20:11:59 UTC"

mdy_hm("01/20/2021 08:01")

#> [1] "2021-01-20 08:01:00 UTC"

### Como alternar entre objetos de data-hora que já existem** 

Por fim, você pode querer alternar entre data-hora e data.

Use a função **as_date()** para converter uma data-hora em data. Insira, por exemplo, a atual date-time—now()—entre os parênteses da função. 

as_date(now())

#> [1] "2021-01-20"

 ----
## **Referências adicionais**

Para saber mais sobre como trabalhar com datas e horas em R, confira os recursos abaixo:

- [lubridate.tidyverse](https://lubridate.tidyverse.org/index.html): esse é o registro de “lubridate” na documentação oficial do tidyverse. Nele você encontra um guia de referência abrangente sobre os diversos pacotes do tidyverse. Clique no link para obter uma visão geral dos principais conceitos e funções.

- [Datas e horas com lubridate: Folha de referências](https://rawgit.com/rstudio/cheatsheets/master/lubridate.pdf): folha de referências com um mapa detalhado de tudo o que é possível fazer com o pacote lubridate. Você não precisa saber todas as informações, mas esta é uma ótima referência para quando surgir uma dúvida sobre como trabalhar com datas e horas em R.