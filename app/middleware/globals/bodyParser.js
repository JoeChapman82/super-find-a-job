const express = require('express');
const parseJSON = express.json();
const parseUrlEncoded = express.urlencoded( {extended : false} );

module.exports = (app) => {
    app.use((req, res, next) => parseJSON(req, res, next));
    app.use((req, res, next) => parseUrlEncoded(req, res, next));
    return app;
};
