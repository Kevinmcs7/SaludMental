# Endpoint: `GET /ResultadosTests`

Permite obtener información detallada sobre todos los Resultados del Tests que estan disponibles

## Parámetros de URL
- sin parametro 

## Ejemplo de Solicitud
```http
GET /ResultadosTests/
```

## Respuesta Exitosa (Código 200 OK)
# Todos los Resultados de Tests que estan dispobibles
```json
{
        "ID_Resultado": 1,
        "ID_Usuario": 1,
        "ID_Test": 1,
        "Puntuacion": 8,
        "Fecha_Realizacion": "2023-01-05T09:30:00.000Z"
    },
    {
        "ID_Resultado": 2,
        "ID_Usuario": 2,
        "ID_Test": 2,
        "Puntuacion": 6,
        "Fecha_Realizacion": "2023-01-06T11:15:00.000Z"
    },
    {
        "ID_Resultado": 3,
        "ID_Usuario": 3,
        "ID_Test": 3,
        "Puntuacion": 7,
        "Fecha_Realizacion": "2023-01-16T10:30:00.000Z"
    },
    {
        "ID_Resultado": 4,
        "ID_Usuario": 4,
        "ID_Test": 4,
        "Puntuacion": 9,
        "Fecha_Realizacion": "2023-01-17T12:15:00.000Z"
    },
    {
        "ID_Resultado": 5,
        "ID_Usuario": 4,
        "ID_Test": 4,
        "Puntuacion": 9,
        "Fecha_Realizacion": "2023-01-17T12:15:00.000Z"
    },
    {
        "ID_Resultado": 6,
        "ID_Usuario": 4,
        "ID_Test": 4,
        "Puntuacion": 25,
        "Fecha_Realizacion": "2023-01-17T12:15:00.000Z"
    },
    {
        "ID_Resultado": 7,
        "ID_Usuario": 4,
        "ID_Test": 2,
        "Puntuacion": 100,
        "Fecha_Realizacion": "2023-01-17T12:15:00.000Z"
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
estan en ResultadosTests
