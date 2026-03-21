FROM node:25-alpine3.22
WORKDIR /app
COPY package*.json . 
RUN npm i
COPY ./src ./src
ARG APP_PORT
ENV APP_PORT=$APP_PORT
EXPOSE $APP_PORT
CMD ["npm", "run" , "start"]