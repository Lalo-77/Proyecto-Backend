import express from "express";
import paths from "./utils/paths.js"
import configHandlebars from "./config/handlebars.config.js"
import chatRouter from "./routes/chat.router.js"
import productsRouter from "./routes/products.router.js";
import cartRouter from "./routes/cart.router.js";
import appSocketIO from "./config/socket.config.js";


// configuraciones
const PORT = 8080;
const HOST = "localhost";
const app = express();
const fs = require("fs");
const productsData = fs.readFileSync("products.json", "utf8");
const products = JSON.parse(productsData);

app.use(express.json());

// Configuracion del motor de plantillas
configHandlebars.config(app);

app.use(express.urlencoded({ extended: true}));
// Declaracion de ruta estatica: http://localhost:8080/api/public
app.use("/api/public", express.static(paths.public));

app.use("chat", chatRouter);
app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);

// Definicion de enrutadores
app.use("/chat", chatRouter);

// comenzando el servidor
// Metodos oyentes de solicitudes
const appHTTP = app.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});

// Configurando el servidor de Websocket
appSocketIO.config(appHTTP);

