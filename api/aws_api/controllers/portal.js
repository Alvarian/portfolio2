const db = require('../config/db');


const createProject = (req, res) => {
	console.log(req.body)
	// const {} = req.body;

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
			projects: result.rows.reverse()
		});
	});
};

const readOneProject = (req, res) => {
	db.query(`SELECT * FROM public.find_by_id(${req.params.id})`, (err, result) => {
		console.log('read one', req.body);

		res.json(result.rows[0]);
	});
};

const updateProject = (req, res) => {
	const { title, description, type, git_url, icon_file } = req.body;
	console.log('update', req.body);
	// db.query(`SELECT * FROM public.update_project(${req.params.id})`, (err, result) => {
	// 	console.log(err ? err : result.rows);

	// 	res.send(result.rows);
	// });

	res.redirect('/portal');
};

const deleteProject = (req, res) => {
	console.log('delete', req.params.id);
	// db.query(`SELECT * FROM public.delete_project(${req.params.id})`, (err, result) => {
	// 	console.log(err ? err : result.rows);

	// 	res.send(result.rows);
	// });

	res.redirect('/portal');
};


module.exports = {
	createProject,
	readAllProjects, readOneProject,
	updateProject,
	deleteProject
}