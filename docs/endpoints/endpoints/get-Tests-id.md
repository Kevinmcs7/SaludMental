# Endpoint: `GET /Tests/{id}`

Permite obtener información detallada sobre el Tests específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del Tests que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /Tests/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "ID_Test": 1,
    "Titulo": "Test de Ansiedad",
    "Descripcion": "Descripción del test de ansiedad..."
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
  sobre ese Tests en específico.
