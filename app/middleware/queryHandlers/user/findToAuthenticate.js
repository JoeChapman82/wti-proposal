const find = require('../../../model/user/read');
const redirects = require('../../../controllers/redirects');
const renders = require('../../../controllers/renders');

module.exports = (req, res, next) => {
    find.toAuthenticate(req.body.username)
        .then(response => {
            if(response !== null) {
                res.locals.user = response;
                return next();
            } else {
                res.locals.errors = {
                    email: {msg: 'Provide a valid email'},
                    password: {msg: 'Provide a valid password'}
                };
                return renders.index(req, res);
            }
        })
        .catch((error) => {
            return redirects.goneWrong(req, res);
        });
};
