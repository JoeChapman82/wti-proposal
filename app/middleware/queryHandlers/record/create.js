const create = require('../../../model/record/create');
const redirects = require('../../../controllers/redirects');
const uuidV4 = require('uuid/v4');

module.exports = (req, res, next) => {
    let record = {
        caseNumber: uuidV4(),
        groupName: req.body.groupName,
        identityName: req.body.identityName,
        class: req.body.class,
        placeOfRescue: req.body.placeOfRescue,
        zoneName: req.body.zoneName,
        dateAdded: new Date()
    };
    create(record)
        .then((response) => {
            res.locals.recordCreated = true;
            return next();
        })
        .catch((error) => {
            console.log(error);
            return redirects.goneWrong(req, res);
        });
};
