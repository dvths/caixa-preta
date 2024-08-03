---
aliases:
  - Instalação de requerimentos do projeto com conda
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

#python #python_ferramentas 

----
# Instalação de requerimentos com conda

Se você criar um novo ambiente conda, obterá um ambiente Python mínimo sem o pip instalado. Isso pode ser problemático se você precisar usar o pip e o arquivo requirements.txt para configurar seu projeto.

Existem vários métodos que você pode usar para resolver isso:

**Instalando o pip no ambiente.**

Se o pip estiver faltando nesse ambiente, você pode simplesmente usar o conda para instalá-lo como:

```bash
$ conda install pip
```

![](https://linuxhint.com/wp-content/uploads/2022/06/word-image-189393-2.png)  
Uma vez instalado o pip, você pode usá-lo para instalar os pacotes em seu arquivo requirements.txt.

```bash
$ pip install -r requisitos.txt
```

**A segunda solução é usar o arquivo requirements.txt para criar um ambiente pronto para uso.**

Para isso, você pode usar o sinalizador –file ao criar um ambiente com conda como:

```bash
$ conda create --name < nome_do_ambiente > --file requirements.txt
```

O Conda pegará o arquivo e criará um ambiente com os pacotes especificados.

**Usando o conda install com o –flag**

Se você criou seu ambiente, pode usar o sinalizador `--file` com o comando conda install como:

```
$ conda install --file requirements.txt
```

O comando resolverá os pacotes especificados no arquivo e os instalará no ambiente.



____
## Referencias: 

[Requisitos de instalação do Conda](https://linuxhint.com/conda-install-requirements-txt/)






