module.exports = (app) => {
    app.get('/', (req, res, next) => res.render('index'));
    app.post('/', (req, res, next) => res.redirect('/home'));
    app.get('/home', (req, res, next) => res.render('home'));
    app.get('/my-jobs', (req, res) => res.render('my-jobs'));
    app.get('/new-ideas', (req, res) => res.render('new-ideas'));
    app.get('/training-and-provision', (req, res) => res.render('training'));

    return app;
}