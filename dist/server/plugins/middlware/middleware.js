export default async function (app) {
    app.addHook('preHandler', async (req, reply) => {
        console.log('Middleware triggered:', req.url);
    });
}
// plugins/middlware/some_middleware.ts -> global middleware (all routes)
// plugins/auth.pg.ts -> plugin -> api/auth
// plugins/auth.md.ts -> middleware -> api/auth
// plugins/users/index.ts -> plugin -> api/users
// plugins/users/users.md.ts -> middleware -> api/users
