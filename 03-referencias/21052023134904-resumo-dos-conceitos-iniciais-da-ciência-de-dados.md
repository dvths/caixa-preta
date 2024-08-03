---
alias: Resumo dos conceitos iniciais da ciência de dados
---
%%
data:: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado:: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

---
# Resumo dos conceitos iniciais da ciência de dados

## DEFINIÇÕES GERAIS
---
### DEFINIÇÃO DE PESQUISA
---
- Métodos bem definidos para compilação das informações
- Coleta de informações sobre uma Característica (ou Variável) de Interesse
---
### DEFINIÇÃO DE AMOSTRAGEM
---
- Subconjunto de uma determinada População
	- Generalizada
	- Imparcial
	- Representativa
	- Fornecer uma Medida Precisa das Estimativas
 
---
## PLANEJAMENTO E COLETA
---
### DEFINIÇÃO DE VARIÁVEL DE INTERESSE
---
- Característica a ser observada
- Responde uma pergunta específica
- Testa um Hipótese
---
### DEFINIÇÃO DE VARIÁVEL DE CONTROLE
---
- Utilizada para avaliar os efeitos da variável de interesse
- É mantida constante ou controlada em um experimento ou estudo
---
### DEFINIÇÃO DE EXPERIMENTO
---
- Investigação Planejada
- Avalia a confiabilidade dos resultados
- Testa hipóteses
- Utiliza métodos de Amostragem Probabilística e Não Probabilística
---  
### COLETA DE DADOS OBSERVACIONAIS
---  
- Comuns nas Ciências Humanas
- Geralmente realizadas por estudos observacionais que envolvem:
	- Presença de seres vivos em um determinado ambiente
	- Fenômenos climáticos
	- Fluxo de usuários em um site
	- Entre outras, conforme a necessidade do estudo em questão
- Características
	- Observação passiva da realidade
	- Amostragem aleatória para seleção de unidades observadas
	- Custo baixo
	- Grandes amostras
---  
### COLETA DE DADOS BASEADA EM EXPERIMENTO
---  
- Comuns nas Ciências:
	- Agrárias
	- Biológicas
	- da Saúde
	- da Terra
- A Coleta é feita orientada ao experimento em questão.
	- Características
		- Intervenção na Realidade
		- Condições Controladas
		- Observação dos Efeitos da Intervenção
		- Aleatoriedade na Alocação de Unidades em Grupos
		- Custo Elevado
		- Amostras Pequenas
---  
## FONTES DE DADOS 
---
- Primária (Dados que precisam ser coletados)
	- Estudos de Casos
	- Experimentos
	- Pesquisas Amostrais (encomendadas ou não)
	- Dados Públicos
- Secundária (Dados já coletados)
	- Censo
	- Resultados de Pesquisas Amostrais 
	- Registros administrativos
	- Big Data (grandes volumes de dados não planejados ou organizados):
		- Imagens
		- Áudios
		- Vídeos
		- Grandes volumes de transações financeiras
		- Buscas realizadas na web
  
---  
## TAXONOMIA DOS DADOS
---  
- NUMÉRICOS
	- Contínuos:
		- Dados que podem assumir qualquer valor em um **intervalo**
		- Sinônimos:
			- Intervalo
			- Flutuação
			- Numérico
	- Discretos:
		- Dados que podem assumir apenas **valores inteiros**
		- Sinônimos:
			- Contagem
			- Inteiros
- CATEGÓRICOS:
	- Dados que podem assumir apenas um conjunto específico de valores representando um conjunto de possíveis categorias:
		- Sinônimos:
			- Enumeração
			- Enumerado
			- Nominal
			- Politômico
	- Binários
		- Um caso especial de dados categóricos com apenas duas categorias:
			- Verdadeiro
			- Falso
			- 0
			- 1
		- Sinônimos:
			- Dicotômico
			- Lógico
			- Indicador
			- Booleano
	- Ordinais
		- Dado categórico com uma ordem explícita
		- Sinônimos:
			- Fator
			- Ordenado
   
---
## ESTRUTURA DOS DADOS
---  
- DADOS RETANGULARES 
	- Sinônimos:
		- Tabela (como em um banco de dados)
		- Planilha
		- Dados Tabulares
		- Relação
  
	- Quadro de Dados (Data Frame)
		- Estrutura básica de dados para modelos estatísticos e aprendizado de máquina
		- É uma Matriz Bidimensional com linhas e colunas
	- Características:
		- Uma coluna da tabela
		- Sinônimos:
			- Atributo
			- Entrada
			- Indicador
			- Variável
	- Conclusão:
		- Um *estado*, um alvo ou objetivo final que um experimento ou estudo tenta estimar
		- Sinônimos:
			- Variável Dependente 
			- Resposta
			- Alvo
			- Resultado
	- Registro:
		- Uma linha da tabela
		- Sinônimos:
			- Caso
			- Exemplo
			- Instância
			- Observação
			- Padrão
			- Amostra
			- Tupla
- DADOS NÃO RETANGULARES
	- Dados com estrutura complexa que podem ser representados de diversas formas:
		- Grafos
		- JSON (Javascript Object Notation)
		- XML (eXtendible Markup Language)
	- São caracterizados por:
		- Estrutura Complexa
		- Variedade de formatos
		- Maior Flexibilidade
		- Escalabilidade
		- Necessidade de análise avançada
	- Exemplos de dados não retangulares:
		- Séries Temporais
			- Medições sucessivas da mesma variável
				- Material bruto para métodos de previsão estatística
				- Componente-chave dos dados produzidos por dispositivos
		- Dados Espaciais
			- Usados em análises de mapeamento espaciais
			- Mais complexos e variados que dados retangulares
			- O foco do dado é um objeto (uma casa, por exemplo) e suas coordenadas espacias
			- O *campo* visão foca em uma métrica relevante (o brilho de um pixel, por exemplo)
		- Dados de Rede
			- Usados para representação de relacionamentos físicos, sociais e abstratos como:
				- A conexão entre pessoas em uma rede social
				- Centros de distribuição conectados por estradas
				- Sistemas de Recomendação
	
---
## Referências

- [[19052023112129-a-coleta-de-dados-é-o-conjunto-de-métodos-e-técnicas-para-busca-de-informação-e-significados]]
- [[17052023155007-analise-exploratória-de-dados-é-o-primeiro-passo-de-qualquer-projeto-de-ciência-de-dados]]
- [[17052023211923-a-taxonomia-de-tipos-de-dados-importa-para-estruturação-manipulação-e-processamento-correto-dos-dados]]
- [[17052023175822-a-forma-como-os-dados-estão-estruturados-define-a-forma-como-trabalharemos-com-eles]]
- [[17052023210016-dados-não-estruturados-não-são-menos importantes]]
- [[17052023231919-a-imparcialidade-é-fundamental-para-evitar-a-criação-ou-reforço-de-vieses-que-tornem-os-dados-tendenciosos]]
- [[18052023001314-a-credibilidade-dos-dados-é-um-fator-fundamental-para-evitar-vieses]]
- [[18052023122041-a-análise-de-dados-possui-padrões-éticos-que-devem-ser-seguidos]]
- [[18052023170722-dados-abertos-representam-um-grande-impacto-na-colaboração-científica]]