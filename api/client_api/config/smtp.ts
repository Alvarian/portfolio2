import { SmtpClient } from "https://deno.land/x/smtp/mod.ts";
import "https://deno.land/x/dotenv/load.ts";


const {
	EMAIL_U, EMAIL_P
} = Deno.env.toObject();

const client = new SmtpClient();

client.connectTLS({
  hostname: "smtp.gmail.com",
  port: 465,
  username: EMAIL_U,
  password: EMAIL_P,
});


export { client, EMAIL_U };