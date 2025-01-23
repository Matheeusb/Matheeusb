No Flutter 3.13, temos a adição de um novo Widget com o construtor `adaptive()`: `AlertDialog`!

Esse widget se junta a alguns outros que possuem esse construtor, como por exemplo:

- `Switch.adaptive()`
- `SwitchListTile.adaptive()`
- `Slider.adaptive()`
- `CircularProgressIndicator.adaptive()`
- `Icons.adaptive`
- `AlertDialog.adaptive()` ✨

## Comportamento desses componentes

Como o Flutter é um framework multiplataforma, e aqui nesse contexto existe um foco em Android e iOS, é interessante que o desenvolvedor consiga entregar a experiência de UI que os usuários de uma determinada plataforma estão ambientados. O Flutter traz essa possibilidade entregando componentes do Material Design e Cupertino!

Alguns widgets, como os mencionados acima, já entregam as duas "variações" utilizando o construtor `adaptive()`, que acaba facilitando e muito essa implementação.

## E para os widgets que não possuem esse construtor?

A lista de widgets que possuem o construtor `adaptive` é bem pequena ainda (alô Flutter 😉) e para criar apps com UIs personalizadas para cada plataforma é necessário um esforço considerável e duplicado na construção de componentes.

Então resolvi fazer esse artigo para trazer alguns atalhos na hora de construir componentes adaptáveis para o seu app!

## Descobrindo em qual plataforma o seu app está rodando

O Flutter, através do package `foundation`, dispõe do arquivo `platform.dart` e é ele que pode nos ajudar a descobrir em qual plataforma o nosso app está sendo executado através da variável `defaultTargetPlatform` e do enum `TargetPlatform`. Exemplo:

```dart
defaultTargetPlatform == TargetPlatform.android
        ? const Icon(Icons.download)
        : const Icon(CupertinoIcons.cloud_download)
```

A partir dessa verificação podemos iniciar a adaptação de tudo que compõe o layout da nossa aplicação, inclusive a navegação:

```dart
defaultTargetPlatform == TargetPlatform.android
        ? () => Navigator.push(
                context, 
                MaterialPageRoute(
                        builder: (final _) => const VideoQualityPage()),
                )
        : () => Navigator.push(
                context, 
                CupertinoPageRoute(
                        builder: (final _) => const VideoQualityPage()),
                )
```

## Componentização

Entrando no quesito boas práticas, obviamente não é interessante ter a validação **defaultTargetPlatform == TargetPlatform.android** por toda nossa aplicação, certo? Com isso, precisamos **componentizar**!

Primeiramente, eu criarei uma classe abstrata que estende um *StatelessWidget* (mas também poderia ser um *StatefulWidget*) e farei com que quem estender essa classe, que chamarei de **AdaptiveWidget**, obrigatoriamente precisará implementar dois métodos:

- *createAndroidWidget()* ou *createMaterialWidget()*
- *createIosWidget()* ou *createCupertinoWidget()*

Podemos utilizar também a classe **Platform** do *package* **dart:io** para nos ajudar nessa tarefa, pois nessa classe somente é que teremos a validação do sistema operacional em que o app estará sendo executado.

```dart
import 'dart:io' show Platform;

import 'package:flutter/widgets.dart';

abstract class AdaptiveWidget<I extends Widget, A extends Widget> extends StatelessWidget {
        const AdaptiveWidget({super.key});

        @override
        Widget build(BuildContext context) => Platform.isAndroid
                ? createAndroidWidget(context)
                : createIosWidget(context);

        I createIosWidget(BuildContext context);
        A createAndroidWidget(BuildContext context);
}
```

E para finalizar, basta estender essa classe e implementar os componentes do Material e Cupertino.

```dart
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'adaptive_widget.dart';

class CustomButton extends AdaptiveWidget<Widget, Widget> {
        const CustomButton({
                required this.onPressed,
                required this.label,
                Key? key,
        }) : super(key: key);

        final VoidCallback onPressed;
        final String label;

        @override
        Widget createAndroidWidget(BuildContext context) {
                return ElevatedButton(
                        onPressed: onPressed,
                        child: Text(label),
                );
        }

         @override
        Widget createIosWidget(BuildContext context) {
                return CupertinoButton.filled(
                        onPressed: onPressed,
                        child: Text(label),
                );
        }
}
```

## Mas, por que utilizar essa abordagem?

É verdade que essa abordagem, de criar telas e componentes de acordo com a plataforma que o app está sendo executado, não é muito comum (pelo menos eu nunca ouvi falar sobre o uso dessa estratégia), porém dada a evolução do KMM ([Kotlin Multiplatform Mobile](https://www.jetbrains.com/help/kotlin-multiplatform-dev/multiplatform-create-first-app.html)) onde é possível ter UIs nativas e compartilhamento de código nas demais camadas do app com o Kotlin, porque não considerar essa abordagem utilizando Flutter?

Sinto que o Flutter é visto como uma estratégia de custo benefício pelas empresas, e que bom! E acho importante trazer esse ponto, pois mesmo com um custo baixo, é possível entregar uma experiência ainda mais próxima nativo para o usuário, dado que a performance do Flutter é incrível.
    
Utilizando essa abordagem, ganhamos alguns recursos interessantes:

- Aparência nativa
- Feedbacks nativos (animação, som, …)
- Recursos nativos de *touch*

Inclusive, se quisermos ir fundo nessa, podemos explorar alguns componentes base, como:

- Scaffold e CupertinoPageScaffold 🤯
- MaterialApp e CupertinoApp 🚀

Você atua ou já atuou em algum projeto com essa abordagem? Se sim, compartilha aí! 🍻

> https://github.com/Matheeusb/netflix-app-settings-multiplatform