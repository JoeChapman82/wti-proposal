const findHome = require('../findHome');

module.exports = {
    admin: (req, res, next) => {
        if(res.locals.userToken.permissions === 'Admin') {
            next();
        } else {
            return findHome(req, res, next);
        }
    }
};
