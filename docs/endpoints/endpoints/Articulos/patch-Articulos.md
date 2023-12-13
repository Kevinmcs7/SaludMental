# Endpoint: `PATCH /Articulos/{id}`

Permite obtener información detallada sobre como actualizar registro ya existente 

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del Articulo que quieras actualizar

## Ejemplo de Solicitud
```http
PATCH /Articulos/7
```

## Respuesta Exitosa (Código 200 OK)
## Articulo actualizado
```json
{
        "Titulo": "prueba patch ",
        "Contenido": "Contenido del artículo sobre manejo del estrés...",
        "Fecha_Publicacion": "2023-01-03 14:45:00.000",
        "ID_Usuario_Autor": 1
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
Articulo en especifico
