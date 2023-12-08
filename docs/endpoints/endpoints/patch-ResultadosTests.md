# Endpoint: `PATCH /ResultadosTests/{id}`

Permite obtener información detallada sobre como actualizar registro ya existente 

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del ResultadoTests que quieras actualizar

## Ejemplo de Solicitud
```http
PATCH /ResultadosTests/8
```

## Respuesta Exitosa (Código 200 OK)
## ResultadoTests actualizado
```json
{
        "ID_Usuario": 2,
        "ID_Test": 3,
        "Puntuacion": 300,
        "Fecha_Realizacion": "2023-01-05 09:30:00.000"
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

-Asegurate de incluir un ID válido en la solicitud para poder modificar ese 
ResultadoTests en especifico
