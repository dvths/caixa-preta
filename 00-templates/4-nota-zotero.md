ano:: {{date | format("YYYY")}}
autor:: {{authors}}{{directors}}
titulo do livro:: {{bookTitle}}
seção:: {{title}}
url: {{url}}
zotero link: {{pdfZoteroLink}}

{% for annotation in annotations -%} 
{%- if annotation.annotatedText -%} 
>[!cite]  {{annotation.annotatedText}}”{% if annotation.color %} {{annotation.colorCategory}} {{annotation.type | capitalize}} {% else %} {{annotation.type | capitalize}} {% endif %}[Page {{annotation.page}}](zotero://open-pdf/library/items/{{annotation.attachment.itemKey}}?page={{annotation.page}}&annotation={{annotation.id}}) 

{%- endif %} 
{%- if annotation.imageRelativePath -%}
![[{{annotation.imageRelativePath}}]] {%- endif %} 
{% if annotation.comment %} 
{{annotation.comment}} 
{% endif %} 
{% endfor -%}

---


