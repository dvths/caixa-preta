---
aliases:
  - Manter os cabeçalhos atualizados
tags:
  - python_scprapy
  - python
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Manter os cabeçalhos atualizados

Navegadores são constantemente atualizados. Os cabeçalhos padrão também mudam. Especialmente os [[23112023150741-cabeçalhos-e-user-agents-falsos#^697415|cabeçalhos e user-agents falsos]].

Muito usuários reais, normalmente, atualizam seus navegadores pouquíssimo tempo após o lançamento de uma versão estável. Portanto, como o [[23112023150741-cabeçalhos-e-user-agents-falsos#^788a1f|objetivo é convencer os navegadores de que o raspador é um usuário real]], é vital que os scrapers não muito salientes após a atualização de navegador. Ou seja, é necessário verificar e atualizar regularmente os cabeçalhos que os scrapers estão usando para ter certeza de que estão usando os cabeçalhos mais populares.

Caso contrário, o raspador poderá ser descoberto e bloqueado.



---
## Referencias