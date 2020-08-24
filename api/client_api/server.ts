import { Application } from "https://deno.land/x/oak@v6.0.1/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.0/mod.ts";
import projectRouter from './routes/project-routes.ts';
import contactRouter from './routes/contact-routes.ts';


const app = new Application();

app.use(oakCors());

app.use(projectRouter.routes());
app.use(projectRouter.allowedMethods());

app.use(contactRouter.routes());
app.use(contactRouter.allowedMethods());

const port = Deno.env.get("PORT") || 5000;
console.log(`Server listening on port ${port}`);
await app.listen({ port: +port });