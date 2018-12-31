const update = require('../../../model/record/update');
const deleteRecord = require('../../../model/record/delete');
const redirects = require('../../../controllers/redirects');


module.exports = (req, res, next) => {
    let id = req.params.id || req.body._id;
    if(req.body.submit === 'Update Case') {
        console.log(req.body);
        const toUpdate = {};
        Object.entries(req.body).forEach(([key, value]) => {
            if(key !== '_csrf' && key !== 'dateAdded' && key !== '_id' && key !== 'submit' && typeof value === 'string' && value.length > 0) {
                toUpdate[key] = value;
            }
        });
        update.byId(id, {$set: toUpdate}, (err, result) => {
            if(err) {
                console.log(error);
                return redirects.goneWrong(req, res);
            }
            return next();
        });
    } else {
        deleteRecord.byId(id)
            .then((response) => {
                console.log(response);
                return redirects.adminDashboard(req, res);
            })
            .catch((error) => {
                console.log(error);
                return redirects.goneWrong(req, res);
            });
    }


};
