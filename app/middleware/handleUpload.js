const multer  = require('multer');
const fs = require('fs');
const renders = require('../controllers/renders');

let isIncorrectType = false;

const memoryStorage = multer.memoryStorage();

// Checks for a csv file - if not, the file is rejected and is undefined at 'upload' execution time
function fileFilterCsv (req, file, callback) {
    if(file.mimetype !== 'text/csv') {
        isIncorrectType = true;
        callback(null, false);
    } else {
        callback(null, true);
        isIncorrectType = false;
    }
}

module.exports = (req, res, next) => {
    let fileErrorMessage = 'only upload .csv files';
    let reloadPage = 'adminBulkUpload';
    let upload = multer({ storage: memoryStorage, fileFilter: fileFilterCsv, limits: {fileSize: 80000000}}).single('uploadFile');
    upload(req, res, (err) => {
        if(err) {
            console.log(err);
            if(err.code === 'LIMIT_FILE_SIZE') {
                res.locals.errors = {uploadFile: {msg: 'Reduce the file size'}};
                return renderSdpMaster[reloadPage](req, res);
            } else {
                return redirectErrors.goneWrong(req, res);
            }
        } else {
            if(req.file === undefined) {
            // fileFilter rejects the files of incorrect type so undefined could be an incorrect file type
                if(isIncorrectType) {
                    res.locals.errors = {uploadFile: {msg: fileErrorMessage}};
                    return renders[reloadPage](req, res);
                } else {
                    // no file uploaded
                    res.locals.errors = {uploadFile: {msg: 'choose a file to upload'}};
                    return renders[reloadPage](req, res);
                }
            } else {
                next();
            }
        }
    });
};
