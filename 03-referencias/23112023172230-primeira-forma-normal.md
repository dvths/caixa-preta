---
aliases:
  - Regras da Primeira Forma Normal
tags:
  - sql
  - sql_normalização
  - sql_integridade_referencial
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Primeira Forma Normal

> [!summary]  
> A primeira forma nomal (1NF) estabelece que todas as colunas de uma tabela devem conter apenas valores atômicos (indivisíveis). E que cada linha  deve ser única e identificável por uma [[23112023171427-chave-primária|Chave Primária]].
>
> Seguir as regras da primeira forma normal, podemos garantir que as informações armazenadas sejam consistentes, fácil de manter e acessar.

As regras que especificam a 1NF são:

1. Cada tabela deve ter uma chave primária única que identifica cada registro da tabela.
2. Cada coluna da tabela deve conter apenas valores atômicos, isto é, valores
   que não podem ser divididos em partes menores.
3. Não deve haver repetição de grupos de dados em uma mesma linha da tabela.
   Cada linha deve conter informações únicas e distintas.
4. Cada coluna deve ter um nome único e significativo, que descreva o conteúdo
   da coluna.
5. A ordem das linhas de das colunas não devem afetar o conteúdo da tabela.



---
## Referencias