# Endpoint: `GET /Articulos`

Permite obtener información detallada sobre todos los Articulos que estan disponibles

## Parámetros de URL
- sin parametro 

## Ejemplo de Solicitud
```http
GET /Articulos/
```

## Respuesta Exitosa (Código 200 OK)
# Todos los articulos que estan dispobibles
```json
{
        "ID_Articulo": 1,
        "Titulo": "holaaaaaaaaaaaaa",
        "Contenido": "Contenido del artículo sobre manejo del estrés...",
        "Fecha_Publicacion": "2023-01-03T14:45:00.000Z",
        "ID_Usuario_Autor": 1
    },
    {
        "ID_Articulo": 2,
        "Titulo": "Consejos para una buena salud mental",
        "Contenido": "Contenido del artículo sobre salud mental...",
        "Fecha_Publicacion": "2023-01-04T16:20:00.000Z",
        "ID_Usuario_Autor": 2
    },
    {
        "ID_Articulo": 3,
        "Titulo": "Cómo mejorar la calidad del sueño",
        "Contenido": "Contenido del artículo sobre el sueño...",
        "Fecha_Publicacion": "2023-01-14T16:45:00.000Z",
        "ID_Usuario_Autor": 3
    },
    {
        "ID_Articulo": 4,
        "Titulo": "Importancia de la actividad física",
        "Contenido": "Contenido del artículo sobre ejercicio...",
        "Fecha_Publicacion": "2023-01-15T18:30:00.000Z",
        "ID_Usuario_Autor": 4
    },
    {
        "ID_Articulo": 5,
        "Titulo": "Cómo manejar el estrés",
        "Contenido": "Contenido del artículo sobre manejo del estrés...",
        "Fecha_Publicacion": "2023-01-03T00:00:00.000Z",
        "ID_Usuario_Autor": 1
    },
    {
        "ID_Articulo": 6,
        "Titulo": "prueba de post",
        "Contenido": "Contenido del artículo sobre manejo del estrés...",
        "Fecha_Publicacion": "2023-01-03T00:00:00.000Z",
        "ID_Usuario_Autor": 1
    }
```

## Respuestas de Errores Posibles
- Código 400 Bad Request:

  ```json
  {
    "status": 400,
    "message": "Bad Request"
    }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir perfectamente la url para consultar los elementos que actualmente
estan en articulos
