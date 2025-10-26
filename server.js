import { StartServer } from "rivra/server";

let app

async function getServer() {
  try {
    if (!app) app = await StartServer();
  } catch (err) {
    
  }
  return app;
}

export default async function handler(req, res) {
  const server = await getServer();
  server(req, res);
}
