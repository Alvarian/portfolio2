const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();


// ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

// body
app.use(express.urlencoded({ extended: false }));

// session
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// passport
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

// flash
app.use(flash());

// global var
app.use((req, res, next) => {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');

	next();
});

// landing
app.use('/', require('./routes/master.js'));

// portal
app.use('/', require('./routes/portal.js'));


require('dotenv').config();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});