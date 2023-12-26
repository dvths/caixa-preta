---
aliases:
  - Conceito de axis no pandas
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

#não_processado
___
# Conceito de axis no pandas

Em uma estrutura tabular como o DataFrame, o conceito de `axis` (eixos) refere-se às dimensões da estrutura. Se pensarmos na estrutua tabular como um plano cartesiano, `axis=0` estaria para o eixo y assim como `axis=1` para o eixo x. Isso quer dizer que uma operação realizada no `axis=0` será aplicada ao longo da dimensão das linhas, isto é, de cima para baixo. Por outro lado, uma operação realizada no `axis=1` é aplicada na dimensão das colunas, da esquerda para direita. 

Quando determinamos o parâmetro `axis=0` no métodos `pandas.concat` estamos especificando que a concatenação será feita verticalmente, ou seja, mantemos o eixo das colunas e adicionamos linhas ao dataframe.

Utilizamos o parâmetro `ignore_index=True` para ignorar os índices dos datasets que serão concatenados, isso faz com que o `pandas` gere uma sequencia contínua de indices. Se passássemos `False`, o primeiro dataset seria indexado de 1-n, mas o segundo também e assim por diante, o que acarretaria em indices duplicados. 


---
## Referencias