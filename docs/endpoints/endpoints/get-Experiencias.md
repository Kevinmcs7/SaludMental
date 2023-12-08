# Endpoint: `GET /Experiencias`

Permite obtener información detallada sobre todos las Experiencias que estan disponibles

## Parámetros de URL
- sin parametro 

## Ejemplo de Solicitud
```http
GET /Experiencias/
```

## Respuesta Exitosa (Código 200 OK)
# Todos las Experiencias que estan dispobibles
```json
{
        "ID_Experiencia": 1,
        "ID_Usuario": 1,
        "Contenido": "Mi experiencia positiva...",
        "Fecha_Publicacion": "2023-01-09T17:30:00.000Z"
    },
    {
        "ID_Experiencia": 2,
        "ID_Usuario": 2,
        "Contenido": "Otra experiencia interesante...",
        "Fecha_Publicacion": "2023-01-10T19:00:00.000Z"
    },
    {
        "ID_Experiencia": 3,
        "ID_Usuario": 3,
        "Contenido": "Otra experiencia positiva...",
        "Fecha_Publicacion": "2023-01-20T17:30:00.000Z"
    },
    {
        "ID_Experiencia": 4,
        "ID_Usuario": 4,
        "Contenido": "Reflexiones personales...",
        "Fecha_Publicacion": "2023-01-21T19:00:00.000Z"
    },
    {
        "ID_Experiencia": 5,
        "ID_Usuario": 1,
        "Contenido": "prueba cambiada con patch...",
        "Fecha_Publicacion": "2023-01-09T17:30:00.000Z"
    },
    {
        "ID_Experiencia": 6,
        "ID_Usuario": 1,
        "Contenido": "otra prueba y creado con patch",
        "Fecha_Publicacion": "2023-01-09T17:30:00.000Z"
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
estan en Experiencias
