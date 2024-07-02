import { Router } from "express";
import ProductManager from "../managers/ProductsManager.js";

const router = Router();
const products = new ProductManager();

router.get("/", (req, res) => { // endpoint
    const prod = products.getProducts();
    res.status(200).send({ prod });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const product =  products.find((product) => product.id === Number(id));

    if (!product){
            return res.status(404).redirect({"error": "No se encontro ningun producto con ese id"});
    }

router.post("/", (req, res) => {
    const { id, title, description, code, price, status, stock, category, thumbnails } = req.body;
    if (!id || !title || !description || !code || !price || !status || !stock || !category || !thumbnails){
        return res.status(400).send({"error": "Faltan datos"});
    }

    res.status(201).redirect("http://localhost:8080/public");
});

    res.status(200).send({ data: product });
    });

    router.put("/api/products/:id", (req, res) => {
        const { id } = req.params;
        const {title, description, code, price, status, stock, category, thumbnails} = req.body;
        const updatedProduct = { title, description, code, price, status, stock, category, thumbnails };
        const modifiedProduct = productManager.updateProduct(Number(id), updatedProduct);

        if (!modifiedProduct) {
            return res.status(404).send({ error: "No se encontró ningún producto con ese id" });
        }

            res.status(200).send({ data: modifiedProduct });

        });

    router.delete("/api/products/:id", (req, res) => {
        const { id } = req.params;
        const deletedProduct = productManager.deleteProduct(Number(id));

        if (!deletedProduct) {
            return res.status(404).send({ error: "No se encontró ningún producto con ese id" });
    }

    res.status(200).send({ data: "Producto eliminado" });

    });

export default router;