import { Router } from "express";
import OrderController from "../controllers/OrderController.js";

const orderRouter = Router();

orderRouter.get("/order", OrderController.listOrders);
orderRouter.get("/order/:id", OrderController.listOrder);
orderRouter.post("/order", OrderController.createOrder);

export default orderRouter;