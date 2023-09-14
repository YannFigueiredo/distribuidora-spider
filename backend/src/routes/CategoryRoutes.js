import { Router } from "express";
import CategoryController from "../controllers/CategoryController.js";

const categoryRouter = Router();

categoryRouter.get("/category", CategoryController.listCategories);
categoryRouter.get("/category/:id", CategoryController.listCategory);
categoryRouter.post("/category", CategoryController.createCategory);
categoryRouter.patch("/category/:id", CategoryController.updateCategory);
categoryRouter.delete("/category/:id", CategoryController.deleteCategory);

export default categoryRouter;