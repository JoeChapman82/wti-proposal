const renders = require('./renders');
const redirect = require('./redirects');
const validate = require('../middleware/validation/validate');
const queryUser = require('../middleware/queryHandlers/user');
const queryRecord = require('../middleware/queryHandlers/record');
const passwordManager = require('../middleware/passwordManager');
const assignToken = require('../middleware/assignToken');
const findHome = require('../middleware/findHome');
const handleUpload = require('../middleware/handleUpload');
const bulkUpsert = require('../middleware/bulkUpsert');

module.exports = {
    index: [validate.login, queryUser.findToAuthenticate, passwordManager.comparePassword, assignToken.sessionToken, findHome],
    adminNewCase: [validate.newCase, queryRecord.create, renders.adminNewCase],
    adminBulkUpload: [handleUpload, bulkUpsert, renders.adminBulkUpload],
    adminExistingCase: [queryRecord.updateById, redirect.adminExistingCase],
    adminSearch: [queryRecord.findByQuery, renders.adminSearch]
};
