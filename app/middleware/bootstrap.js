const requireDir = require('require-dir');
const globals = requireDir('./globals');
const routes = require('../routes/routes');

module.exports = (app) => {
    globals.helmet(app);
    // app.use(globals.httpsRedirect);
    globals.static(app);
    globals.trustProxy(app);
    globals.serveFavicon(app);
    globals.nunjucks(app);
    globals.cookieParser(app);
    globals.bodyParser(app);
    globals.csrf(app);
    app.use(globals.defineActiveView);
    globals.setCurrentYear(app);
    globals.addVersionEndpoint(app);
    globals.handleDuplicateInputs(app);
    routes(app);
    app.use(globals.errorHandler);
    return app;
};
