---
aliases:
  - Relacionamentos
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
# Relacionamentos

Em modelagem de bancos de dados, o conceito de relacionamento refere-se à associação entre duas ou mais [[23112023181230-entidades|Entidades]]. Esse conceito é usado para representar como as instâncias de uma entidade estão relacionadas às instâncias de outra entidade. Os relacionamentos descrevem interações e vínculos entre diferentes entidades, contribuindo para uma compreensão mais completa e precisa do sistema que está sendo modelado.

[[23112023195552-diagramas-de-entidade-relacionamento-der#^693742|Os relacionamentos possuem Cardinalidades e podem ser de vários tipos, incluindo]]: ^18b2e4

1. **Um para Um (1:1):** Cada instância de uma entidade está associada a uma única instância da outra entidade, e vice-versa.
    
2. **Um para Muitos (1:N):** Cada instância de uma entidade pode estar associada a várias instâncias da outra entidade, mas cada instância desta última está associada a apenas uma instância da primeira.
    
3. **Muitos para Muitos (M:N):** Cada instância de uma entidade pode estar associada a várias instâncias da outra entidade, e vice-versa. Esse tipo de relacionamento é geralmente implementado usando uma tabela intermediária de associação de associação.(veja: [[23112023172911-conceito-de-normalização-de-bancos-de-dados|Conceito de Normalização de Bancos de Dados]]) 
    

Os relacionamentos são frequentemente representados em [[23112023195552-diagramas-de-entidade-relacionamento-der|Diagramas de Entidade-Relacionamento (DER)]] diagramas de entidade-relacionamento por meio de linhas que conectam as entidades envolvidas (veja: [[23112023195019-simbologia-para-modelagem-conceitual-de-bancos-de-dados|Simbologia para Modelagem conceitual de Bancos de Dados]] ). Além disso, os relacionamentos podem ter [[23112023181702-atributos|atributos]] próprios, chamados [[23112023194614-atributos-de-relacionamento|Atributos de Relacionamento]], que fornecem informações adicionais sobre a associação entre as entidades.

Os relacionamentos são cruciais para o design de bancos de dados, pois ajudam a estabelecer a [[23112023170829-integridade-referencial|Integridade Referencial]], garantindo que as informações estejam organizadas de maneira lógica e sem redundâncias. Eles são fundamentais para modelar a estrutura de dados e as interações entre as entidades em um sistema.

---
## Referencias