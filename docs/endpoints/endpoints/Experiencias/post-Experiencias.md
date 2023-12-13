# Endpoint: `POST /Experiencias`

Permite obtener información detallada sobre como crear una nueva experiencia

## Parámetros de URL
- sin parametro 

## Ejemplo de Solicitud
```http
POST /Experiencias/
```

## Respuesta Exitosa (Código 201 Created)
## Experiencia Creada
```json
{
    "ID_Usuario": 1,
    "Contenido": "Mi experiencia con post...",
    "Fecha_Publicacion": "2023-01-09 17:30:00.000"
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
