---
alias: Exercícios de Expressões Regulares 
---
%%
data: `=dateformat(this.file.ctime, "dd-MM-yyyy - HH:mm")`
modificado: `=dateformat(this.file.mtime, "dd-MM-yyyy - HH:mm")`
%%

#regex #python #exercicios
___
# Exercícios de Expressões Regulares

Lista de exercícios para a prática de criação de expressões regulares em python:

1. Escreva um programa Python para verificar se uma string contém apenas um certo conjunto de caracteres (neste caso, a-z, A-Z e 0-9).

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```
>


2. Escreva um programa Python que encontre uma string que tenha um 'a' seguido de zero ou mais 'b'.

>[!tip]- Solução:
> ```python
>import re
>def text_match(text):
>        patterns = '^a(b*)$'
>        if re.search(patterns,  text):
>                return 'Found a match!'
>        else:
>                return('Not matched!')
print(text_match("ac"))
print(text_match("abc"))
print(text_match("a"))
print(text_match("ab"))
print(text_match("abb"))
>```

3. Escreva um programa Python que encontre uma string que tenha um 'a' seguido de um ou mais 'b'.

>[!tip]- Solução:
>
> ```python
import re
>def text_match(text):
>        patterns = 'ab+?'
>        if re.search(patterns,  text):
>                return 'Found a match!'
>        else:
>                return('Not matched!')
>
>print(text_match("ab"))
>print(text_match("abc"))
>```

4. Escreva um programa Python que encontre uma string que tenha um 'a' seguido de zero ou um 'b'.

>[!tip]- Solução:
>
> ```python
>import re
>def text_match(text):
>        patterns = 'ab?'
>        if re.search(patterns,  text):
>                return 'Found a match!'
>        else:
>                return('Not matched!')
>
>print(text_match("ab"))
>print(text_match("abc"))
>print(text_match("abbc"))
>print(text_match("aabbc"))
>```

5. Escreva um programa Python que encontre uma string que tenha um 'a' seguido de três 'b'.

>[!tip]- Solução:
>
> ```python
>import re
>def text_match(text):
>        patterns = 'ab{3}?'
>        if re.search(patterns,  text):
>                return 'Found a match!'
>        else:
>                return('Not matched!')
>
>print(text_match("abbb"))
>print(text_match("aabbbbbc"))
>```

6. Escreva um programa Python que encontre uma string que tenha um 'a' seguido de dois a três 'b'.

>[!tip]- Solução:
>
> ```python
>import re
>def text_match(text):
>        patterns = 'ab{2,3}'
>        if re.search(patterns,  text):
>                return 'Found a match!'
>        else:
>                return('Not matched!')
>print(text_match("ab"))
>print(text_match("aabbbbbc"))
>```

7. Escreva um programa Python para encontrar sequências de letras minúsculas unidas por um sublinhado.

>[!tip]- Solução:
>
> ```python
>import re
>def text_match(text):
>        patterns = '^[a-z]+_[a-z]+$'
>        if re.search(patterns,  text):
>                return 'Found a match!'
>        else:
>                return('Not matched!')
>
>print(text_match("aab_cbbbc"))
>print(text_match("aab_Abbbc"))
>print(text_match("Aaab_abbbc"))
>```

8. Escreva um programa Python para encontrar sequências de uma letra maiúscula seguida de letras minúsculas.

>[!tip]- Solução:
>
> ```python
>import re
>def text_match(text):
>        patterns = '[A-Z]+[a-z]+$'
>        if re.search(patterns, text):
>                return 'Found a match!'
>        else:
>                return('Not matched!')
>print(text_match("AaBbGg"))
>print(text_match("Python"))
>print(text_match("python"))
>print(text_match("PYTHON"))
>print(text_match("aA"))
>print(text_match("Aa"))
>```

9. Escreva um programa Python que encontre uma string que tenha um 'a' seguido de qualquer coisa que termine em 'b'.

>[!tip]- Solução:
>
> ```python
>import re
>def text_match(text):
>        patterns = 'a.*?b$'
>        if re.search(patterns,  text):
>                return 'Found a match!'
>        else:
>                return('Not matched!')
>
>print(text_match("aabbbbd"))
>print(text_match("aabAbbbc"))
>print(text_match("accddbbjjjb"))
>```

10. Escreva um programa Python que encontre uma palavra no início de uma string.

>[!tip]- Solução:
>
> ```python
>import re
>def text_match(text):
>        patterns = '^\w+'
>        if re.search(patterns,  text):
>                return 'Found a match!'
>        else:
>                return('Not matched!')
>
>print(text_match("The quick brown fox jumps over the lazy dog."))
>print(text_match(" The quick brown fox jumps over the lazy dog."))
>```

11. Escreva um programa Python que encontre uma palavra no final de uma string, com pontuação opcional.

>[!tip]- Solução:
>
> ```python
>import re
>def text_match(text):
>        patterns = '\w+\S*$'
>        if re.search(patterns,  text):
>                return 'Found a match!'
>        else:
>                return('Not matched!')
>
>print(text_match("The quick brown fox jumps over the lazy dog."))
>print(text_match("The quick brown fox jumps over the lazy dog. "))
>print(text_match("The quick brown fox jumps over the lazy dog "))
>```

12. Escreva um programa Python que encontre uma palavra que contenha 'z'.

>[!tip]- Solução:
>
> ```python
>import re
>def text_match(text):
>        patterns = '\w*z.\w*'
>        if re.search(patterns,  text):
>                return 'Found a match!'
>        else:
>                return('Not matched!')
>
>print(text_match("The quick brown fox jumps over the lazy dog."))
>print(text_match("Python Exercises."))
>```

13. Escreva um programa Python que encontre uma palavra que contenha 'z', mas não no início ou no final da palavra.

>[!tip]- Solução:
>
> ```python
>import re
>def text_match(text):
>        patterns = '\Bz\B'
>        if re.search(patterns,  text):
>                return 'Found a match!'
>        else:
>                return('Not matched!')
>
>print(text_match("The quick brown fox jumps over the lazy dog."))
>print(text_match("Python Exercises."))
>```

14. Escreva um programa Python para encontrar uma string que contenha apenas letras maiúsculas e minúsculas, números e sublinhados.

>[!tip]- Solução:
>
> ```python
>import re
>def text_match(text):
>        patterns = '^[a-zA-Z0-9_]*$'
>        if re.search(patterns,  text):
>                return 'Found a match!'
>        else:
>                return('Not matched!')
>
>print(text_match("The quick brown fox jumps over the lazy dog."))
>print(text_match("Python_Exercises_1"))
>```

15. Escreva um programa Python que inicie cada string com um número específico.

>[!tip]- Solução:
>
> ```python
>import re
>def match_num(string):
>    text = re.compile(r"^5")
>    if text.match(string):
>        return True
>    else:
>        return False
>print(match_num('5-2345861'))
>print(match_num('6-2345861'))
>```

16. Escreva um programa Python para remover zeros iniciais de um endereço IP.

>[!tip]- Solução:
>
> ```python
>import re
>
>ip = "216.08.094.196"
>string = re.sub('\.[0]*', '.', ip)
>print(string)
>```

17. Escreva um programa Python para verificar se há um número no final de uma string.

>[!tip]- Solução:
>
> ```python
>import re
>
>def end_num(string):
>    text = re.compile(r".*[0-9]$")
>    if text.match(string):
>        return True
>    else:
>        return False
>
>print(end_num('abcdef'))
>print(end_num('abcdef6'))
>```

18. Escreva um programa Python para procurar por números (0-9) de comprimento entre 1 e 3 em uma determinada string.

>[!tip]- Solução:
>
> ```python
>import re
>
>results = re.finditer(r"([0-9]{1,3})", "Exercises number 1, 12, 13, and 345 are important")
>print("Number of length 1 to 3")
>
>for n in results:
>     print(n.group(0))
>```

19. Escreva um programa Python para procurar por strings literais dentro de uma string. 

	- Texto de exemplo: 'The quick brown fox jumps over the lazy dog.' Palavras pesquisadas: 'fox', 'dog', 'horse'.

>[!tip]- Solução:
>
> ```python
>import re
>
>patterns = [ 'fox', 'dog', 'horse' ]
>text = 'The quick brown fox jumps over the lazy dog.'
>
>for pattern in patterns:
>    print('Searching for "%s" in "%s" ->' % (pattern, text),)
>    if re.search(pattern,  text):
>        print('Matched!')
>    else:
>        print('Not Matched!')
>```

20. Escreva um programa Python para procurar por uma string literal em uma string e também encontrar a localização dentro da string original onde o padrão ocorre. 

	- Texto de exemplo: 'The quick brown fox jumps over the lazy dog.' Palavra pesquisada: 'fox'

>[!tip]- Solução:
>
> ```python
>import re
>
>pattern = 'fox'
>text = 'The quick brown fox jumps over the lazy dog.'
>match = re.search(pattern, text)
>s = match.start()
>e = match.end()
>
>print('Found "%s" in "%s" from %d to %d ' % \
>    (match.re.pattern, match.string, s, e))
>```

22. Escreva um programa Python para encontrar as substrings dentro de uma string.


- Texto de exemplo:

	- 'Exercícios de Python, exercícios de PHP, exercícios de C#'

- Padrão:

	- 'exercícios'

>[!warning] Observação: Existem duas instâncias da palavra "exercícios" na string de entrada.

>[!tip]- Solução:
>
> ```python
>import re
>
>text = 'Python exercises, PHP exercises, C# exercises'
>pattern = 'exercises'
>
>for match in re.findall(pattern, text):
>    print('Found "%s"' % match)
>```

23. Escreva um programa Python para encontrar a ocorrência e a posição das substrings dentro de uma string.

>[!tip]- Solução:
>
> ```python
>import re
>
>text = 'Python Exercises'
>text =text.replace (" ", "_")
>print(text)
>text =text.replace ("_", " ")
>
>print(text)
>```

24. Escreva um programa Python para substituir espaços em branco por sublinhados e vice-versa.

>[!tip]- Solução:
>
> ```python
>import re
>def extract_date(url):
>        return re.findall(r'/(\d{4})/(\d{1,2})/(\d{1,2})/', url)
>url1= "https://www.washingtonpost.com/news/football-insider/wp/2016/09/02/odell-beckhams-fame-rests-on-one-stupid-little-ball-josh-norman-tells-author/"
>print(extract_date(url1))
>```

25. Escreva um programa Python para extrair ano, mês e data de uma URL.

>[!tip]- Solução:
>
> ```python
>import re
>
>def change_date_format(dt):
>        return re.sub(r'(\d{4})-(\d{1,2})-(\d{1,2})', '\\3-\\2-\\1', dt)
>dt1 = "2026-01-02"
>print("Original date in YYY-MM-DD Format: ",dt1)
>print("New date in DD-MM-YYYY Format: ",change_date_format(dt1))
>```

26. Escreva um programa Python para pesquisar strings literais dentro de uma string.

	- Texto de exemplo: 'The quick brown fox jumps over the lazy dog.' Palavras pesquisadas: 'fox', 'dog', 'horse'.
 
>[!tip]- Solução:
>
> ```python
import re
># Sample strings.
>words = ["Python PHP", "Java JavaScript", "c c++"]
>
>for w in words:
>        m = re.match("(P\w+)\W(P\w+)", w)
>        # Check for success
>        if m:
>            print(m.groups())
>```

27. Escreva um programa Python para pesquisar uma string literal dentro de uma string e também encontrar a localização na string original onde o padrão ocorre. 

	- Texto de exemplo: 'The quick brown fox jumps over the lazy dog.' Palavra pesquisada: 'fox'

>[!tip]- Solução:
>
> ```python
>import re
># Sample string.
>text = "Ten 10, Twenty 20, Thirty 30"
>result = re.split("\D+", text)
># Print results.
>for element in result:
>    print(element)
>```

29. Escreva um programa Python para encontrar as subtrings dentro de uma string. 

	- Texto de exemplo: 'Exercícios de Python, exercícios de PHP, exercícios de C#' Padrão: 'exercícios' Nota: Há duas instâncias de "exercícios" na string de entrada.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

31. Escreva um programa Python para encontrar a ocorrência e a posição das substrings dentro de uma string.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

32. Escreva um programa Python para substituir espaços em branco por um sublinhado e vice-versa.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

33. Escreva um programa Python para extrair ano, mês e dia de uma URL.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

34. Escreva um programa Python para converter uma data no formato yyyy-mm-dd para o formato dd-mm-yyyy.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

35. Escreva um programa Python para verificar se duas palavras de uma lista de palavras começam com a letra 'P'.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```


