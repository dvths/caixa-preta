---
topico:
  - Entendendo o básico de R
nome-do-curso: Google Data Analytics Certification
aliases:
  - Instalando pacotes em R
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

#GDCA #R 
____

# Instalando pacotes em R

Parte da razão pela qual o R se tornou tão popular é a vasta variedade de pacotes disponíveis nos repositórios CRAN e Bioconductor. Nos últimos anos, o número de pacotes cresceu exponencialmente!

Os pacotes podem ser encontrados em repositórios, que são coleções de pacotes úteis prontos para instalação. Os repositórios estão disponíveis em [**Bioconductor**](http://bioconductor.org/), [**R-Forge**](https://r-forge.r-project.org/), [**rOpenSci**](https://ropensci.org/) ou [**GitHub**](https://github.com/), mas o mais usado é o Comprehensive R Archive Network, ou [**CRAN**](https://cran.r-project.org/). O CRAN armazena códigos e documentações para que você possa instalar pacotes em seu próprio espaço do RStudio. 

## **Documentação do pacote** 

Os pacotes não incluem apenas o código, como também a documentação, que explica o autor e a função do pacote, bem como outros pacotes que é preciso baixar. No CRAN, você encontra a documentação do pacote no arquivo DESCRIPTION. 

Leia [**R Package Primer**](https://kbroman.org/pkg_primer/), de Karl Broman, para saber mais.

## **Como escolher os pacotes certos**

Com tantos pacotes disponíveis, pode não ser fácil saber quais serão os mais úteis para sua biblioteca ou diretório de pacotes instalados. Felizmente, há vários recursos incríveis por aí:

- [**Tidyverse**](https://www.tidyverse.org/): a tidyverse é uma coleção de pacotes de R desenvolvida especialmente para se trabalhar com dados. É uma biblioteca padrão para a maioria dos analistas de dados, mas você também pode baixar os pacotes individualmente. 
    
- [**Lista rápida de pacotes úteis de R**](https://support.rstudio.com/hc/en-us/articles/201057987-Quick-list-of-useful-R-packages): a lista do Suporte do RStudio sobre pacotes úteis com instruções de instalação e descrições de funcionalidades. 
    
- [**CRAN Task Views**](https://cran.r-project.org/web/views/): um índice de pacotes do CRAN classificados por tarefa. Você pode pesquisar o tipo de tarefa que precisa realizar e ele irá abrir uma página com os pacotes relacionados à tarefa pesquisada.  
    

## Instalando pacotes 

Vamos supor que você queira instalar o pacote ggplot2. Bem, nada poderia ser mais fácil. Nós simplesmente abrimos um shell do R e digitamos:

```
install.packages("ggplot2")
```

Em teoria, o pacote deveria se instalar facilmente, no entanto:

>[!warning] se você estiver usando o Linux e não tiver acesso de root, esse comando não funcionará. Você será solicitado a selecionar o espelho local, ou seja, qual servidor você 


## Instalando pacotes sem acesso de root

Primeiro, você precisa designar um diretório onde armazenará os pacotes baixados. Na minha máquina, uso o diretório `/data/Rpackages/`

Depois de criar um diretório de pacotes, para instalar um pacote, usamos o comando:

```
install.packages("ggplot2", lib="/data/Rpackages/")
library(ggplot2, lib.loc="/data/Rpackages/")
```

É um pouco incômodo ter que digitar `/data/Rpackages/` o tempo todo. Para evitar esse fardo, criamos um arquivo .Renviron em nossa área de usuário e adicionamos a linha `R_LIBS=/data/Rpackages/` nele. Isso significa que sempre que você iniciar o R, o diretório `/data/Rpackages/` será adicionado à lista de locais para procurar por pacotes R e, portanto:

```
install.packages("ggplot2")
library(ggplot2)
```

Toda vez que você instala um pacote R, é perguntado qual repositório o R deve usar. Para configurar o repositório e evitar ter que especificar isso a cada instalação de pacote, simplesmente:

crie um arquivo .Rprofile em sua área de usuário.
Adicione o seguinte trecho de código a ele:
```
cat(".Rprofile: Configurando o repositório do Reino Unido\n")

r = getOption("repos") # define o repositório do Reino Unido para o CRAN

r["CRAN"] = "http://cran.uk.r-project.org"

options(repos = r)

rm(r)
```

Encontrei essa dica em uma resposta no [stackoverflow](https://stackoverflow.com/questions/1189759/expert-r-users-whats-in-your-rprofile/1189826#1189826)

## Instalando pacotes com Anaconda

Os pacotes de linguagem R estão disponíveis para instalação com conda em [http://repo.anaconda.com/pkgs/r/](http://repo.anaconda.com/pkgs/r/) . Você pode instalar qualquer desses pacotes de linguagem R em seu ambiente atual com o comando conda `conda install -c r package-name`.

Muitos pacotes Comprehensive R Archive Network (CRAN) são disponível como pacotes conda. Anaconda não fornece compilações de todo o repositório CRAN, então há alguns pacotes no CRAN que não estão disponíveis como pacotes conda.

Você também pode procurar qualquer pacote R se souber o nome, como `conda search -f r-EXACTNAME`. Substituir EXACTNAME pelo nome do pacote CRAN ou MRAN R desejado. Por exemplo, para rbokeh, você usaria `conda search -f r-rbokeh`.

## Pacote R Essentials

Em vez de instalar cada pacote de linguagem R individualmente, você pode obter o pacote R Essentials. Inclui aproximadamente 80 dos mais populares pacotes científicos para a linguagem de programação R.

Você pode instalar o pacote R Essentials com este comando:

```bash
$ conda install -c r r-essentials
```

---
## Referencias

- [Documentação Anaconda](https://docs.anaconda.com/free/anaconda/reference/packages/r-language-pkg-docs/)
