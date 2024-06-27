import { Router } from "express";

const router = Router();
const products = [
    { "id": "1", title: "La fortaleza", description: "calorias:150,carbohidratos:60,fibras:30,grasasSaturadas:0,", code: 1, price: 2000, status: true, stock: 10, category: "breack", thumbnails: "./assets/img/brooke.jpg"
},
   {   id: 2, title: "Especial", description: " calorias:150,carbohidratos:30,fibras:40,grasasSaturadas:0", code: 2, price: 2300, status: true, stock: 20, category: "entrada", thumbnails: "./assets/img/Especial.jpg"
},
   {   id: 3, title: "Rubi", code: 3, price: 2500, status: true, stock: 15, category: "plato principal", thumbnails: "./assets/img/Rubi.jpg"
},
];

router.get("/", (req, res) => { // endpoint
    res.status(200).send({ products });
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