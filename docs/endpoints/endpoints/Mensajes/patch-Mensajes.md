# Endpoint: `PATCH /Mensajes/{id}`

Permite obtener información detallada sobre como actualizar un mensaje ya existente 

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del Mensaje que quieras actualizar

## Ejemplo de Solicitud
```http
PATCH /Mensajes/7
```

## Respuesta Exitosa (Código 200 OK)
## Articulo actualizado
```json
{
    "ID_Usuario_Emisor": 1,
    "ID_Usuario_Receptor": 2,
    "Contenido": "este mensaje es para la prueba de post y actualizar patch",
    "Fecha_Envio": "2023-01-11 10:00:00.000"
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
Mensaje en especifico
