export default async function (app) {
    app.addHook('preHandler', async (req, reply) => {
        console.log("Requested: ", req.originalUrl);
        if (req.originalUrl === "/api/protected") {
            reply.code(401).send({ error: 'Unauthorized' });
        } 
    });
}
// plugins/some_plugin.ts -> global plugin (all routes)
// plugins/auth.pg.ts -> plugin -> api/auth
// plugins/auth.md.ts -> middleware -> api/auth
// plugins/users/index.ts -> plugin -> api/users
// plugins/users/users.md.ts -> middleware -> api/users
