import { SmtpClient } from "https://deno.land/x/smtp/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";


const {
	EMAIL_U, EMAIL_P
} = config();

const client = new SmtpClient();

client.connectTLS({
  hostname: "smtp.gmail.com",
  port: 465,
  username: EMAIL_U,
  password: EMAIL_P,
});


export { client, EMAIL_U };