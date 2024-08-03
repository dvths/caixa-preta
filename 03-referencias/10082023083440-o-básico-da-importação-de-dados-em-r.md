---
topico:
  - Entendendo o básico de R
nome-do-curso: Google Data Analytics Certification
aliases:
  - O básico da importação de dados em R
instrutor: 
tags:
  - GDCA
  - R
  - R_imports
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

# O básico da importação de dados em R

A instalação padrão de R vem com um número de conjuntos de dados pré-carregados para praticar. Essa é uma ótima maneira de desenvolver habilidades em R e aprender sobre importantes funções de análise de dados. Além disso, muitos tutoriais e recursos online usam esses conjuntos de dados de amostra para ensinar conceitos de codificação em R. 

Você pode usar a função **data()** para carregar esses conjuntos de dados em R. Se você executar a função data sem um argumento, R vai exibir uma lista de todos os conjuntos de dados disponíveis. 

data()

Isso inclui uma série de conjuntos de dados pré-carregados do pacote _datasets._

![Image of the names of preloaded datasets in the RStudio viewer](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/PhGaBTlcTqORmgU5XP6jSg_ebb5d20662444ab2bca76352ee5a256e_Screen-Shot-2021-01-22-at-11.39.53-AM.png?expiry=1691798400000&hmac=ZUWTGvxpTrZ5ekKRUp-Fqp_FfpXwW37BkNJyxWbosDY)

Se você quiser carregar um conjunto de dados específico, é só colocar o nome dele no parêntesis da função data(). Por exemplo, vamos carregar o conjunto de dados _mtcars_, que contém informações sobre os carros que apareceram nas edições passadas da revista _Motor Trend_. 

data(mtcars)

Ao executá-la, R vai carregar o conjunto de dados. O conjunto de dados também vai aparecer no painel Ambiente (Environment) do seu RStudio. O painel Ambiente exibe os nomes dos objetos de dados, tais como estruturas de dados e variáveis, que você tem disponíveis no seu espaço de trabalho atual. Nessa imagem, o _mtcars_ aparece na quinta linha do painel. R nos diz que ele contém 32 observações e 11 variáveis.

![Image of the names of loaded datasets in the environment pane of RStudio.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/7R_zhy6aSKKf84cumgiiOQ_6fbbeda64ee1472691965bc9bb309cee_Screen-Shot-2021-01-22-at-12.27.39-PM.png?expiry=1691798400000&hmac=3FMG8U5oMu477dI04vq-RKZfWJ7DKddQ3Wui4nxDg6s)

Agora que o conjunto de dados está carregado, você pode obter uma prévia dele no painel do console de R. É só digitar o nome dele...

mtcars

... e então pressionar ctrl (ou cmnd) e enter.

![screenshot of dataset preview display](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/yh5xum5tSnKecbpubbpyxg_d7e1505d50fd4d73aa0ef186cd2d56d5_Screen-Shot-2021-03-15-at-3.36.50-PM.png?expiry=1691798400000&hmac=udlUNDbMsOE_xjSSMQtWSM0mZm6uOG0cvzsgcMkf6h0)

Você também pode exibir o conjunto de dados clicando diretamente no nome do conjunto de dados no painel Ambiente. Portanto, se você clicar em **mtcars** no painel Ambiente, R vai executar automaticamente a função View() e exibir o conjunto de dados no visualizador de RStudio.

![Image of the first ten rows of the “mtcars” dataset in the RStudio data viewer.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/32SAqnVYSw-kgKp1WJsPeg_a22883468a134223b74b1f39c5f61655_Screen-Shot-2021-01-22-at-12.10.49-PM.png?expiry=1691798400000&hmac=ImuGTFNZ-52QVAZ8Qb8G6ys--WNzO2kaVEtkFELpmNc)

Tente fazer a experiência com outros conjuntos de dados na lista se você quiser um pouco mais de prática.

## **O pacote readr**