36. Escreva um programa Python para separar e imprimir os números em uma determinada string.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

37. Escreva um programa Python para encontrar todas as palavras que começam com 'a' ou 'e' em uma determinada string.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

38. Escreva um programa Python para separar e imprimir os números e suas posições em uma determinada string.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

39. Escreva um programa Python para abreviar 'Road' como 'Rd.' em uma determinada string.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

40. Escreva um programa Python para substituir todas as ocorrências de um espaço, vírgula ou ponto por dois pontos.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

41. Escreva um programa Python para substituir no máximo 2 ocorrências de espaço, vírgula ou ponto por dois pontos.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```


42. Escreva um programa Python para encontrar todas as palavras de cinco caracteres em uma string.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```


43. Escreva um programa Python para encontrar todas as palavras de três, quatro e cinco caracteres em uma string.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```


44. Escreva um programa Python para encontrar todas as palavras que têm pelo menos 4 caracteres em uma string.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```


45. Escreva um programa Python para converter uma string em camel-case para uma string em snake-case.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```


46. Escreva um programa Python para converter uma string em snake-case para uma string em camel-case.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```


47. Escreva um programa Python para extrair os valores entre aspas de uma string.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```


48. Escreva um programa Python para remover múltiplos espaços de uma string.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```


49. Escreva um programa Python para remover todos os espaços em branco de uma string.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```


50. Escreva um programa Python para remover tudo, exceto caracteres alfanuméricos de uma string.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```


