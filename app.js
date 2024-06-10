import express from "express";
import products from "./products.js";

const PORT = 8080;
const HOST = "localhost";
const app = express();

// muestra los productos
app.get("/", (req, res) => { // endpoint
    const productsJSON = JSON.stringify(products);
    res.send(productsJSON);
});

app.get("/:productId", (req, res) => {
    const {productId} = req.params;
    const product = products.find((item) => item.id === Number(productId));
    res.setHeader("Content-Type", "Application/json");
    if (!product){
        return res.send({"error": "No se encontro ningun producto con ese nro de id"});
    };
    res.send(product);
});

app.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});

