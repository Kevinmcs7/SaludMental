# Endpoint: `GET /PreguntasRespuestas`

Permite obtener información detallada sobre todos las Preguntas Y Respuestas que estan disponibles

## Parámetros de URL
- sin parametro 

## Ejemplo de Solicitud
```http
GET /PreguntasRespuestas/
```

## Respuesta Exitosa (Código 200 OK)
# Todas las Preguntas y respuestas que estan dispobibles
```json
{
        "ID_PreguntaRespuesta": 1,
        "ID_Test": 1,
        "Pregunta": "Pregunta 1 sobre ansiedad...",
        "Respuesta": "Respuesta 1..."
    },
    {
        "ID_PreguntaRespuesta": 2,
        "ID_Test": 1,
        "Pregunta": "Pregunta 2 sobre ansiedad...",
        "Respuesta": "Respuesta 2..."
    },
    {
        "ID_PreguntaRespuesta": 3,
        "ID_Test": 2,
        "Pregunta": "Pregunta 1 sobre depresión...",
        "Respuesta": "Respuesta 1..."
    },
    {
        "ID_PreguntaRespuesta": 4,
        "ID_Test": 2,
        "Pregunta": "Pregunta 2 sobre depresión...",
        "Respuesta": "Respuesta 2..."
    },
    {
        "ID_PreguntaRespuesta": 5,
        "ID_Test": 3,
        "Pregunta": "Pregunta 1 sobre autoestima...",
        "Respuesta": "Respuesta 1..."
    },
    {
        "ID_PreguntaRespuesta": 6,
        "ID_Test": 3,
        "Pregunta": "Pregunta 2 sobre autoestima...",
        "Respuesta": "Respuesta 2..."
    },
    {
        "ID_PreguntaRespuesta": 7,
        "ID_Test": 4,
        "Pregunta": "Pregunta 1 sobre resiliencia...",
        "Respuesta": "Respuesta 1..."
    },
    {
        "ID_PreguntaRespuesta": 8,
        "ID_Test": 4,
        "Pregunta": "Pregunta 2 sobre resiliencia...",
        "Respuesta": "Respuesta 2..."
    },
    {
        "ID_PreguntaRespuesta": 9,
        "ID_Test": 1,
        "Pregunta": "Pregunta 1 sobre ansiedad...",
        "Respuesta": "Respuesta post y patch"
    },
    {
        "ID_PreguntaRespuesta": 10,
        "ID_Test": 1,
        "Pregunta": "Pregunta 1 como puedo crear post 2...",
        "Respuesta": "Respuesta a creacion post 2"
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
estan en Preguntas Y Respuestas
