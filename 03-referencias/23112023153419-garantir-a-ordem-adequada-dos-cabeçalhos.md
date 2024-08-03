---
aliases:
  - Garantir a ordem adequada dos cabeçalhos
tags:
  - python_scprapy
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%

___
# Garantir a ordem adequada dos cabeçalhos

Cada navegador tem uma ordem específica na qual envia cabeçalhos, portanto, ao enviar uma solicitação, o raspador deve enviá-los na ordem correta. Se isso não for feito, ele poderá ser bloqueado.

O que torna esse problema complicado, é que muitos clientes HTTP implementam suas próprias ordens de cabeçalho e não respeitam as ordens de cabeçalho definidas na spider. Por exemplo, a biblioteca `requests` do python nem sempre respeita a ordem dos cabeçalhos que é definida previamente dependendo da forma como ele está sendo usado. 

>[!tip] Para saber mais sobre esse assunto, consute a [ISSUE 5814](https://github.com/psf/requests/issues/5814)

Evitar isso exige se sertificar que o cliente HTTP usado respeita a ordem do cabeçalho definida no raspador e não a substitui por outra ordem.

---
## Referencias