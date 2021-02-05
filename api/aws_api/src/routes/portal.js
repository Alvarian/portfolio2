const express = require("express");
const { ensureAuthenticated } = require("../config/auth");
const router = express.Router();
const { 
	createProject,
	readAllProjects,
	updateProject,
	deleteProject
} = require("../controllers/portal");


router.get("/portal", ensureAuthenticated, readAllProjects);

router.post("/portal", createProject);

router.post("/portal/update/:id", ensureAuthenticated, updateProject);

router.post("/portal/delete/:id", ensureAuthenticated, deleteProject);


module.exports = router;