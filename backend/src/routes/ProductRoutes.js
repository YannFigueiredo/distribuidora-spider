import { Router } from "express";
import ProductController from "../controllers/ProductController.js";

const productRouter = Router();

productRouter.get("/product", ProductController.listProducts);
productRouter.get("/product/:id", ProductController.listProduct);
productRouter.post("/product", ProductController.createProduct);
productRouter.put("/product/:id", ProductController.updateProduct);
productRouter.delete("/product/:id", ProductController.deleteProduct);

export default productRouter;