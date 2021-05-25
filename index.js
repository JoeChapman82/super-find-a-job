require('dotenv').config();
const fs = require('fs');
const https = require('https');
const express = require('express');
const bootstrap = require('./app/middleware/bootstrap');
const PORT = process.env.PORT;
const app = express();
const config = require('./app/config/main');
const createJobs = require('./app/helpers/createJobs');

// const options = {
//     key: fs.readFileSync(process.env.KEY_FILE_PATH),
//     cert: fs.readFileSync(process.env.CERT_FILE_PATH)
// };

bootstrap(app);
app.locals.serviceName = config.serviceName;
createJobs(app);

// const server = https.createServer(options, app);

app.listen(PORT, () => console.log(`Super find a job listening on port ${PORT}`));