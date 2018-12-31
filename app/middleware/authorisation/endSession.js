const config = require ('../../config/main');

module.exports = (req, res, next) => {
    res.clearCookie(config.cookieName);
    next();
};
