require('dotenv').config();

const path = require('path');
const fs = require('fs');
const https = require('https');
const express = require('express');
const bootstrap = require('./app/middleware/bootstrap');
const connectToDb = require(path.join(__dirname, '/app/model/init'));
const createInitialUser = require('./app/functions/createInitialUser');

const PORT = process.env.PORT || 4500;
const app = express();

connectToDb();
bootstrap(app);
createInitialUser();

if(process.env.NODE_ENV === 'local') {
    const options = {
        key: fs.readFileSync(process.env.KEY_FILE_PATH),
        cert: fs.readFileSync(process.env.CERT_FILE_PATH)
    };
    const server = https.createServer(options, app);
    server.listen(PORT, () => console.log(`Wildlife Trust of India https server listening on port: ${PORT}`));
} else {
    app.listen(PORT, () => console.log(`Wildlife Trust of India server listening on port: ${PORT}`));
}
