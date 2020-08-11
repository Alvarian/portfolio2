const db = require('../config/db');


const createProject = (req, res) => {
	const {} = req.body;

	// db.query(`SELECT * FROM public.add_project()`, 
	// (err, result) => {
	// 	console.log(err ? err : result.rows);

	// 	res.send(result.rows);
	// });
};

const readAllProjects = (req, res) => {
	db.query(`SELECT * FROM public.find_all()`, (err, result) => {
		if (err) throw err;

		res.render('portal', { 
			title: 'Portal', 
			projects: result.rows 
		});
	});
};

const readOneProject = (req, res) => {
	db.query(`SELECT * FROM public.find_by_id(${req.params.id})`, (err, result) => {
		console.log(err ? err : result.rows);

		res.json(result.rows[0]);
	});
};

const updateProject = (req, res) => {
	const {} = req.body;
	console.log(req.body);
	// db.query(`SELECT * FROM public.update_project(${req.params.id})`, (err, result) => {
	// 	console.log(err ? err : result.rows);

	// 	res.send(result.rows);
	// });
};

const deleteProject = (req, res) => {
	console.log(req.params.id);
	// db.query(`SELECT * FROM public.delete_project(${req.params.id})`, (err, result) => {
	// 	console.log(err ? err : result.rows);

	// 	res.send(result.rows);
	// });
};


module.exports = {
	createProject,
	readAllProjects, readOneProject,
	updateProject,
	deleteProject
}