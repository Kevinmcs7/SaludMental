# Endpoint: `GET /Citas/{id}`

Permite obtener información detallada sobre una Cita en específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la Cita que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /Citas/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "ID_Cita": 1,
    "ID_Usuario": 1,
    "ID_Experto": 3,
    "Fecha_Cita": "2023-01-07T13:00:00.000Z",
    "Comentario": "Comentario sobre la cita..."
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
  sobre esa cita en especifico
