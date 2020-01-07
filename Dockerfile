FROM node:lts
WORKDIR /app
COPY package.json package-lock.json tsconfig.json ./
COPY src/ ./src
RUN npm run build
CMD [ "npm", "start" ]