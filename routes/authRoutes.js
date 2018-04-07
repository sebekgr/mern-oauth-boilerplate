const passport = require('passport');

module.exports = app => {
    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        }));

    //change here your callback route
    /// /auth/google/redirect
    app.get('/auth/google/redirect',
        passport.authenticate('google'), (req, res) => {
            res.redirect('http://localhost:3000/') //in production change address for '/'
        });

    

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);  
    });

    app.get('/auth/logout', (req, res) => {
        req.logout();
        req.session = null;
        res.redirect('/');
    })
}

