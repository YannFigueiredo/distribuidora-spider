import { Router } from "express";
import SupplierController from "../controllers/CategoryController.js";

const supplierRouter = Router();

supplierRouter.get("/category", SupplierController.listCategories);
supplierRouter.get("/category/:id", SupplierController.listCategory);
supplierRouter.post("/category", SupplierController.createCategory);
supplierRouter.put("/category/:id", SupplierController.updateCategory);
supplierRouter.delete("/category/:id", SupplierController.deleteCategory);

export default supplierRouter;