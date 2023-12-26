---
aliases:
  - Atributos Calculados
tags:
  - sql
  - modelagem_de_databases
  - databases_relacionais
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Atributos Calculados

Atributos calculados são atributos em um banco de dados cujos valores são derivados ou calculados dinamicamente com base em expressões ou operações matemáticas aplicadas a outros atributos na mesma entidade. Esses atributos não são armazenados fisicamente no banco de dados, mas são calculados conforme necessário, geralmente durante consultas ou operações no sistema.

Por exemplo, considere uma entidade "Funcionário" que possui atributos como "Salário Base" e "Bônus". Um atributo calculado, como "Salário Total", poderia ser definido como a soma do salário base e do bônus. Nesse caso, o valor do "Salário Total" não seria armazenado fisicamente na base de dados, mas seria calculado dinamicamente quando necessário, com base nos valores dos atributos "Salário Base" e "Bônus".

A utilização de atributos calculados pode ser benéfica em situações em que é mais eficiente calcular o valor durante a execução de uma consulta do que armazená-lo fisicamente e atualizá-lo sempre que os valores subjacentes mudam. Isso pode economizar espaço de armazenamento e garantir que os dados estejam sempre atualizados.

Em sistemas de banco de dados, os atributos calculados são comumente implementados usando expressões ou fórmulas definidas no esquema do banco de dados ou durante a execução de [[DML]]. Esses atributos adicionam flexibilidade ao modelo de dados, permitindo que certos valores sejam derivados dinamicamente com base em regras específicas.


---
## Referencias