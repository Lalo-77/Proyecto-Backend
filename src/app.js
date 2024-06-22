import express from "express";
//import productsRouter from "./routes/products.router.js";
//import products from "./routes/products.js";
//import cartsRouter from "./routes/carts.router.js";
import configHandlebars from "./config/handlebars.config.js"
import appSocketIO from "./config/socket.config.js";
import chatRouter from "./routes/chat.router.js"
import paths from "./utils/paths.js"

// configuraciones
const PORT = 8080;
const HOST = "localhost";
const app = express();

// Configuracion del motor de plantillas
configHandlebars.config(app);

app.use(express.urlencoded({ extended: true}));
// Declaracion de ruta estatica: http://localhost:8080/api/public
app.use("/api/public", express.static(paths.public));

//app.use("/api", productsRouter);
//app.use("/api/products", products);
//app.use("/api/carts", cartsRouter);

// Definicion de enrutadores
app.use("/chat", chatRouter);

// comenzando el servidor
// Metodos oyentes de solicitudes
const appHTTP = app.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});

// Configurando el servidor de Websocket
appSocketIO.config(appHTTP);