Além de usar os conjuntos de dados embutidos em R, também é útil importar dados de outras fontes para praticar ou analisar. O pacote readr de R é uma ótima ferramenta para a leitura de dados retangulares. Os dados retangulares são dados que se encaixam perfeitamente dentro de um retângulo de linhas e colunas, com cada coluna se referindo a uma única variável e cada linha se referindo a uma única observação. 

Aqui estão alguns exemplos de tipos de arquivos que armazenam dados retangulares:

- **.csv (valores separados por vírgula)**: um arquivo .csv é um arquivo de texto simples que contém uma lista de dados. Geralmente, esses arquivos usam vírgulas para separar (ou delimitar) dados, mas às vezes eles usam outros caracteres, como ponto e vírgula. 
    
- **.tsv (valores separados por tabulação)**: um arquivo .tsv armazena uma tabela de dados em que as colunas de dados são separadas por tabulações. Por exemplo, um conjunto de dados em tabela, ou planilha de dados. 
    
- **.fwf (arquivos com largura ajustada)**: um arquivo .fwf tem um formato específico que permite o salvamento de dados textuais de uma maneira organizada. 
    
- **.log**: um arquivo .log é um arquivo gerado pelo computador que registra eventos dos sistemas operacionais e outros programas de software.
    

A base de R possui funções para ler os arquivos, mas as funções equivalentes no readr são, tipicamente, _muito_ mais rápidas. Elas também produzem tibbles, que são mais fáceis de usar e ler. 

O pacote readr é parte do centro do tidyverse. Então, se você já instalou o tidyverse, você tem o que precisa para começar a trabalhar com o readr. Se você ainda não instalou o tidyverse, você pode fazer isso agora. 

### **Funções de readr**

A meta de readr é fornecer um meio rápido e amigável para ler dados retangulares. O readr dá suporte a várias funções read_. Cada função se refere a um formato de arquivo específico.

- read_csv(): arquivos com valores separados por vírgula (.csv)
    
- read_tsv(): arquivos com valores separados por tabulação
    
- read_delim(): arquivos delimitados em forma geral
    
- read_fwf(): arquivos com largura ajustada
    
- read_table(): arquivos tabulares onde as colunas são separadas por um espaço em branco
    
- read_log(): arquivos de log da web
    

Essas funções todas possuem sintaxe similar, portanto uma vez que você aprenda como usar uma delas, você pode usar esse conhecimento nas outras. Esse texto vai focar na função read)_csv(), uma vez que os arquivos .csv são as formas mais comuns de armazenamento de dados e você vai trabalhar frequentemente com eles.

Na maioria dos casos, essas funções vão funcionar automaticamente: você vai fornecer um caminho para um arquivo, executar a função, e vai obter um tibble que exibe os dados no arquivo. Por trás das câmeras, o readr analisa o arquivo como um todo e especifica como cada coluna pode ser convertida de um caractere de vetor para um tipo de dado mais apropriado.

### **Como ler um arquivo .csv com readr** 

O pacote readr vem com alguns arquivos de amostra de conjuntos de dados embutidos que você pode usar como exemplos de código. Para listar esses arquivos de amostra, você pode executar a função readr_example() sem argumentos. 

readr_example()

[1] “challenge.csv”     “epa78.txt”        “example.log”      

[4] “fwf-sample.txt”   “massey-rating.txt” “mtcars.csv”       

[7] “mtcars.csv.bz2”    “mtcars.csv.zip”

O arquivo “mtcars.csv” se refere ao conjunto de dados _mtcars_ que foi mencionado mais cedo. Vamos usar a função **read_csv()** para ler o arquivo “mtcars.csv”, como exemplo. No parêntesis, você vai fornecer o caminho para o arquivo. Nesse caso, é o “readr_example(“mtcars.csv”). 

read_csv(readr_example(“mtcars.csv”))

Quando você executar a função, R vai imprimir na tela uma especificação de coluna que fornece o nome e o tipo de cada coluna.

