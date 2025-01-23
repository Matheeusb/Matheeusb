Primeiramente, gostaria de trazer um pouco de contexto e motivações! Pensando na combinação de linguagem de programação Java e no framework de testes mobile Appium, chegamos ao [java-client](https://github.com/appium/java-client).

## 1ª motivação:

O `java-client`, até a sua versão 7.6.0, fornecia a classe `TouchAction`, que permitia realizar diversas ações de toque com boa personalização. A partir da versão 8.0.0, a classe `TouchAction` foi deprecada.

```java
Dimension dimension = driver.manage().window().getSize();
int startX = (int)(dimension.width * 0.5); 
int startY = (int)(dimension.height * 0.9); 
int endX = (int)(dimension.width * 0.2); 
int endY = (int)(dimension.height * 0.1);

TouchAction touch = new TouchAction(driver);

touch.press(PointOption.point(startX, startY))
   .waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
   .moveTo(PointOption.point(endX, endY))
   .release()
   .perform();
```
## 2ª motivação:

A mesma ação de _scroll_ pode ser realizada utilizando a classe `Sequence` e as demais classes do pacote `interactions` do Selenium. O problema dessa implementação é a verbosidade e o quão manual é essa automatização, ou seja, é necessário declarar cada etapa da movimentação de um dedo para realizar um _scroll_.

```java
Dimension dimension = driver.manage().window().getSize();

Point start = new Point((int)(dimension.width * 0.5), (int)(dimension.height * 0.9));
Point end = new Point((int)(dimension.width * 0.2), (int)(dimension.height * 0.1));

Sequence scroll = new Sequence(FINGER, 1)
    .addAction(FINGER.createPointerMove(ofMillis(0), viewport(), start.getX(), start.getY()))
    .addAction(FINGER.createPointerDown(LEFT.asArg()))
    .addAction(FINGER.createPointerMove(ofMillis(duration), viewport(), end.getX(), end.getY()))
    .addAction(FINGER.createPointerUp(LEFT.asArg()));
        
driver.perform(Arrays.asList(scroll));
```
## 3ª motivação:

Os _drivers_, UiAutomator2 (Android) e XCUITest (iOS), fornecem diversas extensões de comando personalizadas para executar cenários específicos. Esses comandos possuem uma boa documentação e personalização dos _scripts_, além de serem nativos dos drivers. Seguindo o case do _scroll_, os _scripts_ para Android e iOS ficam dessa forma:

```java
// Android
driver.executeScript("mobile: scrollGesture", ImmutableMap.of("direction", "down", "percent", 1.0));

//iOS
driver.executeScript("mobile: scroll", ImmutableMap.of("direction", "down"));
```

## Agora sim, por que utilizar a Appium Mobile Actions?

O Appium visa dar suporte para automação via UI para muitas stacks diferentes (mobile, desktop, web, etc.), e inclusive dentro da stack, como o mobile, é possível realizar testes para as plataformas Android e iOS dentro do mesmo projeto de testes, que é uma das suas principais utilizações, se não a principal.

Essa versatilidade do Appium (principalmente após o Appium 2) se dá por ser orientado a drivers e plugins, e então, conectando com a terceira motivação, podemos utilizar as extensões de comando para Android e iOS.

Mas pensando em um projeto de testes que valida um app Android e iOS, teríamos que sempre fazer a checagem de qual é a plataforma alvo do teste antes de executar um _script_, e é aí que entra a **Appium Mobile Actions**!

A biblioteca já faz essa validação e executa o _script_ correto para cada plataforma.

```java
AppiumActions actions = new AppiumActions(driver);

actions.gesture.scroll(Direction.DOWN, 0.8);
```

## Variações de argumentos

Alguns _scripts_ possuem diversas formas de serem montados, passando diferentes argumentos e estratégias, e a lib já prevê essas variações e entrega os métodos personalizados.

```java
boolean removeApp(String appId);
boolean removeApp(String appId, int timeout);
boolean removeApp(String appId, boolean keepData);
boolean removeApp(String appId, int timeout, boolean keepData);

void installApp(String appPath);
void installApp(String appPath, boolean checkVersion);
void installApp(String appPath, int timeout);
void installApp(String appPath, boolean checkVersion, int timeout);
```

## Documentação completa

Tanto o _driver_ do Android (UiAutomator2) assim como o do iOS (XCUITest), entregam uma documentação muito rica e fiz questão de deixar isso evidente na biblioteca. Também está claro na documentação quais parâmetros estão disponíveis em cada plataforma.

```java
/**
 * Terminates the app on the iOS device with a specified timeout.
 *
 * @param driver  the AppiumDriver instance to interact with the device.
 * @param appId   the bundleId of the app to be terminated.
 * @param timeout the timeout in seconds after which the app will be terminated. <b>Currently not supported on the iOS platform.</b>
 * @see <a href="https://github.com/appium/appium-xcuitest-driver/blob/master/docs/reference/execute-methods.md#mobile-terminateapp">XCUITest - terminateApp</a>
 */
@Override
public void terminateApp(AppiumDriver driver, String appId, int timeout) {
    driver.executeScript("mobile: terminateApp", Map.of("bundleId", appId));
}
```

## Funcionalidades e Roadmap

Na primeira versão da lib, ela entrega 19 scripts com diversas variações de acordo com os argumentos. Nesse momento, os _drivers_ do Android e iOS entregam **mais de 90 scripts cada** e todos estão no _roadmap_ da biblioteca, serão implementados conforme a priorização através de [issues](https://github.com/appiumactions/appium-mobile-actions-java/issues).

## Open Source

A ideia é realizar uma construção em conjunto com a comunidade de engenheiros de software e qualidade que utilizam o Appium com Java para facilitar a automatização dessas ações que normalmente causam dor de cabeça durante a construção de _scripts_ de testes automatizados. Sinta-se convidado a [contribuir](https://github.com/appiumactions/appium-mobile-actions-java/blob/main/CONTRIBUTING.md)!
