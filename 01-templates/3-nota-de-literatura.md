---
titulo_livro: 
ano: 
autor: 
aliases:
  - <%tp.file.title%>
topico: 
tags:
---
%%
cData:: `=dateformat(this.file.ctime, "dd-MM-yyyy")`
mData:: `=dateformat(this.file.mtime, "dd-MM-yyyy")`
%%
<%tp.file.rename(tp.user.setTitle(tp.file.title))%>

---
# <%tp.file.title%>

<%tp.file.cursor(1)%>



----
## Referências 