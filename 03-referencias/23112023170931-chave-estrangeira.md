---
aliases:
  - Chave Estrangeira
tags:
  - sql_integridade_referencial
  - sql
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Chave Estrangeira

A chave estrangeira representa a forma como as tabelas se relacionam entre si em um banco de dados relaciona.

É a partir da definição de uma chave estrangeira que uma relação consistente entre as tabelas acontece.

Uma chave estrangeira é definida da seguinte forma utilizando a linguagem SQL:


(Veja: [[06112023212620-sql-data-definition-language-ddl|Sql Data Definition Language DDL]])

```sql
CREATE TABLE Vendas(
  vendedor_id INT,
  produto_id INT,
  data_venda DATE,
  quantidade_vendida INT,
  PRIMARY KEY (vendedor_id, produto_id, data_venda),
  CONSTRAINT fk_vendedor
    FOREIGN KEY (vendedor_id) REFERENCES Vendedores(vendedor_id),
  CONSTRAINT fk_produto
    FOREIGN KEY (produto_id) REFERENCES Produtos(produto_id)
);
```

É uma boa prática nomear a chave estrangeira com a palavra chave `CONSTRAINT`, ela é utilizada para definir propriedades, como o comportamento de exclusão em cascata, por exemplo, e nomear restrições, como no caso do código acima.

Definimos duas chaves estrangeiras com a restrição de nome: `fk_vendedor` e `fk_produto`. A instrução `FOREIGN KEY`, indica que os campos `vendedor_id` e `produto_id` fazem referencia às colunas com os respectivos nomes das tabelas `Vendedores` e `Produtos`. Por fim, definimos uma
[[23112023171243-chave-composta|Chave Composta]] para essa tabela, formada pelas colunas `vendedor_id`, `produto_id` e `data_venda`.

Portanto, o papel da chave estrangeira é garantir a
[[23112023170829-integridade-referencial|Integridade Referencial]] entre as tabelas preservando a consistência dos dados.


---
## Referencias