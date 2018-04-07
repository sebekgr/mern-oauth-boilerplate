const express = require('express');
const mongoose = require('mongoose');
const app = express();
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require('path');

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 *60 * 1000, //30 days
        keys: [keys.cookie]
    })
);
app.use(passport.initialize());
app.use(passport.session());



require('./models/userModels');
require('./services/passport');//require passport instance
require('./routes/authRoutes')(app);


mongoose.connect(keys.mongoDB)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);