import { Client } from "https://deno.land/x/postgres@v0.4.3/mod.ts";
import "https://deno.land/x/dotenv/load.ts";


const {
	PSQL_USER, PSQL_HOST, PSQL_DB, PSQL_PASS, PSQL_PORT 
} = Deno.env.toObject();

const client = new Client({
	user: PSQL_USER,
	hostname: PSQL_HOST,
	database: PSQL_DB,
	password: PSQL_PASS,
	port: Number(PSQL_PORT)
});


export { client };

