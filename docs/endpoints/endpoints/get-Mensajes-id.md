# Endpoint: `GET /Mensajes/{id}`

Permite obtener información detallada sobre un Mensaje específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del Mensaje que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /Mensajes/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "ID_Mensaje": 1,
    "ID_Usuario_Emisor": 1,
    "ID_Usuario_Receptor": 2,
    "Contenido": "Hola María, ¿cómo estás?",
    "Fecha_Envio": "2023-01-11T10:00:00.000Z"
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
  sobre ese Mensaje en específico.
