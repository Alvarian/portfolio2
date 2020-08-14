const db = require('../config/db');


const createProject = (req, res) => {
	console.log(req.body)

	// create new image in s3, after success provide link for each to db to store for fields that require it



	// const {} = req.body;
	// db.query(`SELECT * FROM public.add_project()`, 
	// (err, result) => {
	// 	console.log(err ? err : result.rows);
	// 	res.send(result.rows);
	// });
	res.redirect('/portal');
};

const readAllProjects = (req, res) => {
	db.query(`SELECT * FROM public.find_all_projects()`, (err, result) => {
		if (err) throw err;

		res.render('portal', { 
			title: 'Portal', 
			projects: result.rows.reverse()
		});
	});
};

const readOneProject = (req, res) => {
	db.query(`SELECT * FROM public.find_project_by_id(${req.params.id})`, (err, result) => {
		console.log('read one', req.body);

		res.json(result.rows[0]);
	});
};

const updateProject = (req, res) => {
	console.log('update', req.body);
	
	// if new logic, icon, or style, overwrite s3 and db fields






	// const { title, description, type, git_url, icon_file } = req.body;
	// db.query(`SELECT * FROM public.update_project(${req.params.id})`, (err, result) => {
	// 	console.log(err ? err : result.rows);
	// 	res.send(result.rows);
	// });

	res.redirect('/portal');
};

const deleteProject = (req, res) => {
	db.query(`SELECT * FROM public.delete_project(${req.params.id})`, (err, result) => {if (err) throw err});

	res.redirect('/portal');
};


module.exports = {
	createProject,
	readAllProjects, readOneProject,
	updateProject,
	deleteProject
}