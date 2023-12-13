# Endpoint: `POST /Articulos`

Permite obtener información detallada sobre como crear un nuevo articulo

## Parámetros de URL
- sin parametro 

## Ejemplo de Solicitud
```http
POST /Articulos/
```

## Respuesta Exitosa (Código 201 Created)
## Articulo Creado
```json
{
    "Titulo": "prueba de post",
    "Contenido": "Contenido del artículo sobre manejo del estrés...",
    "Fecha_Publicacion": "2023-01-03 00:00:00.000",
    "ID_Usuario_Autor": 1
}
```

## Respuestas de Errores Posibles
- Código 400 Bad Request:

  ```json
  {
    "status": 400,
    "message": "Bad Request"
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

- Asegurate de incluir todos los campos correctamente en la insercion ya que si no estan todos
los datos no podra hacer el metodo post
