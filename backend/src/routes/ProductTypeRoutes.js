import { Router } from "express";
import ProductTypeController from "../controllers/ProductTypeController.js";

const productTypeRouter = Router();

productTypeRouter.get("/product-type", ProductTypeController.listProductsTypes);
productTypeRouter.get("/product-type/:id", ProductTypeController.listProductType);
productTypeRouter.post("/product-type", ProductTypeController.createProductType);
productTypeRouter.put("/product-type/:id", ProductTypeController.updateProductType);
productTypeRouter.delete("/product-type/:id", ProductTypeController.deleteProductType);

export default productTypeRouter;