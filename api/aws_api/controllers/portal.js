const db = require('../config/db');
const upload = require('../config/s3');


const createProject = async (req, res) => {
	// create new image in s3, after success provide link for each to db to store for fields that require it

	db.query(`SELECT * FROM public.add_project($1, $2, $3, $4, $5, $6, $7)`,
	[	
		req.body.title, 
		req.body.description, 
		req.body.deployed_url, 
		await upload(req.files.game_file, `${req.body.title}/logic`), 
		await upload(req.files.style_file, `${req.body.title}/style`),
		req.body.git_url,
		await upload(req.files.icon_file, `${req.body.title}/icon`)
	],
	(err, result) => {
		if (err) throw err;

		res.redirect('/portal');
	});
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

const updateProject = async (req, res) => {
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