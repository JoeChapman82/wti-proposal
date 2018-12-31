module.exports = (req, res, next) => {
    res.locals.lastUpdatedAt = new Date();
    return next();
};
