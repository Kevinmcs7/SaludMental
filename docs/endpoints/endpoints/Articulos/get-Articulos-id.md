# Endpoint: `GET /Articulos/{id}`

Permite obtener información detallada sobre un Articulo específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del Articulo que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /Articulos/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "ID_Articulo": 1,
    "Titulo": "holaaaaaaaaaaaaa",
    "Contenido": "Contenido del artículo sobre manejo del estrés...",
    "Fecha_Publicacion": "2023-01-03T14:45:00.000Z",
    "ID_Usuario_Autor": 1
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
  sobre ese Articulo en específico.
