import { Project } from '../typings/types.ts';
import { client } from '../config/db.ts';


const readAllProjects = async ({ response }: { response: any }) => {
	try {
		await client.connect();
		const result = await client.query("SELECT * FROM public.find_all()");

		response.status = 200;
		response.body = {
			success: true,
			msg: result.rows
		};
	} catch (err) {
		console.log(err);
		response.status = 500;
		response.body = {
			success: false,
			msg: err
		}
	} finally {
		await client.end();
	}
};

const readOneProject = async ({ params, response }: { params: { id: string }, response: any }) => {
	try {
		await client.connect();
		const result = await client.query("SELECT * FROM public.find_by_id($1)", Number(params.id));

		if (!result.rows.length) {
			response.status = 404;
			response.body = {
				success: false,
				msg: `No project with the id of ${params.id}`
			};
		
			return;
		}

		response.status = 200;
		response.body = {
			success: true,
			msg: result.rows
		};
	} catch (err) {
		console.log(err);
		response.status = 500;
		response.body = {
			success: false,
			msg: err
		}
	} finally {
		await client.end();
	}
};


export { readAllProjects, readOneProject };