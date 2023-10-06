import { Router } from "express";
import ProductController from "../controllers/ProductController.js";

const productRouter = Router();

productRouter.get("/product", ProductController.listProducts);
productRouter.get("/product/:id", ProductController.listProduct);
productRouter.post(
  "/product",
  ProductController.createValidation, 
  ProductController.createProduct
);
productRouter.put(
  "/product/:id",
  ProductController.updateValidation, 
  ProductController.updateProduct
);
productRouter.delete(
  "/product/:id", 
  ProductController.deleteValidation,
  ProductController.deleteProduct
);

export default productRouter;