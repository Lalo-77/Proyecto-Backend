import express from "express";
import products from "./products.js";

const PORT = 8080;
const HOST = "localhost";
const app = express();

app.use(express.urlencoded({ extended: true}));

// muestra los productos
app.get("/api/products", (req, res) => { // endpoint
    const productsJSON = JSON.stringify(products);
    res.status(200).send({ data: products });
});

app.get("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find((item) => item.id === Number(id));
    if (!product){
            return res.status(400).send({"error": "No se encontro ningun producto con ese id"});
    }

    res.status(200).send({ data: product });
});

app.post("/api/products", (req, res) => {
    const {id, title, description, code, price, status, stock, category, thumbnails} = req.body;

    if (!id || !title || !description || !code || !price || !status || !stock || !category || !thumbnails){
            return res.status(400).send({"error": "Faltan datos"});
    }
    const productsNuevo = {id:Number(id), title, description, code, price, status, stock, category, thumbnails};
    products.push(productsNuevo);

    res.status(201).send({ data: productsNuevo });
});

app.put("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const {title, description, code, price, status, stock, category, thumbnails} = req.body;
    const indice = products.findIndex((item) => item.id === Numbre(id));

    if (indice < 0) {
        return res.status(400).send({"error": "No se encontro ningun usuario con ese id"});

    }
    if (!id || !title || !description || !code || !price || !status || !stock || !category || thumbnails){
            return res.status(400).send({"error": "Faltan datos"});
    }
    const productModificado = {id:Number(id), title, description, code, price, status, stock, category, thumbnails};

    products[indice] = productModificado;

    res.status(200).send({ data: productsNuevo });
});

app.delete("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const indice = products.findIndex((item) => item.id === Number(id));

    if (indice < 0) {
        return res.status(400).send({"error": "No se encontro ningun producto con ese id"});
    }

    products.splice(indice, 1);

    res.status(200).send({data:"Usuario eliminado"});

});

app.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});

