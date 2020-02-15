# image
FROM node:latest

# app directory
WORKDIR /app

# copy files
COPY . .

# install dependencies
RUN npm install

# heroku env
ENV API_PORT=$PORT

# 'npm start'
# ENTRYPOINT ["npm", "start"]
CMD node src/app.js


EXPOSE 8080
