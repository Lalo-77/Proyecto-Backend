import { Server } from "socket.io";

const messages = [];
const config = (appHTTP) => {
    const serverIO = new Server (appHTTP);

    serverIO.on("connection", (socket) => {// declarar la coneccion, el socket es el cliente
        //const id = socket.client.id;
        console.log("Conexion establecida");

        socket.on("message", (data) => {
            const { user, message } = data;
            messages.push({ user, message });

            serverIO.emit("message-logs", { messages });
        });

        socket.on("authenticated", (data) => {
           socket.broadcast.emit("new-user", data);
        });
    });
};

export default { config };