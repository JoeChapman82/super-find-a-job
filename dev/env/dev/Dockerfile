FROM keymetrics/pm2:latest-alpine

WORKDIR /usr/src/app

# Bundle APP files
COPY . .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# Expose the listening port of your app
EXPOSE 9080

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
