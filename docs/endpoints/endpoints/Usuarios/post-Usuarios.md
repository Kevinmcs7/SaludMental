# Endpoint: `POST /Usuarios`

Permite obtener información detallada sobre como crear un nuevo Usuario

## Parámetros de URL
- sin parametro 

## Ejemplo de Solicitud
```http
POST /Usuarios/
```

## Respuesta Exitosa (Código 201 Created)
## Usuario Creado
```json
{
    "Nombre": "prueba",
    "Apellido": "post",
    "Correo_Electronico": "post@example.com",
    "Contraseña": "post123",
    "Fecha_Registro": "2023-01-01 08:00:00.000"
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
