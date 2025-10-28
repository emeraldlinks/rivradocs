import { App } from "rivra";
import { StartServer } from "rivra/server";

let app: App;

(async () => {
  app = await StartServer();
  // You can register plugins or routes here if needed
  // await app.register(...)
})();

export default async function handler(req: any, res: any) {
  await app.ready();
  app.server.emit("request", req, res);
}
