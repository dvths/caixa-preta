---
aliases:
  - Regras da Segunda Forma Normal
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
# Regras da Segunda Forma Normal

> [!summary] 
> Seguir as regras da 2NF garante que as informações de uma tabela estejam organizadas de maneira que cada coluna esteja relacionada diretamente com a chave primária da tabela. Isso evita duplicações e assegura que cada tabela possua informações consistentes, seguras e relevantes.

A segunda forma normal (2NF), estabelece que cada coluna da tabela deve depender completamente da [[23112023171427-chave-primária|Chave Primária]] da tabela. Ou seja, deve estar diretamente relacionada com a chave primária e não com chave parcial ou outras colunas.

As regras da segunda forma normal são:

1. A tabela deve seguir as [[23112023172230-primeira-forma-normal|Regras da Primeira Forma Normal]];

2. Todas as colunas da tabela que não fazem parte da chave primária devem depender completamente da chave primária;

3. Se uma tabela tiver mais de uma [[23112023171814-chave-candidata|Chave Candidata]] (conjunto de colunas que podem ser usadas como chave primária), todas as colunas que não fazem parte de todas as chaves candidatas devem depender diretamente da chave primária.

4. Se uma tabela tiver uma [[23112023171243-chave-composta|Chave Composta]] (composta por duas ou mais colunas), cada coluna que não faz parte da chave composta devem depender diretamente da chave composta.



---
## Referencias