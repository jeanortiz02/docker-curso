
FROM node:19.2-alpine3.17
#/ app

#cd app
WORKDIR /app

#dest /app
# COPY package.json ./
# COPY ./test/tasks/sync-db.test.js app.js package.json ./
COPY package.json ./

# Instalar las dependencies
RUN npm install 

COPY . .

#/ Realizar testing 
RUN npm run test

# Eliminar archivos y dependencies innecesario en PROD
RUN rm -rf test 
RUN rm -rf node_modules 

# Unicamente las devs de produccion
RUN npm install --prod

# Comando run de la imagen
CMD [ "node", "app.js" ]

