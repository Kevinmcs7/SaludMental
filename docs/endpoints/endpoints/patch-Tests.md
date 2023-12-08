# Endpoint: `PATCH /Tests/{id}`

Permite obtener información detallada sobre como actualizar registro ya existente 

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del Tests que quieras actualizar

## Ejemplo de Solicitud
```http
PATCH /Tests/8
```

## Respuesta Exitosa (Código 200 OK)
## Tests actualizado
```json
{
        "Titulo": "Test de practica de post y patch",
        "Descripcion": "Descripción del test de post y patch..."
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
Tests en especifico
