const getController = require('../controllers/getController');
const postController = require('../controllers/postController');


module.exports = (app) => {
    app.get('/', getController.index);
    app.post('/', postController.index);
    app.get('/somethings-gone-wrong', getController.goneWrong);

};
