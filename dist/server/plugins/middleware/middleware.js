export default function (req, res) {
    console.log("Incoming:", req.method, req.url);
    const truthy = true;
    if (!truthy) {
        res.code(400).send({ error: "Bad request" });
        return;
    }
    if (req.url === "/api/blocked") {
        res.code(403).send({ error: "Forbidden" });
        return;
    }
}
// plugins/middleware/some_middleware.ts -> global middleware (all routes)
// plugins/auth.pg.ts -> plugin -> api/auth
// plugins/auth.md.ts -> middleware -> api/auth
// plugins/users/index.ts -> plugin -> api/users
// plugins/users/users.md.ts -> middleware -> api/users
