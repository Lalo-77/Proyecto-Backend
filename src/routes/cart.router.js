import { Router } from "express";
import CartManager from "../managers/CartManager.js";
//import products from "../files/products.json";

const router = Router();
const cartManager= new CartManager();
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
    const product ={ id, id_product, title, description, code, price, status, sctock, category, thumbnails, amount };
    let cart = carts.find((cart) => cart.id === Number(item.id));

    if (cart) {
       cart.products.push(product);
    } else {
       cart = { id, product: [product] };
    }

    res.send({ status:true, cart });
});

export default router;