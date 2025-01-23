O code review é uma das mais importantes etapas (se não a mais) dentro do processo de desenvolvimento de software. O processo de revisão de código ajuda a identificar bugs e anti patterns, porém para que esse processo seja de fato efetivo existem algumas práticas e automações que podem ajudar!

## Brother review

Se você se considera um desenvolvedor profissional e aprova pull requests (ou merge requests) após simplesmente fazer scroll no código do coleguinha ou nem ao menos olhar sobre o que se trata a solicitação de mudança, precisamos conversar!

Mas segue o fio e vamos mudar isso pra ontem!

## Tipos de code review

Acredito que o sucesso na prática do code review se dá, primeiramente, dividindo em duas abordagens:

- Code review automatizado
- Code review manual

## Code review automatizado

O code review automatizado serve como um primeiro filtro. Mas como saber o que pode fazer parte do code review automatizado e como fazer isso? Vou dar alguns exemplos de quais etapas podem fazer parte do code review automatizado:

- Build
- Testes
- Code Coverage
- Linter
- Validações de segurança
- Padrões de commits

Esses são alguns exemplos de jobs que podem ser executados no instante em que o pull request é aberto e só liberando para merge após todas essas etapas serem executadas com sucesso!

> Ah, mas qual é a vantagem de construir todos esses jobs?

Agilidade, confiabilidade e principalmente, parar de perder tempo com padrões já definidos. Por exemplo, se o time definiu que o code coverage da aplicação vai ser de no mínimo 80%, por que fazer com que o avaliador do pull request se preocupe em avaliar se esse requisito foi cumprido? Para esse caso em específico, temos ferramentas como [Coveralls](https://coveralls.io/) e [Codecov](https://about.codecov.io/).

A questão é, automatize todas as validações estáticas de código e foque no que a máquina não pode fazer (ou ao menos ainda não, né).

## Code review manual

Agora falando do code review manual, dentro do cenário onde já aconteceu o code review automatizado no momento em que o pull request foi aberto (vulgo pipeline), no que o desenvolvedor (avaliador) deve focar?

- Padrões de arquitetura
- Boas práticas de codificação
- Qualidade dos testes
- Uso correto de recursos e componentes

Conhece o princípio 80/20? Eu acredito muito que nesse contexto, o code review manual são os 20% mais valiosos desse processo e que inclusive pode ajudar a encontrar alguns bugs antes mesmo do software ir para a etapa de testes funcionais/integrados.

> Ah, somente um desenvolvedor mais sênior ou um tech lead deve fazer o code review manual então? NÃO!

## Todos devem fazer review dos pull requests!

Desde o trainee até o especialista, todos devem participar das revisões de código e para que isso funcione, precisamos de documentações:

- Documentação da arquitetura da aplicação
- Documentação das regras de negócio da feature
- Protótipo (em caso de UI)

Existe uma grande possibilidade de que o desenvolvedor mais experiente já saiba de algumas coisas, sem a necessidade de acessar a documentação (principalmente sobre a arquitetura da aplicação), porém com as documentações necessárias, um desenvolvedor júnior pode participar tranquilamente desse processo, inclusive levantando dúvidas que ninguém fez ainda!

O review, além de ser um processo de inspeção, é também uma ferramenta de aprendizado, de compartilhamento de experiências e de amadurecimento da equipe! Faça e incentive todos os desenvolvedores da sua equipe a praticarem o code review diariamente, o resultado dessa prática, quando bem executada, traz muitos ganhos para o time e para o produto.
