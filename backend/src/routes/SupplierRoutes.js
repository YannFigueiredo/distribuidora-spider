import { Router } from "express";
import SupplierController from "../controllers/SupplierController.js";

const supplierRouter = Router();

supplierRouter.get("/supplier", SupplierController.listSuppliers);
supplierRouter.get("/supplier/:id", SupplierController.listSupplier);
supplierRouter.post(
  "/supplier", 
  SupplierController.createValidation,
  SupplierController.createSupplier
);
supplierRouter.put(
  "/supplier/:id",
  SupplierController.updateValidation,
  SupplierController.updateSupplier
);
supplierRouter.delete(
  "/supplier/:id", 
  SupplierController.deleteValidation,
  SupplierController.deleteSupplier
);

export default supplierRouter;