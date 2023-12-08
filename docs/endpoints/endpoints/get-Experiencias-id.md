# Endpoint: `GET /Experiencias/{id}`

Permite obtener información detallada sobre una Experiencia en específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la Experiencia que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /Experiencias/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "ID_Experiencia": 1,
    "ID_Usuario": 1,
    "Contenido": "Mi experiencia positiva...",
    "Fecha_Publicacion": "2023-01-09T17:30:00.000Z"
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
  sobre esa Experiencia en específico.
