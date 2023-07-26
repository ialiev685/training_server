FROM node
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . .
CMD ["node", "build/index.js"]
EXPOSE 8000
