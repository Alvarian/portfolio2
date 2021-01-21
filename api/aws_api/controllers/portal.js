const db = require('../config/db');
const { s3Create, s3Destroy } = require('../config/s3');
const { checkIfFileIsBufferable, getFileExt } = require('../local/file-repurposer');
const { mapIfSlidesExist } = require('../local/data-formater');


const createProject = async (req, res) => {
	// create new image in s3, after success provide link for each to db to store for fields that require it
	const { title, description, deployed_url, git_url, icon_url } = req.body;
	const { game_file, style_file, icon_file } = req.files;

	try {
		if (req.files.slide_file) {
			const slideBodyInputs = [	
				title, 
				description, 
				deployed_url, 
				null, 
				null,
				git_url,
				await checkIfFileIsBufferable(s3Create, icon_file || icon_url, `${title.replace(/\s/g, '')}/icon`)
			];

			db.query(`SELECT * FROM public.add_project($1, $2, $3, $4, $5, $6, $7)`, slideBodyInputs,
			async (err, result) => {
				if (err) throw err;

				const id = result.rows[0].add_project;

				for (let i = 0; i < req.files.slide_file.length; i++)	{
					const slide = req.files.slide_file[i];
					const desc = req.body.slide_desc[i];
					const slides = [
						id,
						await checkIfFileIsBufferable(s3Create, [slide], `${title.replace(/\s/g, '')}/${slide.originalname}`),
						desc
					];

					db.query(`SELECT * FROM public.add_slide($1, $2, $3)`, slides,
					(err, result) => {
						if (err) throw err;
					});
				}
			});

			return;
		}

		const gameBodyInputs = [	
			title, 
			description, 
			deployed_url, 
			await checkIfFileIsBufferable(s3Create, game_file, `${title.replace(/\s/g, '')}/${getFileExt(game_file)}`), 
			await checkIfFileIsBufferable(s3Create, style_file, `${title.replace(/\s/g, '')}/${getFileExt(style_file)}`),
			git_url,
			await checkIfFileIsBufferable(s3Create, icon_file || icon_url, `${title.replace(/\s/g, '')}/icon`)
		];

		db.query(`SELECT * FROM public.add_project($1, $2, $3, $4, $5, $6, $7)`, gameBodyInputs,
		(err, result) => {
			if (err) throw err;
		});
	} catch (err) {
		console.log('Failed to create project files in aws', err);
	} finally {
		res.redirect('/portal');
	}
};

const readAllProjects = (req, res) => {
	try {
		db.query(`SELECT * FROM public.find_all_projects()`, 
		async (err, result) => {
			if (err) throw err;

			const promise = await mapIfSlidesExist(result.rows.reverse(), db);

			const payload = { 
				title: 'Portal', 
				projects: await promise
			};
			
			res.render('portal', payload);
		});
	} catch (err) {
		console.log(err);
	} 
};

const updateProject = async (req, res) => {
	// if new logic, icon, or style, overwrite s3 and db fields
	const { title, description, deployed_url, git_url, icon_url, game_url, style_url } = req.body;
	const { game_file, style_file, icon_file } = req.files;

	// const getFileExt = (file) => {
	// 	if (!file) return null;

	// 	const {originalname} = file[0];

	// 	if (originalname.split('.')[1] === 'js') {	
	// 		return 'javascript';
	// 	}

	// 	if (originalname.split('.')[1] === 'css') {
	// 		return 'cascade';
	// 	}
	// };

	try {
		const bodyInputs = [	
			title, 
			description, 
			deployed_url, 
			await checkIfFileIsBufferable(s3Create, game_file || game_url, `${title.replace(/\s/g, '')}/${getFileExt(game_file)}`), 
			await checkIfFileIsBufferable(s3Create, style_file || style_url, `${title.replace(/\s/g, '')}/${getFileExt(style_file)}`),
			git_url,
			await checkIfFileIsBufferable(s3Create, icon_file || icon_url, `${title.replace(/\s/g, '')}/icon`)
		];	
		
		db.query(`SELECT * FROM public.update_project(${req.params.id}, $1, $2, $3, $4, $5, $6, $7)`, bodyInputs,
		(err, result) => {
			if (err) throw err
		});
	} catch (err) {
		console.log('promise err from update', err)
	} finally {
		res.redirect('/portal');
	}
};

const deleteProject = async (req, res) => {
	try {
		await s3Destroy(`${req.body.title.replace(/\s/g, '')}/`);
	} catch (err) {
		console.log('huh', err);
	} finally {
		db.query(`SELECT * FROM public.delete_project(${req.params.id})`, (err, result) => {
			if (err) throw err;
			
			db.query(`SELECT * FROM public.delete_slide(${req.params.id})`, (err, result) => {
				if (err) throw err;

				res.json({ msg: 'redirect plase' });
			});
		});
	}
};


module.exports = {
	createProject,
	readAllProjects, 
	updateProject,
	deleteProject
}