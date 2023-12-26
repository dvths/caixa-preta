---
aliases:
  - Estrutura básica para uma projeto de ciência de dados
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

#python #python_ferramentas #python_data_analysis

----
# Estrutura básica para uma projeto de ciência de dados

## Estrutura para Análise de Dados:

```
project_name/
|-- data/
|   |-- raw/                           # Dados brutos e não processados
|   |-- processed/                     # Dados processados e limpos
|   |-- external/                      # Dados de terceiros, se houver
|
|-- notebooks/                         # Jupyter notebooks ou outros notebooks utilizados na análise
|
|-- project_name/(opcional)            # Código-fonte do projeto
|   |-- data/                  d        # Scripts para carregar e processar dados
|   |-- visualization/                 # Scripts para criar visualizações dos dados
|   |-- utils/                         # Scripts com funções auxiliares e utilitários
|-- reports/(opcional)                 # Relatórios e visualizações gerados
|-- setup/
|   |-- Dockerfile (opicional)
|   |-- docker_compose.yml (opicional)
|   |-- setup.sh                       # Executa e instala o ambiente virtual e as dependências 
|   |-- requirements.txt               # Lista de dependências do Python para o projeto
|-- README.md       
```

## Explicação da estrutura:

- **data/**: Este diretório é destinado ao armazenamento de dados relevantes para o projeto. Os dados brutos e não processados são armazenados em "raw/", os dados processados e limpos são armazenados em "processed/", e quaisquer dados de terceiros que você precise incorporar podem ser armazenados em "external/".

- **notebooks/**: Neste diretório, você pode armazenar seus notebooks Jupyter ou outros notebooks utilizados para a análise exploratória de dados, visualizações e desenvolvimento de modelos.

- **project_name/**: Este diretório é destinado ao código-fonte do projeto. Por padrão, o pacote Python principal recebe o mesmo nome do projeto. Ele é dividido em subdiretórios com diferentes propósitos. Os scripts em "src/data/" são responsáveis por carregar e processar os dados, os scripts em "src/models/" são responsáveis pela construção de modelos de machine learning, os scripts em "src/visualization/" são responsáveis pela criação de visualizações dos dados e os scripts em "src/utils/" contêm funções auxiliares e utilitários.

- **reports/**: Aqui, você pode armazenar relatórios, visualizações ou qualquer tipo de saída gerada durante o projeto.

- **setup/**:
	- **setup.sh**: Ao executar este script será criado o ambiente virtual e instalação de todas as dependências necessárias para o projeto. O script deve seguir mais ou menos este padrão dependendo de como está configurando seu ambiente:
	
	```bash
	#!/bin/bash
	sudo  install python3-pip -y# create the virutual environment in the project root
	pip3 install virtualenv
	virtualenv -p python3 project_name_env# activate the virtual environment
	source project_name_env/bin/activate# install packages you will need
	pip3 install -r setup/requirements.txt
	``` 

	- **requirements.txt**: Um arquivo que lista todas as dependências do Python necessárias para reproduzir o ambiente de trabalho. Isso facilita a replicação do projeto em outras máquinas.

**README.md**: Este arquivo é um documento de texto em formato Markdown que fornece uma visão geral do projeto, sua finalidade, instruções de uso e outras informações relevantes.

## Estrutura para projetos de ciência de dados

Para projetos mais complexos envolvendo ML e outras eventuais necessidades, eu encontrei a tradução de alguns artigos de Khuyen Tran que Henrique Branco compilou em um livro online chamado [Construindo uma solução robusta e escalável em ciência de dados](https://henriqueajnb.github.io/data-science-escalavel/README.html).

O template proposto por Khuyen Tran segue o seguinte padrão e pode ser encontrado [aqui](https://github.com/khuyentran1401/data-science-template/blob/dvc-poetry/README.md)

```
.
├── config                      
│   ├── main.yaml                   # Arquivo de configuração principal
│   ├── model                       # Configurações para treinamento de modelo
│   │   ├── model1.yaml             # Primeira variação dos parametros de treinamento de modelo
│   │   └── model2.yaml             # Segunda variação dos parametros de treinamento de modelo
│   └── process                     # Configurações para processamento de dados
│       ├── process1.yaml           # Primeira variação dos parametros de processamento de dados
│       └── process2.yaml           # Segunda variação dos parametros de processamento de dados
├── data            
│   ├── final                       # Dados após o treinamento do modelo
│   ├── processed                   # Dados após o processamento dos dados
│   ├── raw                         # Dados brutos
│   └── raw.dvc                     # Arquivo DVC dos data/raw
├── docs                            # Documentação do projeto
├── .gitignore                      # Arquivos que o git irá ignorar
├── Makefile                        # Armazena comandos úteis para configuração do ambiente
├── models                          # Armazena os modelos
├── notebooks                       # Armazena os notebooks
├── .pre-commit-config.yaml         # Configurações par o pre-commit
├── pyproject.toml                  # Dependencias para o poetry
├── README.md                       # Descrição do projeto
├── src                             # Armazena o código fonte
│   ├── __init__.py                 # Torna src um módulo Python  
│   ├── process.py                  # Processo dos dados depois do treinamento do modelo 
│   └── train_model.py              # Treinamento do modelo
└── tests                           # Armazena os testes
    ├── __init__.py                 # Torna o diretório de testes um módulo Python  
    ├── test_process.py             # Testa as funções para process.py
    └── test_train_model.py         # Testa as funções para train_model.py
```

Uma explicação sobre o template acima pode ser visto no vídeo:
<iframe width="560" height="315" src="https://www.youtube.com/embed/TzvcPi3nsdw?si=-YWlVQlPesccptwz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


____
## Referencias: 




