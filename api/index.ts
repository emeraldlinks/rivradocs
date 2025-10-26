import type { App, Req, Reply } from "rivra"

export default async function registerApi(app: App) { 
  app.get("/", async (req: Req, reply: Reply) => {
    return { message: "Hello from Ripple full-stack!" }
  })
}
