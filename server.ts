import { StartServer } from "rivra/server"

let app: any;
async function getServer() {
  if (!app) {
    app = await StartServer();
    // app.register(...) // optionally register plugins here
  }
  return app;
}

export default async function handler(req: any, res: any) {
  const server = await getServer();
  server(req, res);
}