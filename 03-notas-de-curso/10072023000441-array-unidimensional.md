---
alias: Array Unidimensional 
---
%%
data: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#computação #arrays
___
# Array Unidimensional

Um **arranjo** simples, ou array unidimensional, algumas vezes chamado de vetor ou array, é um estrutura que agrega dados geralmente do mesmo tipo e tamanho uma entidade, tais como variáveis, rotinas e comandos.

É comum pensar em um arranjo como uma tabela em que, dada um _índice_ de uma _entrada_, podemos falar sobre o _elemento_ do arranjo que está naquele índice.

A tabela abaixo mostra as linguagens de programação mais utilizadas pelos usuários GitHub em 2022, segundo o levantamento Octoverse, feito anualmente pelo próprio GitHub.

| Índice | Linguagens de Programação |
| ------ | ------------------------- |
| 1      | JavaScript                |
| 2      | Python                    |
| 3      | Java                      |
| 4      | Typescript                |
| 5      | C#                        |

O elemento no índice 4 é Typescript. Pensamos nessa tabela não como cinco entidades separadas, mas como uma tabela com cinco entradas.

Um arranjo é semelhante. A diferença é que, no exemplo, estabelecemos uma coluna chamada índice, enquanto no arranjo simples a indexação dos elementos é implícita, isto é, seu total de elementos -- ou dimensão -- determina a sequencia de índices. Logo, em um arranjo de tamanho 5, o primeiro elemento tem implicitamente o índice 1 (ou 0, como na maioria das linguagens). Nesses casos, o arranjo é chamado de **unidimensional**. Quando os elementos do arranjo são outros arranjos chamamos de Arrays Multidimensionais ou Matrizes.

Para representar um arranjo simples, dado o nome do arranjo e um índice, nós os combinamos com colchetes para indicar um elemento particular. Pro exemplo, o _i-ésimo_ elemento de um arranjo _A_ representamos assim:

$$
A[i]
$$

Lê-se A na posição i.

O índice também é chamado de **subscrição**, por tanto, é comum vermos nos livros uma notação com números subscritos semelhante a essa:

$$
A[i_0, i_1, i_2,...]
$$

Que é uma maneira de representar o índice de i no arranjo A.

Arranjos, têm outra característica importante no contexto da computação: O tempo que um computador leva para acessar qualquer elemento de um arranjo é sempre o mesmo.

Isso acontece porque um arranjo aloca elementos sequencialmente na memória RAM (Random Access Memory), ou seja, cada elemento tem seu próprio endereço de memória. O endereço de qualquer outro elemento, portanto, pode ser calculado com base na posição e no tamanho dele. Em outras palavras, uma vez que eu sei o tamanho do elemento em bytes e o tamanho do arranjo, acessar qualquer outro endereço é simples, por exemplo:

Suponha um arranjo de inteiros com 100 elementos em que cada elemento possui 4 bytes. O endereço de memória do primeiro elemento implica no endereço base do arranjo, por exemplo 0x1000, o endereço do segundo será o endereço base + 4, isto é, 0x1004. O terceiro será o endereço base + 8, 0x1008 e assim por diante. Portanto, uma vez dado ao computador um índice i para o arranjo, ele poderá acessar o _i-ésimo_ elemento tão rapidamente quanto pode acessar o primeiro elemento, independentemente do valor de i, pois fará sempre apenas essa
operação.

---
## Referencias
- [ ] Inserir a Referência de Thomas Cormen - Desmistificando Algoritmos