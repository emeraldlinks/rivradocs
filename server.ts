import { App } from "rivra";
import { StartServer } from "rivra/server"
let app: App
(async () => {
  const app = await StartServer();
  // app.register(...) // register plugins and add custom instance behaviours.
})();



export default async function handler(req: any, res: any) {
  await app.ready()
  app.server.emit('request', req, res)
}