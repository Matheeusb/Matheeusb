Se você é um desenvolvedor de software, provavelmente já deve ter ouvido falar em conventional commits. Caso não tenha ouvido falar ainda, não perca tempo, [acesse aqui!](https://conventionalcommits.org/)

Em resumo, o conventional commits é um padrão de escrita de mensagens de commit, seguindo uma estrutura específica para facilitar e melhorar a comunicação entre desenvolvedores, além de ajudar a manter o histórico do repositório organizado.

Agora, imagine ter um padrão com objetivos semelhantes para os comentários (ou discussões) feitos nos pull requests! Apresento a vocês o conventional comments, que se baseia nas boas práticas de engenharia escritas pela Google para revisores de código!

## Como utilizar

O conventional comments apresenta um padrão de escrita com labels e decorations, que ajudam a definir qual é o objetivo do comentário feito. A estrutura é a seguinte:

```
<label> [decorations]: <subject> 

[discussion]
```

- **label**: Rótulo que indica o tipo/categoria do comentário.
- **subject**: Principal mensagem do comentário.
- **decorations** (opcional): Etiquetas de decoração para os comentários.
- **discussion** (opcional): Mensagem de apoio, podendo conter o contexto, raciocínio, referências ou qualquer informação que explique o porquê do comentário.

## Por que utilizar?

Alguns motivos me fazem ser a favor do uso do conventional comments:

### Padronização

Ter comentários padronizados melhora a comunicação do time, traz clareza sobre o que está sendo discutido e aumenta a produtividade com o tempo de uso da prática. Na documentação do conventional comments é possível encontrar diversos labels e decorations, porém é interessante também o time definir os seus padrões.

### Criticidade

Através do label e decorations, é possível definir o quão crítico é aquele ponto levantado, inclusive facilitando na decisão de marcar o pull request com request changes ou aprovar.

### Elevar o nível técnico do time

Ao escrever comentários com essa estrutura, o desenvolvedor acaba praticando algumas skills importantes, pois é necessário se expressar de forma clara (soft skill) e também apresentar o porquê do seu comentário (hard skill).

## Links

- [Conventional Comments](https://conventionalcomments.org/)
- [Google's Engineering Practices documentation](https://github.com/google/eng-practices/blob/master/review/reviewer/comments.md)
- [Conventional Comments Gitlab](https://gitlab.com/conventionalcomments/conventional-comments-button?source=post_page-----54f1e5f4dfe6--------------------------------)
