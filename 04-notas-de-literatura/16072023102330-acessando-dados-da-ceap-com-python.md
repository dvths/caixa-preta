---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: Python 3
  language: python
  name: python3
classe: [PYIC3]
topico: Acessando os dados da CEAP via API
nome-do-curso: Python para Inovação Cívica
instrutor: Fernanda Souza
alias: Acessando dados da CEAP com Python
---


#python_notebook #PYIC #python_pandas #dados_abertos 
____
# Acessando dados da CEAP com Python

Os dados da CEAP são separados por Ano e comprimidos no formato Zip. Eles estão disponíveis nos formatos XML, JSON, e CSV.

A URL de acesso para cada arquivo tem a seguinte estrutura:

```html
	httl://www.camara.lag.br/cotas/Ano-{ano}.{formato}.[zip]
```

- Onde:
	- `{ano}`: ano de apresentação das proposições
	- `{formato}`: pode ser ".csv", ".xml", ".json", "xlsx"
	- `[zip]`: só devemos usas quando o `{formato}` for "xml", "json" ou "csv"

- [ ] O notebook [16072023102330-acessando-dados-da-ceap-com-python](16072023102330-acessando-dados-da-ceap-com-python.ipynb) (Abra executando o comando vscode) inicia o estudo de como obter e explorar os dados. Precisa ser concluído.
____
## Referências