const find = require('../../../model/record/read');
const redirects = require('../../../controllers/redirects');
const renders = require('../../../controllers/renders');

module.exports = (req, res, next) => {
    let toQuery = {};
    res.locals.lastUpdatedAt = new Date();
    Object.entries(req.body).forEach(([key, value]) => {
        if(key !== '_csrf' && key !== 'dateAdded' && key !== '_id' && key !== 'submit' && typeof value === 'string' && value.length > 0) {
            toQuery[key] = value;
        }
    });
    find.byQuery(toQuery)
        .then(response => {
            if(response.length > 0) {
                res.locals.records = response;
                return renders.adminSearch(req, res);
            } else {
                res.locals.noRecordsFound = true;
                return renders.adminSearch(req, res);
            }
        })
        .catch(error => {
            console.log(error);
            return redirects.goneWrong(req, res);
        });
};
