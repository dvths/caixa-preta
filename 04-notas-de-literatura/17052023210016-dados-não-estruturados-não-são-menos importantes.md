---
alias: Dados não estruturados não são menos importantes
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

---
# Dados não estruturados não são menos importantes.

Os dados não estruturados, não serão o foco dos estudos por enquanto, contudo, é importante ter em mente que [[17052023175822-a-forma-como-os-dados-estão-estruturados-define-a-forma-como-trabalharemos-com-eles|a forma como os dados estão estruturados define a forma como trabalharemos com eles]].

Os dados não estruturados são caracterizados por possuírem, além da estrutura complexa:

- Variedade de formatos:
	- Grafos 
	- JSON (Javascript Object Notation)
	- XML (eXtendible Markup Language)
- Maior Flexibilidade: 
	- Possuem uma estrutura mínima que não necessariamente relaciona os dados entre si 
	- É possível armazenar dados de qualquer tipo (vídeos, áudios, texto, imagens, etc)
- Escalabilidade:
	- Como os dados não são relacionados e não possuem uma restrição de tipos, esse formato pode possuir enormes volumes de dados
- Necessidade de análise avançada
	- Para explorar dados não estruturados, um conjunto específico de técnicas e métodos são necessários.

Alguns exemplos de uso de dados não retangulares incluem:
- Séries Temporais
	- Medições sucessivas da mesma variável
		- Material bruto para métodos de previsão estatística
		- Componente-chave dos dados produzidos por diversos dispositivos
- Dados Espaciais
	- Usados em análises de mapeamento espaciais
	- Mais complexos e variados que dados retangulares
	- O foco do dado é um objeto (uma casa, por exemplo) e suas coordenadas espacias
- Dados de Rede
	- Usados para representação de relacionamentos físicos, sociais e abstratos como:
		- A conexão entre pessoas em uma rede social
		- Centros de distribuição conectados por estradas
		- Sistemas de Recomendação


---
## Referencias:

[[@bruceEstatisticaPraticaPara2019]] 
Extrutura de Dados não Retangulares p.29