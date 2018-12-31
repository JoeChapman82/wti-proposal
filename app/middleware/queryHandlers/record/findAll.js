const find = require('../../../model/record/read');
const redirects = require('../../../controllers/redirects');

module.exports = (req, res, next) => {
    res.locals.lastUpdatedAt = new Date();
    find.all()
        .then(response => {
            res.locals.records = response;
            next();
        })
        .catch(error => {
            console.log(error);
            return redirects.goneWrong(req, res);
        });
};
