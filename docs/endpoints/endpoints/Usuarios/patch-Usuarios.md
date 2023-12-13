# Endpoint: `PATCH /Usuarios/{id}`

Permite obtener información detallada sobre como actualizar Un usuario ya existente 

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del Articulo que quieras actualizar

## Ejemplo de Solicitud
```http
PATCH /Usuarios/7
```

## Respuesta Exitosa (Código 200 OK)
## Articulo actualizado
```json
{
        "Nombre": "prueba",
        "Apellido": "post y patch",
        "Correo_Electronico": "postpatch@example.com",
        "Contraseña": "postpatch123",
        "Fecha_Registro": "2023-01-01 08:00:00.000"
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

-Asegurate de incluir un ID válido en la solicitud para poder modificar ese 
Usuario en especifico
