const db = require('../config/db');

const readAllUsers = () => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM public.find_all_master()`, (err, result) => {
			if (err) reject(err);

			resolve(result.rows);
		});	
	});
};

const readOneUser = (name) => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM public.find_by_name('${name}')`, (err, result) => {
			if (err) reject(err);

			resolve(result.rows[0]);
		});
	});
};

const createUser = (u, p) => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM public.create_master('${u}', '${p}')`, (err, result) => {
			if (err) reject(err);

			resolve(true);
		});
	});
};

module.exports = { readAllUsers, readOneUser, createUser };