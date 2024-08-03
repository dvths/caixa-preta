---
alias: Serie é uma matriz rotulada unidimensional que pode conter qualquer tipo de dado 
---
%%
data: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#python #python_pandas_data_structures

___
# Serie é uma matriz rotulada unidimensional que pode conter qualquer tipo de dado

Uma das estruturas de dados fundamentais do pandas. Um objeto `Serie` pode se assemelhar às colunas de uma planilha, ou um [Array Unidimensional](10072023000441-array-unidimensional.md). O eixo dos rótulos são chamados de índices e podem ser nomeados ou, por padrão, seguirem a sequencia `0 len(data) -1`, chamado de `RangeIndex`, ou seja, uma série de 0 até o último elemento do conjunto de dados.

Os elementos de um objeto `Serie` podem ser de qualquer tipo, numérico, strings, floats, objetos python, etc.. Contudo, é importante buscar manter os elementos limitados a apenas um tipo de dado por uma questão de desempenho.

Podemos criar uma `Serie` de valores do tipo `int64` indexados por um rótulo da seguinte forma:

```python
import pandas as pd
serie = pd.Serie([100, 200, 3000 ], index=['A', 'B', 'C'])
```

Isso retornará uma "tabela" no seguinte formato:

| a   | 100 |
| b   | 200 |
| c   | 300 | 

---
## Referencias

- [Introdução à Estruturas de Dados do Pandas](https://pandas.pydata.org/docs/user_guide/dsintro.html)