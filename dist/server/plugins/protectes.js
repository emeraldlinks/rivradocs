export default async function (app) {
    app.addHook('preHandler', async (req, reply) => {
        console.log("protected hook: ", req.originalUrl);
        if (req.originalUrl === "/api/uu") {
            reply.code(401).send({ error: 'Unauthorized' });
        }
    });
}
