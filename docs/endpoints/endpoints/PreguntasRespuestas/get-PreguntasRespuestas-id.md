# Endpoint: `GET /PreguntasRespuestas/{id}`

Permite obtener información detallada sobre una Pregunta Y Respuesta específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la Pregunta Y respuesta que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /PreguntasRespuestas/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "ID_PreguntaRespuesta": 1,
    "ID_Test": 1,
    "Pregunta": "Pregunta 1 sobre ansiedad...",
    "Respuesta": "Respuesta 1..."
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "Not found"
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

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre esa Pregunta Y Respuesta en específico.
