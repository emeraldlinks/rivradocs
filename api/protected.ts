

import type { App, Reply, Req  } from "rivra"

export default function(app: App){
    app.get("/", (req: Req, reply: Reply)=> {

        reply.code(200).send({message: "Hello from protected"})
    })
}