![screenshot of column specification](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/CMuq5sbuRZmLqubG7nWZ_g_44b244d4cac447e191fc0d59b94d205d_Screen-Shot-2021-03-15-at-3.42.43-PM.png?expiry=1691798400000&hmac=kT_tYSa6BNZOGWYp_HvV_YpD1i2K4NACKfqMOCA_M8s)

R também elabora um tibble

![screenshot of a tibble of the first 10 rows. 22 more rows are hidden](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/PgvbBFMSRGCL2wRTEtRgsA_1d5362c17f2249dab6a936e09520d84a_Screen-Shot-2021-03-15-at-3.38.20-PM.png?expiry=1691798400000&hmac=U-x5w7ZvLWk990fAW1Yk7l901V964_EqOwqBLAXq3jE)

## **O pacote readxl**

Para importar planilhas de dados para R, você pode usar o pacote readxl. Esse pacote facilita a transferência de dados de Excel para R. O readxl oferece suporte tanto para os arquivos dos antigos formatos .xls quanto para os formatos modernos baseados em xml e .xls. 

O pacote readxl é parte do tidyverse, mas não é um pacote do núcleo de tidyverse, portanto você precisa baixar o readxl em R por meio da função library().  

library(readxl)

### **Como ler um arquivo .csv com readxl**

Do mesmo jeito que o pacote readr, readxl vem com alguns arquivos de amostra de conjuntos de dados embutidos que você pode usar para praticar. Você pode executar o código readxl_example() para ver a lista.  

Você pode usar a função **read_excel()** para ler um arquivo de planilha da mesma forma que você usou a função read_csv() para ler um arquivo .csv. O código para ler o arquivo de exemplo “type-me.xlsx” inclui o caminho para o arquivo nos parênteses da função.  

read_excel(readxl_example(“type-me.xlsx”))

Você pode usar a função  [excel_sheets()](https://readxl.tidyverse.org/reference/excel_sheets.html)

para listar os nomes de cada planilha individualmente. 

 excel_sheets(readxl_example(“type-me.xlsx”))

[1] “logical_coercion” “numeric_coercion” “date_coercion” “text_coercion”

Você também pode especificar uma planilha por nome ou número.  É só digitar “sheet =” seguido pelo nome ou número da planilha. Por exemplo, você pode usar a planilha chamada “numeric_coercion” da lista acima. 

read_excel(readxl_example(“type-me.xlsx”), sheet =“numeric_coercion”)

Quando você executa a função, R retorna um tibble da planilha.

![screenshot of a tibble with 7 rows](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/zqCV7mPlQl-gle5j5ZJfEg_ecec2bacbde34a2caa93c8518c8f95a4_Screen-Shot-2021-03-15-at-3.40.40-PM.png?expiry=1691798400000&hmac=dF67X2i9jp23n6ssyn3Wbxu3Lz2tMzV7WlhATY2YJAk)

---
## Referências adicionais

- Se você quer aprender como usar as funções de readr para trabalhar com arquivos mais complexos, dê uma olhada no [Capítulo importação de dados](https://r4ds.had.co.nz/data-import.html) do livro R for Data Science. Ele explora alguns dos problemas mais comuns que você pode encontrar quando ler os arquivos, e como usar readr para lidar com esses problemas. 
    

- A entrada de  [readxl](https://readxl.tidyverse.org/) na documentação do tydiverse dá uma boa noção das funções básicas de readxl, fornece uma explicação detalhada de como o pacote funciona e os conceitos de codificação por trás dele, e oferece links para outros recursos úteis.
    
- O pacote “datasets” de R contém muitos conjunto de dados úteis pré-carregados. Confira  [O Pacote de datasets de R](https://stat.ethz.ch/R-manual/R-devel/library/datasets/html/00Index.html) para ver uma lista. Ela inclui links para descrições detalhadas de cada conjunto de dados.