const getController = require('../controllers/getController');
const postController = require('../controllers/postController');


module.exports = (app) => {
    app.get('/logout', getController.logout);
    app.get('/admin/dashboard', getController.adminDashboard);
    app.get('/admin/new-case', getController.adminNewCase);
    app.post('/admin/new-case', postController.adminNewCase);
    app.get('/admin/bulk-upload', getController.adminBulkUpload);
    app.post('/admin/bulk-upload', postController.adminBulkUpload);
    app.get('/admin/existing-cases', getController.adminExistingCases);
    app.get('/admin/vetinary-records', getController.adminVetinaryRecords);
    app.get('/admin/husbandry-records', getController.adminHusbandryRecords);
    app.get('/admin/existing-case/:id', getController.adminExistingCase);
    app.post('/admin/existing-case/:id', postController.adminExistingCase);
    app.get('/admin/view-users', getController.adminViewUsers);
    app.get('/admin/search', getController.adminSearch);
    app.post('/admin/search', postController.adminSearch);
    app.get('/admin/settings', getController.adminSettings);


    // always last
    app.all('*', getController.notFound);
};
