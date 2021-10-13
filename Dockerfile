FROM node:lts-alpine
ADD index.js /index.js
ENTRYPOINT [ "node", "index.js" ]
EXPOSE 8080