51. Escreva um programa Python para encontrar URLs em uma string.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```


52. Escreva um programa Python para dividir uma string em letras maiúsculas.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```


53. Escreva um programa Python para substituição de string sem diferenciação de maiúsculas e minúsculas.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```


54. Escreva um programa Python para remover sequências de escape ANSI de uma string.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

55. Escreva um programa Python para encontrar todos os advérbios e suas posições em uma determinada frase. 
	- Texto de exemplo: "Claramente, ele não tem desculpa para tal comportamento."

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```


56. Escreva um programa Python para dividir uma string usando vários delimitadores. 

>[!note] Nota: Um delimitador é uma sequência de um ou mais caracteres usados para especificar o limite entre regiões separadas e independentes em texto simples ou em outros fluxos de dados. Um exemplo de delimitador é o caractere vírgula, que atua como um delimitador de campo em uma sequência de valores separados por vírgula.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

58. Escreva um programa Python para verificar um número decimal com precisão de 2 casas decimais.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

59. Escreva um programa Python para remover palavras de uma string cujo comprimento esteja entre 1 e um número dado.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

60. Escreva um programa Python para remover a área entre parênteses em uma string.

	- Dados de exemplo: ["exemplo (.com)", "w3resource", "github (.com)", "stackoverflow (.com)"] Saída esperada: exemplo w3resource github stackoverflow

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

