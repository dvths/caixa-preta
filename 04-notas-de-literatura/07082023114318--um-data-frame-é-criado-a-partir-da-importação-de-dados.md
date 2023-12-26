---
topico:
  - Entendendo o básico de R
nome-do-curso: Google Data Analytics Certification
aliases:
  - Um data frame é criado a partir da importação de dados
instrutor: 
tags:
  - GDCA
  - R
  - R_estrutura_de_dados
  - R_data_frames
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

#  Um data frame é criado a partir da importação de dados

Use a função **dir.create** para criar uma nova pasta, ou diretório, para guardar seus arquivos. Insira o nome da pasta entre os parênteses da função.

dir.create ("destination_folder")

Use a função **file.create()** para criar um arquivo em branco. Insira o nome e o tipo do arquivo entre os parênteses da função. Os tipos do seu arquivo serão, em geral, como .txt, .docx ou .csv.  

file.create (“new_text_file.txt”) 

file.create (“new_word_file.docx”) 

file.create (“new_csv_file.csv”) 

Se o arquivo for criado ao executar a função, R retornará um valor TRUE (caso contrário, retornará FALSE). 

file.create (“new_csv_file.csv”)

[1] TRUE 

É possível copiar um arquivo com a função **file.copy()**. Entre os parênteses, insira o nome do arquivo a ser copiado e, em seguida, adicione uma vírgula e o nome da pasta de destino na qual o arquivo será copiado. 

file.copy (“new_text_file.txt” , “destination_folder”)

--- 
## Referências adicionais

[Data Wrangling](http://statseducation.com/Introduction-to-R/modules/getting%20data/data-wrangling/)