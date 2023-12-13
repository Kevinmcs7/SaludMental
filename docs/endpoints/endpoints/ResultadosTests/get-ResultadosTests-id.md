# Endpoint: `GET /ResultadosTests/{id}`

Permite obtener información detallada sobre el ResultadoTests específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del Resultado del Tests que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /ResultadosTests/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "ID_Resultado": 1,
    "ID_Usuario": 1,
    "ID_Test": 1,
    "Puntuacion": 8,
    "Fecha_Realizacion": "2023-01-05T09:30:00.000Z"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "Not found"
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

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre ese ResultadoTests en específico.
