console.log("Hola desde el server");

const socket = io();

socket.on("connect", () => {
    console.log("Conectado al Server");
});

socket.emit("saludo", { message: "Hola servidor" });