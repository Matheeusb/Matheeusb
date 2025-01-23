Escrever testes automatizados é crucial para garantir a qualidade de software. No entanto, criar testes para cada cenário possível pode ser trabalhoso e demorado. É aí que o **DataProvider** do **TestNG** entra em cena!

O _DataProvider_ é um recurso poderoso que permite fornecer dados de teste para seus testes automatizados de forma dinâmica. Isso significa que você pode escrever um único teste e executá-lo com diferentes conjuntos de dados, aumentando significativamente a cobertura de testes sem a necessidade de escrever mais código.

## Na prática

Para exemplificar o uso do _DataProvider_, vamos utilizar um método que valida a idade de uma pessoa, que para fins didáticos, precisa ter entre 18 e 100 anos.

```java
public boolean isValidAge(int age) {
    return age >= 18 && age <= 100;
}
```

Para validar esse método, podemos utilizar algumas técnicas de testes, como **partição de equivalência** e **análise de valor limite**, para termos uma boa cobertura do código. Com isso, teríamos que construir os seguintes testes:

```java
import com.matheusbereta.entities.User;
import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class UserTest {

    private User user;

    @BeforeClass
    void setUp() {
        user = new User();
    }

    @Test
    void shouldReturnFalseWhenAgeIs17() {
        Assert.assertFalse(user.isValidAge(17));
    }

    @Test
    void shouldReturnTrueWhenAgeIs18() {
        Assert.assertTrue(user.isValidAge(18));
    }

    @Test
    void shouldReturnTrueWhenAgeIs19() {
        Assert.assertTrue(user.isValidAge(19));
    }

    @Test
    void shouldReturnTrueWhenAgeIs50() {
        Assert.assertTrue(user.isValidAge(50));
    }

    @Test
    void shouldReturnTrueWhenAgeIs99() {
        Assert.assertTrue(user.isValidAge(99));
    }

    @Test
    void shouldReturnTrueWhenAgeIs100() {
        Assert.assertTrue(user.isValidAge(100));
    }

    @Test
    void shouldReturnFalseWhenAgeIs101() {
        Assert.assertFalse(user.isValidAge(101));
    }

}
```

Perfeito, temos uma boa cobertura de testes! Mas e se pudéssemos reduzir a quantidade de testes, dado que as asserções são somente _assertTrue_ ou _assertFalse_? É aí que entra o **DataProvider!** Vamos fazer um _refactor_ nesses testes utilizando esse poderoso recurso do **TestNG**.

```java
import com.matheusbereta.entities.User;
import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class UserTest {

    @DataProvider(name = "validAgeData")
    public Object[][] validAgeData() {
        return new Object[][] {
                {18},
                {19},
                {50},
                {99},
                {100},
        };
    }

    @DataProvider(name = "invalidAgeData")
    public Object[][] invalidAgeData() {
        return new Object[][] {
                {17},
                {101},
        };
    }

    private User user;

    @BeforeClass
    void setUp() {
        user = new User();
    }

    @Test(dataProvider = "validAgeData")
    void shouldReturnTrueWhenAgeIsValid(int validAge) {
        Assert.assertTrue(user.isValidAge(validAge));
    }

    @Test(dataProvider = "invalidAgeData")
    void shouldReturnFalseWhenAgeIsInvalid(int invalidAge) {
        Assert.assertFalse(user.isValidAge(invalidAge));
    }

}
```

Dessa forma temos o nosso código mais organizado, dado que utilizando a _annotation_ **@DataProvider**, centralizamos todos os dados utilizados em nossos testes e fazemos o reaproveitamento dos scripts de testes.

Com essa abordagem, também podemos acelerar o desenvolvimento de nossos testes, pensando primeiramente nos dados do teste e depois na construção do _script_.

Particularmente, acho a abordagem acima a ideal pois mescla o reaproveitamento de código com a organização dos dados de teste, porém, podemos reduzir ainda mais essa classe de testes, adicionando o resultado esperado como parâmetro do teste:

```java
import com.matheusbereta.entities.User;
import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class UserTest {

    @DataProvider(name = "ageData")
    public Object[][] ageData() {
        return new Object[][] {
                {17, false},
                {18, true},
                {19, true},
                {50, true},
                {99, true},
                {100, true},
                {101, false},
        };
    }

    private User user;

    @BeforeClass
    void setUp() {
        user = new User();
    }

    @Test(dataProvider = "ageData")
    void shouldReturnIfTheAgeIsValid(int age, boolean expectedResult) {
        Assert.assertEquals(user.isValidAge(age), expectedResult);
    }

}
```

Agora temos somente 1 _data provider_, 1 teste e **7 execuções**!

## Ah, mas eu uso o JUnit, e agora?!

Fique tranquilo! O _JUnit_ possui um recurso com o mesmo objetivo, porém com algumas diferenças na sintaxe e implementação, chamado de **ParameterizedTest**. Logo farei um artigo sobre!

## Conclusão

Eu concluo que você precisa utilizar o **DataProvider** urgentemente!

Esse recurso é muito poderoso e com certeza acrescentará muito para os seus testes. Inclusive, ele pode ser utilizado em qualquer tipo ou camada de teste: unitário, integrado, _UI_, etc.

Vou deixar [aqui o link](https://github.com/Matheeusb/selenium-ui-tests) de um projeto de testes de UI, utilizando _Selenium WebDriver_, aonde utilizo esse recurso do _DataProvider_.
