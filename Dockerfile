#Crear una iamgen a partir de Node.js
#Version Soporte a Largo Plazo - Ligera
FROM node:lts-slim

#Crea y cambiamos al directorio /app
WORKDIR /app

#Copiar el archivo package.json y package-lock.json a /app
COPY ./package*.json /app/

#Instalar las dpendencias de node
RUN npm install 

#Copia el contenido del proyecto a /app
COPY . /app

#Exponer el puerto 80
EXPOSE 80

CMD [ "npm", "start" ]
