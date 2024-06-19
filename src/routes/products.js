import { Router } from "express";

const router = Router();
const products = ("../files/products.json")

router.get("/", (req, res) => {
    res.send(products);
});

router.post("/products", (req, res) => {
    const {id, title, description, code, price, status, stock, category, thumbnails} = req.body;

    if (!id || !title || !description || !code || !price || !status || !stock || !category || !thumbnails){
            return res.status(400).send({"error": "Faltan datos"});
    }
    const productsNuevo = {id:Number(id), title, description, code, price, status, stock, category, thumbnails};
    products.push(productsNuevo);

    res.status(201).redirect("http://localhost:8080/api/product");
});

export default router;