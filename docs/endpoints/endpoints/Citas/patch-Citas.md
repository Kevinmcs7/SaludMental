# Endpoint: `PATCH /Citas/{id}`

Permite obtener información detallada sobre como actualizar una cita ya existente  

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la Cita que quieras actualizar

## Ejemplo de Solicitud
```http
PATCH /Citas/7
```

## Respuesta Exitosa (Código 200 OK)
## Cita actualizada
```json
{
    "ID_Usuario": 1,
    "ID_Experto": 3,
    "Fecha_Cita": "2023-01-07 13:00:00.000",
    "Comentario": "Prueba creada con patch ..."
}
```

## Respuestas de Errores Posibles
- Código 404 Not found:

  ```json
  {
    "errno": 404,
    "error": "Not found"
    }
  ```

- Código 400 Bad Request:

  ```json
  {
    "errno": 400,
    "error": "Bad Request"
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

-Asegurate de incluir un ID válido en la solicitud para poder modificar esa 
Cita en especifico
