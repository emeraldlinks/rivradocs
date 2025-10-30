export default async function (req, reply, app) {
    console.log("protected route plugin triggered");
    if (req.url === "/api/users") {
        reply.send({ message: "Users root route" });
    }
    else if (req.url === "/api/users/profile") {
        reply.send({ message: "User profile route" });
    }
}
