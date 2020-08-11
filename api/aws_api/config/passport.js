const localStrategy = require('passport-local').Strategy;
const db = require('./db');
const bcrypt = require('bcryptjs');

module.exports = function(passport) {
	passport.use(
		new localStrategy({ 
			usernameField: 'username',
			passwordField: 'password'
		}, 
		(username, password, done) => {
			db.query(`SELECT * FROM find_master_by_user('${username}')`, 
				(err, result) => {
					const m = result.rows[0];

					if (!m) {
						return done (null, false, { message: 'You are not the master' });
					}

					bcrypt.compare(password, m.password, (err, isMatch) => {

						if (isMatch) {
							return done(null, m.username);
						} else {
							done(null, false, { message: 'Password Incorrect' });
						}
					})
				}
			)
		})
	);

	passport.serializeUser(function(user, done) {
		done(null, user);
	});

	passport.deserializeUser(function(id, done) {
		console.log(id);
		db.query(`SELECT * FROM find_master_by_user('${id}')`,
			(err, result) => {
				const m = result.rows[0];

				done(err, m.username);
			}
		)
	});
};