62. Escreva um programa Python para inserir espaços entre palavras que começam com letras maiúsculas.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

63. Escreva um programa Python que leia uma expressão fornecida e a avalie.
	- Termos e condições: 
		- A expressão consiste em valores numéricos, operadores e parênteses, e termina com '='. 
		- Os operadores incluem +, -, *, /, que representam adição, subtração, multiplicação e divisão. 
		- Quando dois operadores têm a mesma precedência, eles são aplicados da esquerda para a direita.
		- Pode-se assumir que não haverá divisão por zero.
		- Todos os cálculos são feitos com números inteiros e, após a parte decimal, os valores devem ser truncados.
		- O comprimento da expressão não excederá 100. -1 ? 10 9 = resultados intermediários do cálculo = 10 9


>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

65. Escreva um programa Python para remover substrings minúsculas de uma determinada string.

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

66. Escreva um programa Python para concatenar os números consecutivos em uma determinada string. 
	1. String original: 
		1. *Digite em 1 20 Kearny Street. O balcão de segurança pode direcioná-lo para o andar 1 6. Por favor, tenha seu documento de identificação pronto. 
		
	2. Após concatenar os números consecutivos na referida string:
		1. *Digite em 120 Kearny Street. O balcão de segurança pode direcioná-lo para o andar 16. Por favor, tenha seu documento de identificação pronto.*

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

68. Escreva um programa Python para converter uma determinada string em snake case. 

	- Saída de exemplo: java-script gd-script btw...-what-_-do_-you-call-that-naming-style?-snake-case?

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

71. Escreva um programa Python que recebe qualquer número de objetos iteráveis ou objetos com uma propriedade de comprimento e retorna o objeto mais longo. 

	- Saída de exemplo: Laranja [1, 2, 3, 4, 5] Java Python

>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

73. Escreva um programa Python que verifica se uma palavra começa e termina com uma vogal em uma determinada string. Retorna verdadeiro se uma palavra atender à condição; caso contrário, retorna falso.

	- Dados de exemplo: 
		- ("Red Orange White") -> Verdadeiro 
		- ("Red White Black") -> Falso 
		- ("abcd dkise eosksu") -> Verdadeiro

75. Escreva um programa Python que receba uma string com algumas palavras. Para duas palavras consecutivas na string, verifique se a primeira palavra termina com uma vogal e a próxima palavra começa com uma vogal. Se o programa atender à condição, retorne verdadeiro; caso contrário, retorne falso. Apenas um espaço é permitido entre as palavras. 
	- Dados de exemplo: 
 
		- ("These exercises can be used for practice.") -> Verdadeiro 
		- ("Following exercises should be removed for practice.") -> Falso 
		- ("I use these stories in my classroom.") -> Verdadeiro
  
>[!tip]- Solução:
>
> ```python
>import re
>
>def is_allowed_specific_char(string):
>    charRe = re.compile(r'[^a-zA-Z0-9]')
>    string = charRe.search(string)
>	return not bool(string)
>	
>print(is_allowed_specific_char("ABCDEFabcdef123450")) 
>print(is_allowed_specific_char("*&%@#!}{"))
>```

---
## Referencias

- https://www.w3resource.com/python-exercises/re/