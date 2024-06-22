const socket = io();
const chatText = document.getElementById("message");
const chatLogs = document.getElementById("message-logs");

let user= null;

Swal.fire({
    title: "Identificate",
    text: "Te uniste al chat",
    input: "text",
    configButtonText: "Ingresar",
    alowOutsideClick: false,
    inputValidator: (value) => {
        return !value && "ingresa tu nombre de usuario";
    },
}).then((result) => {
    user = { name: result.value };
    socket.emit("authenticated", user ); // manda al servidor
});
// evento que se dispara al oprimir la tecla "Enter" (envia el mensaje al servidor)
chatText.onkeyup = (event) => {
    if (event.key === "Enter") {
        socket.emit("message", { user, message: chatText.value });
    }
};

socket.on("message-logs", (data) => {
    chatLogs.innerHTML = "";

    data.messages.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML =`${item.user.name} dice: <b>${item.message}</b>`;
        chatLogs.append(li);
    });
});

socket.on("new-user", (data) => {
    Swal.fire({
        toast: true,
        position: "top-end",
        timer: 3000,
        timeProgresBar: true,
        title: `${data.name} se ha unido al chat`,
        icon: "success",
    });
});


socket.on("disconnect", () => {
    console.log("Se desconecto el server");
});
