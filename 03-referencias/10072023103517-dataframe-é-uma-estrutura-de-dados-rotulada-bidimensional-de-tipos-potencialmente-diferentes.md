---
alias: DataFrame é uma estrutura de dados rotulada bidimensional de tipos potencialmente diferentes 
---
%%
data: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#python #python_pandas_data_structures
___
# DataFrame é uma estrutura de dados rotulada bidimensional de tipos potencialmente diferentes

Um DataFrame é uma das estruturas de dados fundamentais do pandas. Um objeto DataFrame pode se assemelhar com uma planilha ou tabela SQL, onde as colunas são os rótulos e as linhas são os registros da tabela, ou a um Array Bidimensional. 

Podemos compreender um DataFrame como com um conjunto de objetos do tipo `Serie`. [Serie é uma matriz rotulada unidimensional que pode conter qualquer tipo de dado](09072023234351-serie-é-uma-matriz-rotulada-unidimensional-que-pode-conter-qualquer-tipo-de-dado.md), outra estrutura de dados basilar do pandas.

O DataFrame, pode receber diferentes tipos de dados como entrada:
- Dicts de 1D ndarrays (numpy), dicts, lists, Series
- arrays 2D do numpay (numpy.ndarrays)
- [Matrizes estruturadas do numpy](https://numpy.org/doc/stable/user/basics.rec.html)
- Outro DataFrame

Assim como as Series, o objeto DataFrame é indexado por padrão com um `RangeIndex`, uma sequencia de 0 até o último elemento do conjunto de dados. Contudo, é uma estrutura que já possui rótulos.

Um DataFrame pode ser criado a partir de um dicionário:

```python
import pandas as pd

df = pd.DataFrame({"Aluno": ["Tiago", "Laís", "Aninha"], "Notas": [10, 10 , 10]})

print(df)
```

O retorno será:
   Avaliações  Media_final
0           5         8.50
1           5         9.35
2           5         9.47

Note que os registros são indexados por um `RangeIndex`. Se quisermos indexar os registros com um valor que nos ajude a compreender esses registros, podemos usar o parâmetro nomeado `index` :

```python
df = pd.DataFrame({"Avaliações":[5, 5, 5,],
				   "Media_final":[8.5, 9.35, 9.47]},
				   index=["Tiago", "Ana", "Lais"])
```

Que nos retornará:
     Avaliações  Media_final
Tiago           5         8.50
Ana             5         9.35
Lais            5         9.47

---
## Referencias
- [Introdução às Estruturas de Dados do Pandas](https://pandas.pydata.org/docs/user_guide/dsintro.html#dataframe)