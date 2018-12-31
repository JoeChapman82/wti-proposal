const renders = require('../../controllers/renders');
const newCaseFields = {
    groupName: {
        name: 'Group name',
        msg: 'Provide a group name'
    },
    identityName: {
        name: 'Identity name',
        msg: 'Provide an Identity name'
    },
    class: {
        name: 'Class',
        msg: 'Provide a class'
    },
    placeOfRescue: {
        name: 'Place of Rescue',
        msg: 'Provide a place of rescue'
    },
    zoneName: {
        name: 'Zone name',
        msg: 'Provide a zone name'
    }
};


module.exports = {
    login: (req, res, next) => {
        return next();
    },
    newCase: (req, res, next) => {
        Object.entries(newCaseFields).forEach(([key, value]) => {
            if(typeof req.body[key] !== 'string' || req.body[key].length < 1) {
                res.locals.errors = res.locals.errors || {};
                res.locals.errors[key] = {msg: value.msg};
            }
        });
        if(typeof res.locals.errors !== 'undefined') {
            return renders.adminNewCase(req, res);
        }
        return next();
    }
};
