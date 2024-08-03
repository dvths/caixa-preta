---
classe: [PYIC4]
topico: Receita Federal e CEAP
nome-do-curso: Python para Inovação Cívica
alias: Cruzar dados da Receita Federal com os da CEAP usando merge do pandas 
instrutor:
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#PYIC 
____

# Cruzar dados da Receita Federal com os da CEAP usando merge do pandas 

- Como obter os dados da receita?
- Uma vez com os dados da receita federal, precisaremos limpá-los
- Como cruzar dados com pandas?
- Como cruzar os dois datasets: CEAP e RF

## Dividir as responsabilidade da análise em scripts

- Como criar uma estrutura de arquivos para um projeto de análise?
- Exportar o csv final para análise.
