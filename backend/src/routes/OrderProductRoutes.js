import { Router } from "express";
import OrderProductController from "../controllers/OrderProductController.js";

const orderProductRouter = Router();

orderProductRouter.get("/order", OrderProductController.listOrders);
orderProductRouter.get("/order/:id", OrderProductController.listOrder);
orderProductRouter.post("/order", OrderProductController.createOrder);
orderProductRouter.patch(
  "/order/:id",
  OrderProductController.updateValidation,
  OrderProductController.updateOrder
);
orderProductRouter.delete(
  "/order/:id",
  OrderProductController.deleteValidation,
  OrderProductController.deleteOrder
);

export default orderProductRouter;