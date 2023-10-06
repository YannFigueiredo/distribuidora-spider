import { Router } from "express";
import SupplierController from "../controllers/CategoryController.js";

const supplierRouter = Router();

supplierRouter.get("/category", SupplierController.listCategories);
supplierRouter.get("/category/:id", SupplierController.listCategory);
supplierRouter.post(
  "/category", 
  SupplierController.createValidation,
  SupplierController.createCategory
);
supplierRouter.put(
  "/category/:id",
  SupplierController.updateValidation,
  SupplierController.updateCategory
);
supplierRouter.delete(
  "/category/:id", 
  SupplierController.deleteValidation,
  SupplierController.deleteCategory
);

export default supplierRouter;