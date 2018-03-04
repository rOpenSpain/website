+++
title = "Issues y pull requests"
+++

Un _Issue_ es una nota en un repositorio que trata de llamar la atención sobre un problema. Puede ser un error a corregir, una petición para añadir una nueva opción o característica, una pregunta para aclarar algún tema que no está correctamente aclarado o muchas otras cosas diferentes. En GitHub puedes etiquetar, buscar o asignar _Issues_, haciendo que la gestión de un proyecto activo sea más sencilla.

El sistema de seguimiento de _Issues_ de GitHub es especial porque está enfocado en la colaboración, las referencias entre documentos y el adecuado formato de texto.

El _Pull Request_ es el núcleo del sistema colaborativo de GitHub. Cuando haces un _pull request_ estás en realidad proponiendo cambios para que alguien lo integre dentro del proyecto. GitHub te permite comparar el contenido de las dos ramas (una con tu propuesta y otra sin ella) de modo que con un sencillo código de colores puedas ver cuáles son las diferencias. Los cambios, adiciones y eliminaciones, se muestran en verde o rojo y se llaman _diffs_ (diferencias).

Si no estás familiarizado con el procedimiento de trabajo con GitHub te recomendamos que sigas este tutorial: [Aprende GitHub a tu ritmo](https://services.github.com/on-demand/es/)

### Breve guía para abrir un _Issue_ ###
  
  - Asegúrate de que tu petición no se ha hecho ya con anterioridad. Evita duplicar peticiones. [Aprende cómo buscar issues](https://help.github.com/articles/searching-issues-and-pull-requests/)
  - Si nadie ha hecho un _issue_ con tu petición. Haz click en la pestaña **Issues** de la barra lateral.
  - Haz click en el botón de _New Issue_
  - Dale un título suficientemente descriptivo y un texto aclaratorio de tu petición. Cuanto más claro seas, mejor. 
      - Explica el problema, cuál es el resultado esperado y cual es el realmente obtenido. 
      - Detalla uno a uno los pasos para repetir el problema. Incluye detalles como el sistema operativo, el navegador utilizado, la librería, o las versiones del software implicados en el mismo. 
      - Pega los mensajes de error o el contenido de los logs en el mismo _pull request_ o en un Gist. En caso de pegarlo en el propio texto abre y cierra con tres acentos franceses así: ``` que permiten que el código se muestre correctamente.
  - Haz click en _Submit New Issue_ cuando hayas terminado. Ahora este _Issue_ tiene una URL permanente que puedes referenciar para compartir.

Si quieres profundizar en el tema, sigue el siguiente enlace de la documentación oficial de GitHub: [Mastering Issues](https://guides.github.com/features/issues/)



### Breve guía para hacer Pull Request ###


  - Haz un _fork_ del repositorio con el que deseas contribuir haciendo click en el botón de la cabecera del repositorio. Deberás haber hecho _login_ en tu cuenta de GitHub.
  - Cuando esté completado se abrirá la página con tu copia del repositorio bifurcado, pero de momento solo existe en GitHub. Deberás **clonarlo:: en tu equipo local.
  - Ahora puedes realizar los cambios editando el código o la documentación en el repositorio clonado a partir del _fork_
  - Cuando estés satisfecho con los cambios, sigue el procedimiento normal de trabajo con _commit_ y _stage_ .
  - En el momento en que tus cambios sean completos, y corrijan o mejoren la característica que tenías pensado aportar, ya sea código o documentación, puedes hacer _push_ al repositorio.
  - En estos momentos tus cambios estén en el repositorio bifurcado, no en el original, de manera que debemos proceder a comunicar los cambios. Si entras en el repositorio, verás una nueva _bandera_ indicando que se ha hecho _push_ en una nueva rama y que esta rama se puede añadir al repositorio original.
  - Haz click en _Compare and Pull Request_ , se abrirá una página de discusión. En ella podrás incluir un título y una descripción opcional. Es importante que aportes toda la información necesaria para comprender porqué hiciste los cambios y en qué se basa tu mejora. El mantenedor del proyecto necesita poder determinar si el cambio es útil y/o necesario (recuerda que el mantenedor del proyecto puede tener en mente otras mejoras o cambios que pueden ser generadores de conflicto con tus aportaciones).
  - Envía el _pull request_

Los _pull request_ aparte de mejorar el código y la documentación existente por parte de la comunidad, son áreas de discusión muy activas, de modo que puede que tus cambios no se vean aceptados en el mismo instante. No te ofendas si el autor no acepta tus correcciones o pide más aclaraciones antes de aceptarlas. En cualquier caso, tus cambios estarán disponibles para todo el mundo gracias a que hiciste una bifurcación del proyecto original. Muchos proyectos originales se han visto mejorados de esta manera, incluso siendo superados por aquellos que se iniciaron como una bifurcación. Quizás en el futuro a alguien le parezca que tus aportaciones son extraordinarias y mejoran en gran manera el proyecto original.

Si quieres profundizar en el tema, sigue el siguiente enlace de la documentación oficial de Github: [Forking Projects](https://guides.github.com/activities/forking/)
