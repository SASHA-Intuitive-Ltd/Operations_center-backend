FROM node:12-alpine

WORKDIR /Operations_center-backend
ADD package.json /Operations_center-backend/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm cache verify
RUN rm -rf node_modules
RUN npm install

ADD . /Operations_center-backend

EXPOSE 5000

CMD ["npm", "run", "start"]