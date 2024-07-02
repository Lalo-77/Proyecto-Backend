import express from "express";
import paths from "./utils/paths.js"
import handlebars from "./config/handlebars.config.js"
import chatRouter from "./routes/chat.router.js"
import productsRouter from "./routes/products.router.js";
import cartRouter from "./routes/cart.router.js";
import appSocketIO from "./config/socket.config.js";
import fs from "fs";

// configuraciones
const PORT = 8080;
const HOST = "localhost";
const app = express();
const productjson = fs.readFileSync("./src/files/products.json", {encoding: "utf8"});
const productos = JSON.parse(productjson);

app.use(express.json());

// Configuracion del motor de plantillas
handlebars.config(app);

app.use(express.urlencoded({ extended: true}));
// Declaracion de ruta estatica: http://localhost:8080/api/public
app.use("/api/public", express.static(paths.public));

app.use("chat", chatRouter);
app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);

// Definicion de enrutadores
app.use("/chat", chatRouter);
//control de rutas inexistentes
app.use("*", (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>La URL indicada no existe en el servidor</h3>");
});
// Metodos oyentes de solicitudes
const appHTTP = app.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});

// Configurando el servidor de Websocket
appSocketIO.config(appHTTP);

