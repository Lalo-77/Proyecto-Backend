import { Server } from "socket.io";

const config = (appHTTP) => {
    const serverIO = new Server(appHTTP);

    serverIO.on("connection", (socket) => {
        const id = socket.client.id;
        console.log("Conexion establecida", id);

        socket.on("saludo", (data) => {
              console.log(data.message);
        });
    });

};

export default { config };