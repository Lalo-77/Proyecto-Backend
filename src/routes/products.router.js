import { Router } from "express";
import ProductManager from "../managers/ProductsManager";

const router = Router();
/*
router.get("/", (req, res) => {
    res.send({ title: "Hola" });
});*/


const productManager = new ProductManager();

router.get("/", (req, res) => { // endpoint
    const products = productManager.getAllProducts();
    res.status(200).send({ data: products});
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await productManager.getProductById(Number(id));

  if (!product) {
    return res.status(404).send({ error: "No se encontro ningun producto con ese id" });
  }
  res.status(200).send({ data: product });
});

router.post("/api/products", (req, res) => {
    const {title, description, code, price, status, stock, category, thumbnails} = req.body;
    const newProduct = { title, description, code, price, status, stock, category, thumbnails };
    const createdProduct = productManager.createProduct(newProduct);

    res.status(201).redirect("http://localhost:8080/public");
});

router.get("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const product =  productManager.getProductById(Number(id));

    if (!product){
            return res.status(404).redirect({"error": "No se encontro ningun producto con ese id"});
    }

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