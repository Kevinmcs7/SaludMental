# Endpoint: `GET /Mensajes`

Permite obtener información detallada sobre todos los Mensajes que estan disponibles

## Parámetros de URL
- sin parametro 

## Ejemplo de Solicitud
```http
GET /Mensajes/
```

## Respuesta Exitosa (Código 200 OK)
# Todos los Mensajes que estan dispobibles
```json
{
        "ID_Mensaje": 1,
        "ID_Usuario_Emisor": 1,
        "ID_Usuario_Receptor": 2,
        "Contenido": "Hola María, ¿cómo estás?",
        "Fecha_Envio": "2023-01-11T10:00:00.000Z"
    },
    {
        "ID_Mensaje": 2,
        "ID_Usuario_Emisor": 2,
        "ID_Usuario_Receptor": 1,
        "Contenido": "¡Hola Juan! Estoy bien, gracias.",
        "Fecha_Envio": "2023-01-11T10:15:00.000Z"
    },
    {
        "ID_Mensaje": 3,
        "ID_Usuario_Emisor": 3,
        "ID_Usuario_Receptor": 4,
        "Contenido": "Hola Pedro, ¿cómo estás?",
        "Fecha_Envio": "2023-01-22T10:00:00.000Z"
    },
    {
        "ID_Mensaje": 4,
        "ID_Usuario_Emisor": 4,
        "ID_Usuario_Receptor": 3,
        "Contenido": "¡Hola Ana! Todo bien, gracias.",
        "Fecha_Envio": "2023-01-22T10:15:00.000Z"
    },
    {
        "ID_Mensaje": 5,
        "ID_Usuario_Emisor": 1,
        "ID_Usuario_Receptor": 2,
        "Contenido": "prueba post ",
        "Fecha_Envio": "2023-01-11T10:00:00.000Z"
    },
    {
        "ID_Mensaje": 6,
        "ID_Usuario_Emisor": 1,
        "ID_Usuario_Receptor": 2,
        "Contenido": "prueba post 2 con patch",
        "Fecha_Envio": "2023-01-11T10:00:00.000Z"
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
estan en Mensajes
