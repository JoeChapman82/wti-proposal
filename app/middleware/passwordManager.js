const bcrypt = require('bcrypt-nodejs');
const redirects = require('../controllers/redirects');
const renders = require('../controllers/renders');

module.exports = {
    hashPassword: (req, res, next) => {
        bcrypt.hash(req.body.password, (error, hash) => {
            if(error) {
                console.log(error);
                return redirects.goneWrong(req, res);
            }
            res.locals.hash = hash;
            return next();
        });
    },
    comparePassword: (req, res, next) => {
        bcrypt.compare(req.body.password, res.locals.user.password, (error, response) => {
            if(response) {
                return next();
            } else {
                res.locals.errors = {
                    email: {msg: 'Provide a valid email'},
                    password: {msg: 'Provide a valid password'}
                };
                return renders.login(req, res);
            }
        });
    }
};
