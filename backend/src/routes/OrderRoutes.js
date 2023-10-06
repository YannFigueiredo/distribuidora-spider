import { Router } from "express";
import OrderController from "../controllers/OrderController.js";

const orderRouter = Router();

orderRouter.get("/order", OrderController.listOrders);
orderRouter.get("/order/:id", OrderController.listOrder);
orderRouter.post(
  "/order",
  OrderController.createValidation, 
  OrderController.createOrder
);
orderRouter.patch(
  "/order/:id",
  OrderController.updateValidation,
  OrderController.updateOrder
);
orderRouter.delete(
  "/order/:id",
  OrderController.deleteValidation,
  OrderController.deleteOrder
);

export default orderRouter;