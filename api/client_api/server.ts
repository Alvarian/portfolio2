import { Application } from "https://deno.land/x/oak@v6.0.1/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";


const app = new Application();

app.use(
  oakCors({
    origin: /^.+localhost:(3000)$/,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  }),
);

import projectRouter from './routes/project-routes.ts';
app.use(projectRouter.routes());
app.use(projectRouter.allowedMethods());

import contactRouter from './routes/contact-routes.ts';
app.use(contactRouter.routes());
app.use(contactRouter.allowedMethods());

const port = Deno.env.get("PORT") || 5000;
console.log(`Server listening on port ${port}`);
await app.listen({ port: +port });