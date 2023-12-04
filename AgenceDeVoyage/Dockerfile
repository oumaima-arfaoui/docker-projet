# FROM  node:18 
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 4200
# CMD [ "npm","start" ]
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

EXPOSE 80

CMD ["npm", "run", "start"]
