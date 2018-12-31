const renders = require('./renders');
const redirect = require('./redirects');
const isLoggedIn = require('../middleware/authorisation/isLoggedIn');
const queryRecord = require('../middleware/queryHandlers/record');
const queryUser = require('../middleware/queryHandlers/user');
const setLastUpdatedAt = require('../middleware/setLastUpdatedAt');
const endSession = require('../middleware/authorisation/endSession');


module.exports = {
    index: [isLoggedIn, renders.index],
    notFound: [renders.notFound],
    goneWrong: [renders.goneWrong],
    // secured GETS
    logout: [endSession, redirect.index],
    adminDashboard: [setLastUpdatedAt, queryUser.findAll, queryRecord.count, renders.adminDashboard],
    adminNewCase: [renders.adminNewCase],
    adminBulkUpload: [renders.adminBulkUpload],
    adminExistingCases: [queryRecord.findAll, renders.adminExistingCases],
    adminVetinaryRecords: [queryRecord.findAll, renders.adminVetinaryRecords],
    adminHusbandryRecords: [queryRecord.findAll, renders.adminHusbandryRecords],
    adminExistingCase: [queryRecord.findById, renders.adminExistingCase],
    adminViewUsers: [queryUser.findAll, renders.adminViewUsers],
    adminSearch: [renders.adminSearch],
    adminSettings: [renders.adminSettings]
};
