# Endpoint: `GET /Usuarios`

Permite obtener información detallada sobre todos los Usuarios que estan disponibles

## Parámetros de URL
- sin parametro 

## Ejemplo de Solicitud
```http
GET /Usuarios/
```

## Respuesta Exitosa (Código 200 OK)
# Todos los Usuarios que estan dispobibles
```json
{
        "ID_Usuario": 1,
        "Nombre": "Juan",
        "Apellido": "Pérez",
        "Correo_Electronico": "juan.perez@example.com",
        "Contraseña": "contraseña123",
        "Fecha_Registro": "2023-01-01T08:00:00.000Z"
    },
    {
        "ID_Usuario": 2,
        "Nombre": "María",
        "Apellido": "López",
        "Correo_Electronico": "maria.lopez@example.com",
        "Contraseña": "clave456",
        "Fecha_Registro": "2023-01-02T10:30:00.000Z"
    },
    {
        "ID_Usuario": 3,
        "Nombre": "Ana",
        "Apellido": "García",
        "Correo_Electronico": "ana.garcia@example.com",
        "Contraseña": "clave789",
        "Fecha_Registro": "2023-01-12T12:30:00.000Z"
    },
    {
        "ID_Usuario": 4,
        "Nombre": "Pedro",
        "Apellido": "Martínez",
        "Correo_Electronico": "pedro.martinez@example.com",
        "Contraseña": "contraseñaABC",
        "Fecha_Registro": "2023-01-13T14:15:00.000Z"
    },
    {
        "ID_Usuario": 5,
        "Nombre": "Kevin 2 ",
        "Apellido": "Carrillo 2",
        "Correo_Electronico": "kevinmguel@gmail.com",
        "Contraseña": "123456",
        "Fecha_Registro": "2023-01-13T14:15:00.000Z"
    },
    {
        "ID_Usuario": 6,
        "Nombre": "Miguel 2",
        "Apellido": "Santana 2",
        "Correo_Electronico": "miguelsantana@gmail.com",
        "Contraseña": "1234567",
        "Fecha_Registro": "2023-01-13T14:15:00.000Z"
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

- Asegurate de incluir perfectamente la url para consultar los elementos que actualmente
estan en Usuarios
