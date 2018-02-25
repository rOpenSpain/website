+++
title = "Test unitarios para paquetes de rOpenSpain"
+++

Desde rOpenSpain estamos comprometidos con la calidad del software que se produce. Es un síntoma de calidad el aplicar, no sólo buenas prácticas de programación, sino también aplicar un estilo de programación _"defensivo"_ en el sentido de que tenemos que saber de antemano que nuestro código va a fallar, y a veces de formas inesperadas.

Recomendamos por tanto que tu código pase los correspondientes procesos de comprobación/validación con paquetes como _testhat_ que permiten construir tests de prueba de manera paralela al código. Es una buena práctica construir los tests antes de empezar a programar, así podrás ver en todo momento si tu código da los resultados deseados. Como acompañante de _testthat_ recomendamos el uso del paquete [usethis](https://github.com/r-lib/usethis)

Os dejamos una breve guia muy simple de como usar estos paquetes:

1. Descargar e instalar _testhat_ y _usethis_ (seguramente también necesitarás instalar algunas dependencias)

   ```
   install.packages("testhat")
  
   ```
2.  Imaginemos que estás escribiendo una función que suma dos números (por mor de la sencillez en el ejemplo) y la guardamos en un archivo llamado *sum.R*

```
sum <- function(n, m){
    result <- n+m
    return(result)
}
```

3. Vemos que nuestro código funciona y seguimos programando, pero antes de continuar es muy buena idea construir un test unitario para nuestra función, porque estamos seguros de que vamos a seguir programando y alguno de los cambios o adiciones posteriores pueden provocar que nuestra función se comporte de manera inesperada. Para ello escribimos un archivo R de testeo denominado *test_sum.R* con el siguiente contenido (de nuevo, disculpad lo absurdo del ejemplo)

```
test_that("Test sum(4,16)",{
  expect_equal(sum(4,16), 20)
})
```
4. Este tipo de comprobaciones sencillas se pueden efectuar para muy diversos resultados esperados gracias al paquete _testthat_, que posee **expectations** para muchos tipos de comprobaciones, a saber:
  
    - expect_equal
    - expect_identical
    - expect_match
    - expect_output
    - expect_message
    - expect_warning
    - expect_error
    - expect_is
    
5. Una vez tengamos nuestros tests construidos, es muy sencillo ejecutarlos en nuestro código. La forma más simple es utilizando [usethis](https://github.com/r-lib/usethis). Assuming you're in a package directory, just run `usethis::use_test("name")` to create a test file, and set up all the other infrastructure you need. If you're using RStudio, press Cmd/Ctrl + Shift + T to run all the tests in a package.


9. Para profundizar en este tema, recomendamos el capitulo dedicado a testeo unitario en el libro de Hadley Wickam: 

http://r-pkgs.had.co.nz/tests.html


https://travis-ci.org/
