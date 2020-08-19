import { Router } from "https://deno.land/x/oak@v6.0.1/mod.ts";
import { client } from '../config/smtp.ts';


const router = new Router();

router.post('/api/contact', async ({ request, response }: { request: any, response: any }) => {
	const body = await request.body();
	const req = await body.value;
	console.log(req)
	// try {
	// 	await client.send({
	// 	  from: guestEmail, // Your Email address
	// 	  to: EMAIL_U, // Email address of the destination
	// 	  subject: "Message from portfolio!",
	// 	  content: guestMsg,
	// 	});

		response.status = 200;
		response.body = {
			success: true,
			msg: req
		};
	// } catch (err) {
	// 	console.log(err);
	// 	response.status = 500;
	// 	response.body = {
	// 		success: false,
	// 		msg: err
	// 	}
	// } finally {
	// 	await client.close();
	// }
});


export default router;