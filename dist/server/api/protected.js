export default function (app) {
    app.get("/", (req, reply) => {
        reply.code(200).send({ message: "Hello from protected" });
    });
}
