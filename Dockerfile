FROM node:10
ADD index.js /index.js
ENTRYPOINT [ "node", "index.js" ]
EXPOSE 8080
