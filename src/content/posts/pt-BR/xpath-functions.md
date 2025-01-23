No universo dos testes automatizados, a escolha de locators confiáveis é fundamental para garantir a estabilidade e a eficiência dos scripts. Entre diversas opções, o uso de **Xpaths** continua sendo uma ferramenta poderosa, mas, para evitar fragilidades, é essencial utilizar as funções certas. Este artigo explora algumas das funções mais úteis para criar Xpaths robustos, reduzindo a probabilidade de falhas devido a alteração na interface ou na estrutura da árvore de elementos. Prepare-se para transformar seus Xpaths em ferramentas resilientes e inteligentes!

## ancestor::

A função **ancestor::** retorna todos os ancestrais de um nó na árvore de elementos, permitindo navegar para elementos mais acima na hierarquia.

```xpath
//ancestor::div[@class='container']
```

> Retorna todos os elementos **\<div>** que são ancestrais do elemento **\<span>** com o texto "Login".

**Na prática:** Útil para encontrar elementos relacionados que compartilhem uma hierarquia comum.

## contains()

A função **contains()** verifica se um atributo ou texto contém um valor específico.

```xpath
//button[contains(@class, 'submit')]
```

> Localiza todos os botões cujo atributo **class** contém a palavra "Submit".

**Na prática:** Excelente para localizar elementos quando os valores de atributos podem variar levemente.

## count()

A função **count()** retorna o número de nós em um conjunto de resultados.

```xpath
count(//div[@class='item'])
```

> Conta o número de elementos **\<div>** com a classe "item".

**Na prática:** Ideal para validar a quantidade de elementos na árvore de elementos.

## descendant::

A função **descendant::** retorna todos os descendentes de um nó na árvore de elementos.

```xpath
//div[@id='menu']/descendant::a
```

> Localiza todos os links **\<a>** que são descendentes do elemento **\<div>** com ID "menu".

**Na prática:** Facilita a busca por elementos profundamente aninhados.

## following-sibling::

A função **following-sibling::** retorna todos os elementos irmãos que aparecem depois do nó atual.

```xpath
//h2[text()='Título']/following-sibling::p
```

> Localiza todos os parágrafos **\<p>** que são irmãos e vêm após o **\<h2>** com texto "Título".

**Na prática:** Útil para localizar elementos próximos relacionados a outro elemento.

## last()

A função **last()** retorna o último elemento em um conjunto de resultados.

```xpath
(//li[@class='item'])[last()]
```

> Localiza o último item de uma lista de elementos **\<li>** com a classe "item".

**Na prática:** Excelente para acessar o último elemento de uma lista ou coleção.

## normalize-space()

A função **normalize-space()** remove espaços extras no início, no final e duplicados no meio de um texto.

```xpath
//p[text()=normalize-space(' Bem-vindo! ')]
```

> Localiza um parágrafo **\<p>** com texto "Bem-vindo!", ignorando espaços extras.

**Na prática:** Útil para evitar falhas em casos onde o conteúdo de texto pode variar em espaços.

## parent::

A função **parent::** retorna o nó pai de um elemento.

```xpath
//span[@class='icon']/parent::div
```

> Localiza o elemento **\<div>** que é pai do elemento **\<span>** com classe "icon".

**Na prática:** Permite subir na hierarquia da árvore de elementos para localizar elementos relacionados.

## position()

A função **position()** retorna a posição de um nó dentro de um conjunto.

```xpath
//div[@class='item'][position()=2]
```

> Localiza o segundo elemento **\<div>** com a classe "item".

**Na prática:** Ideal para trabalhar com listas ou coleções ordenadas.

## starts-with()

A função **starts-with()** verifica se o valor de um atributo ou texto começa com um valor específico.

```xpath
//input[starts-with(@id, 'user')]
```

> Localiza todos os campos **\<input>** cujo atributo **id** começa com "user".

**Na prática:** Bom para localizar elementos com prefixos comuns em IDs ou classes.

## text()

A função **text()** seleciona o conteúdo textual de um elemento.

```xpath
//h1[text()='Título da Página']
```

> Localiza um cabeçalho **\<h1>** com o texto exato "Título da Página".

**Na prática:** Ideal para localizar elementos por seu texto visível.

## translate()

A função **translate()** substitui ou remove caracteres em um texto.

```xpath
//input[translate(@placeholder, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'email']
```

> Localiza campos **\<input>** cujo atributo **placeholder** corresponde a "email", ignorando maiúsculas/minúsculas.

**Na prática:** Útil para manipular valores de texto e lidar com variações de maiúsculas/minúsculas.

## Conclusão

Neste artigo, exploramos diversas funções que tornam os Xpaths mais robustos e versáteis, ajudando a lidar com os desafios do desenvolvimento e da automação de testes. Desde localizar elementos em diferentes níveis hierárquicos até manipular textos e identificar padrões, essas funções são ferramentas essenciais para criar seletores mais confiáveis e à prova de mudanças.

No entanto, o universo do XPath é vasto, e há muitas outras funções que podem ser úteis dependendo do contexto. Se você conhece outras abordagens ou funções que utilizou com sucesso, fique à vontade para compartilhar nos comentários! A troca de experiências fortalece a comunidade e nos ajuda a criar soluções cada vez melhores.

Aguardo suas sugestões e dúvidas! 😊
