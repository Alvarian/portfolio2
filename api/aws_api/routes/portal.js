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

router.post('/portal/:id', createProject);

router.put('/portal/:id', updateProject);

router.delete('/portal/:id', deleteProject);


module.exports = router;