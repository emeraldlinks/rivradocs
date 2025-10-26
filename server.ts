import { StartServer } from "rivra/server"

(async () => {
  const app = await StartServer();
  // app.register(...) // register plugins and add custom instance behaviours.
})();


