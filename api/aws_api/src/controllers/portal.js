const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { s3Create, s3Destroy } = require("../config/s3");
const { checkIfFileIsBufferable, getFileExt } = require("../formaters/file-repurposer");
const { mapIfSlidesExist } = require("../formaters/data-formater");


const createProject = async (req, res) => {
	// create new image in s3, after success provide link for each to db to store for fields that require it
	const { title, description, deployed_url, git_url, icon_url } = req.body;
	const { game_file, style_file, icon_file } = req.files;

	try {
		if (req.files.slide_file) {
			const slideBodyInputs = {	
				title, 
				description, 
				deployed_url, 
				game_file: "", 
				style_file: "",
				git_url,
				icon_file: await checkIfFileIsBufferable(s3Create, icon_file || icon_url, `${title.replace(/\s/g, "")}/icon`)
			};

			const result = await prisma.projects.create({
				data: slideBodyInputs,
			});

			for (let i = 0; i < req.files.slide_file.length; i++)	{
				const slide = req.files.slide_file[i];
				const desc = req.body.slide_desc[i];
				const slides = {
					project_id: result.id,
					image_url: await checkIfFileIsBufferable(s3Create, [slide], `${title.replace(/\s/g, "")}/slide_image_${i}`),
					description: desc
				};

				await prisma.services.create({
					data: slides,
				});
			}
		} else {
			const gameBodyInputs = {	
				title, 
				description, 
				deployed_url, 
				game_file: await checkIfFileIsBufferable(s3Create, game_file, `${title.replace(/\s/g, "")}/${getFileExt(game_file)}`), 
				style_file: await checkIfFileIsBufferable(s3Create, style_file, `${title.replace(/\s/g, "")}/${getFileExt(style_file)}`),
				git_url,
				icon_file: await checkIfFileIsBufferable(s3Create, icon_file || icon_url, `${title.replace(/\s/g, "")}/icon`)
			};

			await prisma.projects.create({
				data: gameBodyInputs,
			});
		}
	} catch (err) {
		console.log("Failed to create project files in aws", err);
	} finally {
		await prisma.$disconnect();

		res.redirect("/portal");
	}
};

const readAllProjects = async (req, res) => {
	try {
		const result = await prisma.projects.findMany();
		const promise = await mapIfSlidesExist(result, prisma);

		const payload = { 
			title: "Portal", 
			projects: await promise
		};
		
		res.render("portal", payload);
	} catch (err) {
		console.log(err);
	} finally {
		await prisma.$disconnect();
	}
};

const updateProject = async (req, res) => {
	// if new logic, icon, or style, overwrite s3 and db fields
	const { title, description, deployed_url, git_url, icon_url, game_url, style_url } = req.body;
	const { game_file, style_file, icon_file } = req.files;

	try {
		const bodyInputs = {	
			title, 
			description, 
			deployed_url, 
			game_file: await checkIfFileIsBufferable(s3Create, game_file || game_url, `${title.replace(/\s/g, "")}/${getFileExt(game_file)}`), 
			style_file: await checkIfFileIsBufferable(s3Create, style_file || style_url, `${title.replace(/\s/g, "")}/${getFileExt(style_file)}`),
			git_url,
			icon_file: await checkIfFileIsBufferable(s3Create, icon_file || icon_url, `${title.replace(/\s/g, "")}/icon`)
		};

		await prisma.user.update({
			where: {
				id: id
			},
			data: bodyInputs
		});
	} catch (err) {
		console.log("promise err from update", err)
	} finally {
		await prisma.$disconnect();

		res.redirect("/portal");
	}
};

const updateSlide = (req, res) => {
console.log(req.body, req.files);

};

const deleteProject = async (req, res) => {
	try {
		if (req.body.game_file || req.body.icon_file || req.body.slides) {
			await s3Destroy(`${req.body.title.replace(/\s/g, "")}/`);
		}
		await prisma.projects.delete({ where: {id: parseInt(req.params.id)} });
		await prisma.services.deleteMany({ where: {id: parseInt(req.params.id)} });
	} catch (err) {
		console.log("huh", err);
	} finally {
		await prisma.$disconnect();

		res.json({ msg: "redirect plase" });
	}
};

const deleteSlide = (req, res) => {

};


module.exports = {
	createProject,
	readAllProjects, 
	updateProject,
	updateSlide,
	deleteProject,
	deleteSlide
};