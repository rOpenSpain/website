+++
title = "Guía de estilo de rOpenSpain"
+++

## Mensajes de error

Usa `message()` y `warning()` para lanzar mensajes al usuario que usa tus funciones. Por favor, no uses `print()` o `cat()` a menos que el cometido sea utilizar un método de impresión por pantalla dado que son más difíciles de suprimir por parte de los usuarios en caso de que lo deseen.

## Paquetes recomendados

Además de los ya recomendados en el resto de apartados (_roxygen2, usethis, knitr, testthat_), recomendamos los siguientes:

  - Para peticiones http es mejor usar `httr` en lugar de `RCurl`.
  - Para el procesamiento de JSON, usa `jsonlite` en lugar de `rjson` o `RJSONIO`.
  - Para el procesado, creación y manipulación de XML, recomendamos el uso de `xml2` en términos generales.

## Nombres de paquetes

Recomendamos nombres cortos y descriptivos en minúsculas. Si tu paquete tiene vinculaciones con servicios comerciales por favor asegúrate de que no viola las leyes de propiedad intelectual, las marcas y patentes. Puedes comprobar si el nombre del paquete está ya utilizado con una búsqueda en el [listado completo de paquetes de CRAN](https://cran.r-project.org/web/packages/available_packages_by_name.html), en el [listado de paquetes R de GitHub](http://rpkg.gepuro.net/) o el buscador de paquetes y funciones de https://www.rdocumentation.org

¡También puedes usar el paquete [`available`](https://github.com/ropenscilabs/available) y hacerlo con R!

## Nombres de funciones y sintaxis general


* Recomendamos el uso de `snake_case` en términos generales sobre otros estilos a menos que estés aportando otro paquete que ya esté en uso.

* Evita siempre conflictos de nombres entre tus funciones y las de los paquetes de base de R. También evita este conflicto con otros paquetes populares como `ggplot2`, `dplyr`, `magrittr` o `data.table`. Si quieres que tu función se use, es mejor que no se llame igual que otra que ya existe.

* Considera una nomenclatura de `objeto_verbo()` para funciones en tu paquete que usen tipos de datos similares o utilicen una API común. Por `objeto` nos referimos a los datos o al API y por `verbo` nos referimos a la acción principal de dicha función. Esto ayuda a evitar conflictos de nombres con paquetes que tengan similares verbos o funciones, haciendo el código más legible y fácil de autocompletar. Por poner un ejemplo, en **stringi**, todas las funciones que empiezan por `stri_` manipulan cadenas de texto (`stri_join()`, `stri_sort()`, o en otyro caso, el paquete **googlesheets** ofrece funciones que comienzan por `gs_` y que son llamadas a la API de Google Sheets (`gs_auth()`, `gs_user()`, `gs_download()`).

* Las funciones que manipulan un objeto o dato concreto y retornan un objeto o dato del mismo tipo recomendamos que lleven como primer argumento dicho dato u objeto. De este modo ganarás compatibilidad con el operador tubería (pipe) de magrittr (`%>%`)

* Para más información sobre cómo adaptar estilos de código, funciones y scripts en R, recomendamos la lectura del capítulo dedicado a este tema en el conocido [libro de Hadley Wickam](http://r-pkgs.had.co.nz/r.html).

## Documentación

* Todas las funciones exportadas de un paquete deben ser extensamente documentadas incluyendo ejemplos claros.

* El paquete debe de incluir documentación global que se pueda ver con la llamada a la función `?foobar`, (o `?foobar-paquete` si hay un caso de conflicto de nombres). Opcionalmente podrás usar ambos comandos para el fichero del manual, utilizando `?foobar` y `?foobar-paquete` mediante etiquetas roxygen de tipo `@aliases`.

* El paquete debe de contener como mínimo una viñeta que provea una introducción a las funciones principales y casos de uso sencillos.

* Igual que en el caso del archivo README, la documentación de nivel superior o las viñetas deben ser el principal punto de entrada para los usuarios. Si tu paquete conecta a una fuente de datos externa o a un servicio online, o si envuelve otro software externo, debe de proveer suficiente información al usuario para comprender la naturaleza de el dato, el servicio, el software utilizado, etcétera. Así mismo debe proveer de enlaces a cualquier información relevante.
Por ejemplo, una viñeta no debería solamente decir cosas como: "ofrece acceso al servicio web del ..." sino que también debe de incluir un repositorio de los diferentes servicios que el citado servicio online provee, información general sobre su funcionamiento, la documentación de la estructura de los datos y sus metadatos, todo ello accesible mediante enlaces visibles.                      

* Recomendamos encarecidamente que todos los paquetes tengan `roxygen2` como método de documentación fundamental.  `roxygen2` es [un paquete R](http://cran.r-project.org/web/packages/roxygen2/index.html) cuya función principal es compilar  los ficheros `.Rd` en el directorio `man` del paquete, con sencillas etiquetas añadidas sobre cada función.

* Puedes encontrar ms información sobre roxygen2 [aquí](http://r-pkgs.had.co.nz/man.html) en el mencionado libro de Hadley Wickham sobre paquetes R.

* Una de las principales ventajas del uso de `roxygen2`  es que el `NAMESPACE` siempre se genera automáticamente y está siempre actualizado.

* Cuando utilizes `roxygen2`, añade `#' @noRd` a las funciones internas.

## Autoría

El archivo `DESCRIPTION` de un paquete debe listar a sus autores y contribuyentes principales utilizando la sintaxis `Authors@R` para indicar sus roles (author/creator/contributor etc.) si ocurriese que hay mas de un autor. Puedes leer [esta sección del manual de R: "Writing R Extensions"](https://cran.rstudio.com/doc/manuals/r-release/R-exts.html#The-DESCRIPTION-file) para más detalles. Si crees que los revisores han hecho contribuciones sustanciales al desarrollo de tu paquete, puedes listarlos en el campo `Authors@R` asignándoles el tipo "revisor" (`"rev"`), por ejemplo así:

```
    person("María", "Pérez", role = "rev",
    comment = "María revisó el paquete para rOpenSpain, ver <https://github.com/rOpenSpain/onboarding/issues/116>"),
```

Solamente debes incluir los revisores si previamente te han dado su consentimiento. Debes tener en cuenta que 'rev' lanzará una CRAN NOTE a menos que el paquete se compile utilizando R v3.5 (r-devel desde 2017-09-21).

Por favor no liste editores como contribuyentes. Tu participación y tu contribución a rOpenSpain nos parece un gran aporte que consideramos como un agradecimiento suficiente hacia este proyecto. 🙂

## _Testing_

* Todos los paquetes deben de pasar el test `R CMD check`/`devtools::check()` de todas las plataformas principales.

* Todos los paquetes deben tener un conjunto de tests que cubra las funcionalidades principales del mismo.

* Recomendamos parta este fin usar `testthat`. Persevera en escribir tests al mismo tiempo que escribes las funciones. Esto sirve en primer lugar para tener tests disponibles para las mismas, pero también te ayudará a pensar en todas las formas en que tu función puede fallar y programarás de forma más _defensiva_. [Más información](http://r-pkgs.had.co.nz/tests.html).

* `testthat` tiene una función denominada `skip_on_cran()` que puedes utilizar para que no corran los tests en CRAN. Recomendamos usarlo en todas las  funciones que incluyen llamadas a APIs externas que tienen bastantes probabilidades de fallar en CRAN. Estos tests seguirán corriendo en Travis sin embargo.

* Comprueba la extensión de la cobertura de tus tests con el paquete [**covr**](https://github.com/jimhester/covr). Incluyendo una insignia o distintivo (badge) con la cobertura de los tests en tu README haces más fácil que los revisores vean en qué extensión están testadas las funciones de tu paquete. No se requiere cobertura al 100%, pero los editores y los revisores utilizarán los informes de cobertura como punto de partida para evaluar si tus test cubren las funcionalidades principales.

* Aún usando [integración continua](#ci), recomendamos que se corran los tests de manera local antes de enviarnos el paquete, ya que sabemos que muchos tests a veces son soslayados. (Podrías necesitar el ajuste de `Sys.setenv(NOT_CRAN="true")` para asegurarte de que se ejecuten todos.) Además recomendamos que antes de enviarnos tu paquete uses las buenas prácticas que propone [**Gabor Csardi**](https://github.com/MangoTheCat/goodpractice/) en su paquete y ejecutar `devtools::spell_check()` para encontrar errores de escritura en la documentación.

## Versionado

 Recomendamos que tu paquete use versionado semántico. Una explicación detallada sobre el mismo está disponible en [este capítulo](http://r-pkgs.had.co.nz/description.html#version).  Etiqueta cada versión después de enviar a CRAN. [más información](http://marker.to/ZYd3kZ)
 
También puedes leer la [documentación oficial sobre versionado semántico](https://semver.org/)
 

## Dependencias


* Usa `Imports` en lugar de `Depends` para paquetes que provean funciones de otros paquetes. Asegúrate de listar los paquetes utilizados en los tests (`testthat`), y la documentación (`knitr`, `roxygen2`)  en la sección `Suggests` de las dependencias. Si usas cualquier otro paquete en los ejemplos, asegúrate también de listarlos si no están mencionados en otro lugar, en la sección `Enhances`.

* Para la mayoría de los casos donde expones funciones de dependencias al usuario deberas importar y re-exportar las funciones concretas en lugar de simplemente mencionarlas en el campo `Depends`. Por ejemplo, si las funciones en tu paquete producen objetos de un tipo concreto que usas para hacer gráficos, deberas re-exportar solamente las funciones que imprimen o dibujan los gráficos en lugar del paquete entero.

## Cosas a tener en cuenta

Hay una serie de problemas comunes encontrados a la hora de publicar un paquete en CRAN. Tenlas en cuenta:

  - Asegúrate de que el titulo está en _Title Case_.
  - No pongas un punto al final del título.
  - Evita comenzar el apartado de la descripción con el nombre del paquete o la expresión _Este paquete...._. Sé más informativo.
  - Asegúrate de incluir enlaces a paginas web si haces _scraping_, usas APIs de terceros, etcétera en el campo `Description` del archivo `DESCRIPTION` del paquete.
  - Evita los tests y los ejemplos que tardan demasiado en ejecutarse o realizan llamadas a APIs externas que son lentas porque CRAN rechazará tu paquete. Usa `testthat::skip_on_cran` en los tests para evitar la ejecución de los que tardan demasiado pero deseas que se comprueben localmente o en entornos de CI como Travis (ver nuestra [Guía de integración continua](#ci)).
  - Inluye los archivos globales como `paper.md` o `.travis.yml` en el `.Rbuildignore`.

## Enlaces recomendados


* Hadley Wickham's _R Packages_ es un buen libro sobre el desarrollo de paquetes y está disponible [de manera gratuita en la web](http://r-pkgs.had.co.nz/).

* [Writing R Extensions](https://cran.r-project.org/doc/manuals/r-release/R-exts.html) es el libro canónico y más actualizado sobre el proceso de creación de paquetes para R.

* Si añades un paquete a rOpenSpain puedes enviar tus cuestiones al equipo rector de rOpenSpain en el issue tracker, o a través de nuestro formulario de contacto.
