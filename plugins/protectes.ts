import type { App, Req, Reply } from "rivra"


export default async function (app: App) {
  app.addHook('preHandler', async (req: Req, reply: Reply) => {
    console.log("protected hook: ", req.originalUrl)
    if (req.originalUrl === "/api/uu") {
      reply.code(401).send({ error: 'Unauthorized' });
    }
  });  
} 