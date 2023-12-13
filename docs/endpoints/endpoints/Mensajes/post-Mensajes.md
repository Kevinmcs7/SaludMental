# Endpoint: `POST /Mensajes`

Permite obtener información detallada sobre como crear un nuevo Mensaje

## Parámetros de URL
- sin parametro 

## Ejemplo de Solicitud
```http
POST /Mensajes/
```

## Respuesta Exitosa (Código 201 Created)
## Mensaje Creado
```json
{
    "ID_Usuario_Emisor": 1,
    "ID_Usuario_Receptor": 2,
    "Contenido": "este mensaje es para la prueba de post",
    "Fecha_Envio": "2023-01-11 10:00:00.000"
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
