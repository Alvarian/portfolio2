const express = require('express');
const { ensureAuthenticated } = require('../config/auth');
const router = express.Router();
const { 
	createProject,
	readAllProjects, readOneProject,
	updateProject,
	deleteProject
} = require('../controllers/portal');


router.get('/portal', ensureAuthenticated, readAllProjects);

router.get('/portal/:id', readOneProject);

router.post('/portal', createProject);

router.post('/portal/update/:id', ensureAuthenticated, updateProject);

router.post('/portal/delete/:id', ensureAuthenticated, deleteProject);


module.exports = router;