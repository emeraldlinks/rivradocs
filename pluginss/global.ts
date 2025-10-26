import type { App, Req, Reply } from "rivra"

export default async function (app: App) {
  app.addHook('preHandler', async (req: Req, reply: Reply) => {
    console.log(req.originalUrl)
    if (req.originalUrl === "/protected") {
      reply.code(401).send({ error: 'Unauthorized' });
    }
  });
}

// plugins/some_plugin.ts -> global plugin (all routes)
// plugins/auth.pg.ts -> plugin -> api/auth
// plugins/auth.md.ts -> middleware -> api/auth
// plugins/users/index.ts -> plugin -> api/users
// plugins/users/users.md.ts -> middleware -> api/users
