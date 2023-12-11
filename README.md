# API RESTful con Node.js

Proyecto de demostracion para clases de desarrollo de API utilizando node.JS
sobre la salud mental que se ofrecera a los usuarios poder obtenr informacion,
y poder hacer diferentes test de la informacion dada, ademas podras agrendar citas
y tener poder compartir tu experiencia con los demas usuarios, ya sea con vivencias o
preguntas.

## Tabla de contenido

- [API RESTful con Node.js](#api-restful-con-nodejs)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Requisitos de instalación](#requisitos-de-instalación)
  - [Instrucciones para la instalación](#instrucciones-para-la-instalación)
  - [documentación detallada de los endpoints](#documentación-detallada).
  - [Enlaces externos](#enlaces-externos)

## Requisitos de instalación

Asegúrate de tener instalado y configurado Docker antes de comenzar.

- [Docker](https://www.docker.com)

## Instrucciones para la instalación

1. Clonar el repositorio en la máquina local:
   
   ```sh
   git clone https://github.com/Kevinmcs7/SaludMental.git
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd SaludMental
   ```

3. Ejecutar el siguiente comando para iniciar los contenedores:

    ```sh
    docker-compose up -d
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

4. La API estará disponible en `http://localhost:3000`.

## Documentación detallada

Para obtener información detallada sobre los endpoints y cómo utilizar la API,
consulta la [documentación detallada de los endpoints](./docs/endpoints/README.md).

## Enlaces externos

- [Node.js](https://www.nodejs.org)
- [Docker](https://www.docker.com)