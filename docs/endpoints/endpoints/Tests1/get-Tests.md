# Endpoint: `GET /Tests`

Permite obtener información detallada sobre todos los Tests que estan disponibles

## Parámetros de URL
- sin parametro 

## Ejemplo de Solicitud
```http
GET /Tests/
```

## Respuesta Exitosa (Código 200 OK)
# Todos los Tests que estan dispobibles
```json
{
        "ID_Test": 1,
        "Titulo": "Test de Ansiedad",
        "Descripcion": "Descripción del test de ansiedad..."
    },
    {
        "ID_Test": 2,
        "Titulo": "Test de Depresión",
        "Descripcion": "Descripción del test de depresión..."
    },
    {
        "ID_Test": 3,
        "Titulo": "Test de Autoestima",
        "Descripcion": "Descripción del test de autoestima..."
    },
    {
        "ID_Test": 4,
        "Titulo": "Test de Resiliencia",
        "Descripcion": "Descripción del test de resiliencia..."
    },
    {
        "ID_Test": 5,
        "Titulo": "Test de prueba de post y patch",
        "Descripcion": "post creado y patch modificado..."
    },
    {
        "ID_Test": 6,
        "Titulo": "modificado patch",
        "Descripcion": "holaaaaaaaaaaaaaaaa..."
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
estan en Tests
