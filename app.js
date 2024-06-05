
const http = require("http");

const PORT = 8080;
const HOST = "localhost";

const app = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/plain; charset=utf8");
     res.end("hola");
});
app.listen(PORT, () => {
    console.log(`Ejecutandose en el ${HOST}: ${PORT}`);
});

app.get("/products", (req, res) => { // endpoint
    const {title, description, price, thumbnail, code, stock} = req.query

    const products = products.find((item) => item.title === title);
    if (!title){
        return res.send({"error": "No se encontro ningun producto con ese nombre"});
    }
    const productsJSON = JSON.stringify(products);
    res.send(productsJSON);
});

app.get("/:pId", (req, res) => {
    const {pId} = req.params;
    const product = products.find((item) => item.id === Number(pId));
    res.send(product);
});

