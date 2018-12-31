const helmet = require('helmet');
const path = require('path');
const favicon = require('serve-favicon');
const requireDir = require('require-dir');
const bodyParser = require('body-parser');

const globals = requireDir('./globals');
const routes = require('../routes/routes');
const protectedRoutes = require('../routes/protectedRoutes');
const authorisationMain = require('./authorisation/authorisationMain');

module.exports = (app) => {
    app.use(helmet());
    app.use(globals.httpsRedirect);
    app.set('trust proxy', 1);
    globals.serveFavicon(app);
    globals.serveStatic(app);
    globals.cookieParser(app);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded( {extended : false} ));
    globals.csrf(app);
    globals.nunjucks(app);
    globals.defineActiveView(app)
    routes(app);
    app.use(authorisationMain);
    protectedRoutes(app);
    app.use(globals.errorHandler);
    return app;
};
