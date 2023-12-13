# Endpoint: `POST /PreguntasRespuestas`

Permite obtener información detallada sobre como crear una nueva Pregunta Y Respuesta

## Parámetros de URL
- sin parametro 

## Ejemplo de Solicitud
```http
POST /PreguntasRespuestas/
```

## Respuesta Exitosa (Código 201 Created)
## Pregunta Y Respuesta Creada
```json
{
    "ID_Test": 1,
    "Pregunta": "Pregunta 1 que es el post..",
    "Respuesta": "Mandar informacion que recibe un elemento..."
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
