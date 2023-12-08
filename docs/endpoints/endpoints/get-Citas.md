# Endpoint: `GET /Citas`

Permite obtener información detallada sobre todas la citas que estan disponibles

## Parámetros de URL
- sin parametro 

## Ejemplo de Solicitud
```http
GET /Citas/
```

## Respuesta Exitosa (Código 200 OK)
# Todos las Citas que estan dispobibles
```json
{
        "ID_Cita": 1,
        "ID_Usuario": 1,
        "ID_Experto": 3,
        "Fecha_Cita": "2023-01-07T13:00:00.000Z",
        "Comentario": "Comentario sobre la cita..."
    },
    {
        "ID_Cita": 2,
        "ID_Usuario": 2,
        "ID_Experto": 4,
        "Fecha_Cita": "2023-01-08T15:45:00.000Z",
        "Comentario": "Otro comentario sobre la cita..."
    },
    {
        "ID_Cita": 3,
        "ID_Usuario": 3,
        "ID_Experto": 5,
        "Fecha_Cita": "2023-01-18T14:00:00.000Z",
        "Comentario": "Comentario sobre la cita..."
    },
    {
        "ID_Cita": 4,
        "ID_Usuario": 4,
        "ID_Experto": 6,
        "Fecha_Cita": "2023-01-19T15:45:00.000Z",
        "Comentario": "Otro comentario sobre la cita..."
    },
    {
        "ID_Cita": 5,
        "ID_Usuario": 1,
        "ID_Experto": 3,
        "Fecha_Cita": "2023-01-07T13:00:00.000Z",
        "Comentario": "Comentario sobre la cita..."
    },
    {
        "ID_Cita": 6,
        "ID_Usuario": 1,
        "ID_Experto": 3,
        "Fecha_Cita": "2023-01-07T13:00:00.000Z",
        "Comentario": "cambialo"
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
estan en Citas
