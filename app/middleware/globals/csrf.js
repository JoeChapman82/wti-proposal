const csrf = require('csurf');
const config = require('../../config/main');

module.exports = (app) => {

    app.use(csrf({cookie: {maxAge: config.csrfLifespan, httpOnly: true, signed: true, secure: true}}));

    app.use((req, res, next) => {
        res.locals._csrf = req.csrfToken();
        next();
    });

    app.use((err, req, res, next) => {
        if (err.code !== 'EBADCSRFTOKEN') {
            return next(err);
        }
        console.log('Bad csrf token');
        res.clearCookie('_csrf');
        res.clearCookie(config.cookieName);
        res.redirect('/');
    });

    return app;
};
