import handlebars from "express-handlebars";
import paths from "../utils/paths.js";

const config = (appHTTP) => {
// configuracion de handlebars
appHTTP.engine("handlebars", handlebars.engine());
appHTTP.set("views", paths.views);
appHTTP.set("view engine", "handlebars");// motor de vistas
};

export default { config };