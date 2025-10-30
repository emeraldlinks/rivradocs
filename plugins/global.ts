import type { App, Req, Reply } from "rivra"

export default async function (req: Req, reply: Reply, app: App) {
  console.log("global plugin triggered: route: ", req.originalUrl)
  if (req.url === "/api/users") {
    reply.send({ message: "Users root route" });
  } else if (req.url === "/api/users/profile") {
    reply.send({ message: "User profile route" });
  }

} 

// plugins/some_plugin.ts -> global plugin (all routes)
// plugins/auth.pg.ts -> plugin -> api/auth
// plugins/auth.md.ts -> middleware -> api/auth
// plugins/users/index.ts -> plugin -> api/users
// plugins/users/users.md.ts -> middleware -> api/users
// You can also access "app" for shared logic
