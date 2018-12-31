module.exports = (app) => {
    app.use((req, res, next) => {
        let urlParts = req.originalUrl.split('/');
        res.locals.activeView = urlParts.pop().split('?')[0];
        next();
    });
    return app;
};
