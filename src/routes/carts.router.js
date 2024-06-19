import { Router } from "express";

const router = Router();
/*
const cartManagerInstance = new CartManager("./files/products.json");

router.get("/api/products", (req, res) => { // endpoint
    const productsJSON = JSON.stringify(products);
    res.status(200).send({ data: products });
});

router.get("/:productId", async (req, res) => {
    let productId = +req.params.productId;
    let product = await PM.getProductById(productId);
  
    if (!product) {
      return res.send({ error: "Producto no encontrado" });
    }
    res.send({ product });
  });

 
router.post("/api/products", async (req, res) => {
  try {
    await cartManagerInstance.addCart();
  } catch (error) {
    console.error(error);
    res.status(400).send({ status: "error", error: "ha ocurrido un error" });
  }

  res.send({ status: "success", message: "carrito creado" });
});*/

export default router;