import { Router } from "express";
import products from "../files/products.json";

const router = Router();
const carts = [];

router.get("/", (req, res) => { // endpoint
    //const productsJSON = JSON.stringify(products);
    res.status(200).send({ carts });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const product =  products.find((product) => product.id === Number(id));

    if (!product){
            return res.status(404).redirect({"error": "No se encontro ningun producto con ese id"});
    }
});

  router.post("/", (req, res) => {// agregar
    const{ id, id_product, title, description, code, price, status, sctock, category, thumbnails, amount } = req.body;
    const item ={ id, id_product, title, description, code, price, status, sctock, category, thumbnails, amount };
    const cart = carts.find((cart) => cart.id === Number(item.id)) ?? [];
    cart.push({ item });

    res.send({ status:true, cart });
});

export default router;