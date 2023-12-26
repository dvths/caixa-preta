---
aliases:
  - Regras da Terceira Forma Normal
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
# Regras da Terceira Forma Normal

> [!summary]
>
> - A 1FN se preocupa com a atomicidade dos dados e com o identificador único, a [[23112023171427-chave-primária|Chave Primária]].
> - A 2FN garante que as colunas não-chave dependam diretamente da chave primaria.
> - A 3FN garante que nenhuma coluna não-chave dependam de outras colunas não-chave. Isto é, a 2FN não garante que as colunas não chave tenham grau de dependência entre si. A dependência entre duas colunas não chave, é chamada de **dependência transitiva** e a 3FN normaliza esses casos.

A terceira forna normal (3NF) estabelece que cada coluna de uma tabela deve depender apenas da [[23112023171427-chave-primária|Chave Primária]] da tabela ou de outras colunas que já dependem de suas chaves primárias.

Isso significa que as informações devem estar organizadas de maneira a evitar _dependências transitivas_ entre as colunas e garantir a ausência de redundância e inconsistência nos dados.

As regras da 3NF são:

1. A tabela deve estar conforme as [[23112023173238-regras-da-segunda-forma-normal|Regras da Segunda Forma Normal]];

2. Cada coluna da tabela deve depender apenas da chave primária da tabela ou de outras colunas que já dependam totalmente de suas chaves primárias.

3. Não deve haver dependências transitivas entre as colunas. Uma dependência transitiva ocorre quando uma coluna não chave depende de outra coluna não chave que, por sua vez depende da chave primária. Por exemplo:

```
| ID | Nome | Endereço | Cidade | Estado |
```

Nesta tabela, Endereço depende de Cidade e Estado, ou seja, não depende diretamente da chave primária.

Essa dependência transitiva pode ser resolvida criando um nova tabela de Estados, com ID e Nome, e substituindo os valores na tabela Estado atual pelos ID de cada estado correspondente da nova tabela.

A terceira forma norma garante a consistência dos dados. Não se chega a esse nível de normalização sem ter passado pelas duas primeira duas forma normais.

---
## Referencias