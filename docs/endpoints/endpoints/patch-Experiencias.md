# Endpoint: `PATCH /Experiencias/{id}`

Permite obtener información detallada sobre como actualizar una experiencia ya existente 

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la expereiencia que quieras actualizar

## Ejemplo de Solicitud
```http
PATCH /Experiencias/7
```

## Respuesta Exitosa (Código 200 OK)
## Articulo actualizado
```json
{
    "ID_Usuario": 1,
    "Contenido": "Mi experiencia con post y patch...",
    "Fecha_Publicacion": "2023-01-09 17:30:00.000"
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

-Asegurate de incluir un ID válido en la solicitud para poder modificar esa Experiencia 
en especifico
