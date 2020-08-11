import { Router } from "https://deno.land/x/oak@v6.0.1/mod.ts";
import { readAllProjects, readOneProject } from '../controllers/project-controller.ts';


const router = new Router();

router.get('/api/projects', readAllProjects)
	.get('/api/projects/:id', readOneProject);


export default router;
