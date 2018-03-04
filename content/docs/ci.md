+++
title = "Integración continua"
+++

A partir del uso de _git_ ha surgido toda una panoplia de servicios que permiten testear y comprobar la calidad de nuestro código. El ecosistema _Open Source_ es una gran fuente de productos que pueden hacer que nuestro código sea mejor y nos ahorre mucho trabajo. Es el caso de la _Integración Continua_ (CI en el mundo anglosajón).

La Integración Continua es una *metodología*, que permite que a través del código fuente, cada vez que realices una actualización de los archivos, un servicio externo realiza todos los tests programados y ejecuta el código para comprobar si existen errores y compila correctamente.

Existen muchos servicios de este estilo, entre otros Jenkins, TeamCity, Continuum, solo por mencionar algunos, pero nosotros recomendamos el uso de [Travis CI](https://travis-ci.org/) para los paquetes R que desees alojar en rOpenSpain.

Travis es una compañía Europea (Alemania) que provee integración continua gracias a su enlace directo con GitHub, de modo que un cambio en tu repositorio provocará la ejecución en Travis. Es un sistema muy sencillo de utilizar, y aunque Travis no considera R como uno de sus lenguajes principales, tan solo con dos clicks tendrás disponible su servicio. 
Pese a ser un servicio de pago, si tu código es _Open Source_ ofrecen de manera gratuita sus prestaciones.

Veamos unas breves indicaciones de cómo usarlo:

- Utiliza GitHub para el versionado de tu código
- Crea un archivo en la raíz de tu repositorio con el siguiente contenido:

```
# R for travis: see documentation at https://docs.travis-ci.com/user/languages/r

language: R
sudo: false
cache: packages
```

- Entra en https://travis-ci.org/ con tu cuenta de GitHub y acepta enlazar con tu repositorio (si tienes varios te permitirá elegir para cuáles deseas activar la integración continua). 

- Activa la integración continua para el repositorio vinculado en el paso anterior.

Desde este momento cada vez que realices un cambio en el código, _Travis_ tratará de ejecutar todos los tests (recomendamos nuestra [guía sobre testeo unitario](https://ropenspain.es/docs/tests_unitarios/)) y compilará tu paquete. Si hay errores te lo comunicará.

- Es interesante [añadir la insignia de _Travis_](https://docs.travis-ci.com/user/status-images/) en el archivo README de tu repositorio. De este modo todo el mundo podrá saber que trabajas utilizando integración continua, siguiendo unas buenas prácticas de desarrollo.

- Recuerda que una vez que tu paquete esté en rOpenSpain deberás dar permisos de nuevo porque la ruta de tu paquete habrá cambiado. Entra en tu cuenta de _travis_ y activa los permisos para el repositorio en su nueva ruta.




