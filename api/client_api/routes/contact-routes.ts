import { Router } from "https://deno.land/x/oak@v6.0.1/mod.ts";
import { client, EMAIL_U } from '../config/smtp.ts';


const router = new Router();

router.post('/api/contact', async ({ request, response }: { request: any, response: any }) => {
	const body = await request.body();
	const { guestName, guestEmail, guestInqury } = await body.value;
	
	try {
		await client.send({
		  from: guestEmail, // Your Email address
		  to: EMAIL_U, // Email address of the destination
		  subject: `Message from ${guestName}!`,
		  content: `
		  	<h2>${guestName}'s email: ${guestEmail}</h2>
		  	${guestInqury}
		  `,
		});

		response.status = 200;
		response.body = {
			success: true,
			msg: 'Successful Email'
		};
	} catch (err) {
		response.status = 500;
		response.body = {
			success: false,
			msg: err
		}
	} 
});


export default router;