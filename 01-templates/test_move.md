---
curso: 
tags:
---
<%* 
let dv = DataviewAPI;

let pages = await Promise.all(
  dv.pages('"A-origem"').map(async (p) => {
    if (p.tags == "C") {
      await tp.file.move("/C-armazenamento/" + tp.file.title);
    }
    return p;
  })
);
%>


let dv = DataviewAPI

let pages = dv.pages('"A-origem"').filter(p => {
	if (p.tags == "C") {
		await tp.file.move("/C-armazenamento/" + tp.file.title);
	}
});
