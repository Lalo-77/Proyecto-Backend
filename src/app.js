import express from "express";
import paths from "./utils/paths.js";
//import productsRouter from "./routes/products.router.js";
//import products from "./routes/products.js";
//import cartsRouter from "./routes/carts.router.js";
import handlebars from "express-handlebars";
import appSocketIO from "./config/socket.config.js";
import homeRouter from "./routes/home.router.js"

// configuraciones
const PORT = 8080;
const HOST = "localhost";
const app = express();

app.use(express.urlencoded({ extended: true}));

app.use("/api/public", express.static(paths.public));

// configuracion de handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", paths.views);
app.set("view engine", "handlebars");
//app.use("/api", productsRouter);
//app.use("/api/products", products);
//app.use("/api/carts", cartsRouter);
app.use("/home", homeRouter);

// comenzando el servidor
const appHTTP = app.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});

// Configurando el servidor de Websocket
appSocketIO.config(appHTTP);

