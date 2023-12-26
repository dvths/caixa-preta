---
classe: [1_LITERATURA]
titulo_livro: 
ano:  
autor: 
alias: Como criar ambientes R com Anaconda
topico:
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%


---
# Como criar ambientes R com Anaconda

- Criando o ambiente:
```bash
$ conda create -n r-env r-essentials r-base
```

Obs: [[07082023115654-instalando-pacotes-em-r#Pacote R Essentials|Aqui a instalação é feita juntamente com o pacote `r-essentials` que contém aproximadamente 80 dos pacotes mais utilizado na linguagem.]]

- Acessando o ambiente criado:
```bash
$ conda activate r-env
```

- Listando os pacotes do ambiente:
```bash
$ conda list
```

**Veja:** [[07082023115654-instalando-pacotes-em-r#Instalando pacotes com Anaconda|Instalando pacotes em R]]

----
## Referências 

- [Documentação do Anaconda](https://docs.anaconda.com/free/anaconda/packages/using-r-language/)