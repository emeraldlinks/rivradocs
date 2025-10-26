import type { App, Req, Reply } from "rivra"

export default async function (app: App) {
  app.addHook('preHandler', async (req: Req, reply: Reply) => {
    console.log('Middleware triggered:', req.url);
  });
}

// plugins/middleware/some_middleware.ts -> global middleware (all routes)
// plugins/auth.pg.ts -> plugin -> api/auth
// plugins/auth.md.ts -> middleware -> api/auth
// plugins/users/index.ts -> plugin -> api/users
// plugins/users/users.md.ts -> middleware -> api/users
