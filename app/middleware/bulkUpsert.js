const streamBuffers = require('stream-buffers');
const readline = require('readline');
const mapKeys = require('../config/mapKeys');
const Record = require('../model/record/record');
const uuidV4 = require('uuid/v4');

module.exports = (req, res, next) => {
    const readStream = new streamBuffers.ReadableStreamBuffer({});
    let lineNumber = 1;
    var bulkOperations = [];
    let keys;
    readStream.put(req.file.buffer);
    readStream.stop();

    const rl = readline.createInterface({
        input: readStream
    });

    rl.on('line', (line) => {
        if(lineNumber !== 1) {
            let recordToUpdate = {};
            let values = line.split(',');
            if(values.length > 2) {
                for(let i = 0; i < values.length; i++) {
                    values[i] = values[i].trim();
                    recordToUpdate[mapKeys[keys[i]]] = values[i];
                    recordToUpdate.caseNumber = uuidV4();
                }
                let upsertDoc = {
                    'updateOne': {
                        'filter': {caseNumber: recordToUpdate.caseNumber},
                        'update': recordToUpdate,
                        'upsert': true
                    }};
                bulkOperations.push(upsertDoc);            }
        } else {
            keys = line.split(',');
        }
        lineNumber++;
    });

    rl.on('close', () => {
        console.log('read stream closed');
        req.file = undefined;
        Record.collection.bulkWrite(bulkOperations)
            .then(bulkWriteOpResult => {
                res.locals.fileReceived = {uploadFile: {msg: 'File received. Commencing upload process. This may take a few minutes.'}};
                return next();
            })
            .catch( err => {
                console.log('BULK update error');
                console.log(JSON.stringify(err, null, 2));
                res.locals.errors = {fileUpload: {msg: 'Error uploading to db'}};
                return next();
            });
    });

    rl.on('error', (error) => {
        console.log(error);
        req.file = undefined;
        console.log('read stream errors');
        res.locals.errors = {uploadFile: {msg: 'Error uploading file'}};
        return next();
    });


};
