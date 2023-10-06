import { Router } from "express";
import ProductTypeController from "../controllers/ProductTypeController.js";

const productTypeRouter = Router();

productTypeRouter.get("/product-type", ProductTypeController.listProductsTypes);
productTypeRouter.get("/product-type/:id", ProductTypeController.listProductType);
productTypeRouter.post(
  "/product-type", 
  ProductTypeController.createValidation,
  ProductTypeController.createProductType
);
productTypeRouter.put(
  "/product-type/:id", 
  ProductTypeController.updateValidation,
  ProductTypeController.updateProductType
);
productTypeRouter.delete(
  "/product-type/:id", 
  ProductTypeController.deleteValidation,
  ProductTypeController.deleteProductType
);

export default productTypeRouter;