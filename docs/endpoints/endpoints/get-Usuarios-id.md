# Endpoint: `GET /Usuarios/{id}`

Permite obtener información detallada sobre un Usuario específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del Usuario que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /Usuarios/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "ID_Usuario": 1,
    "Nombre": "Juan",
    "Apellido": "Pérez",
    "Correo_Electronico": "juan.perez@example.com",
    "Contraseña": "contraseña123",
    "Fecha_Registro": "2023-01-01T08:00:00.000Z"
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
  sobre ese Usuario en específico.
