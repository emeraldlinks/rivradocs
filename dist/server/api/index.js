export default async function registerApi(app) {
    app.get("/", async (req, reply) => {
        return { message: "Hello from Ripple full-stack!" };
    });
}
