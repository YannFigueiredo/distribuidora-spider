import { Router } from "express";
import OrderProductController from "../controllers/OrderProductController.js";

const orderProductRouter = Router();

orderProductRouter.get("/order-product", OrderProductController.listOrders);
orderProductRouter.get("/order-product/:id", OrderProductController.listOrder);
orderProductRouter.post("/order-product", OrderProductController.createOrder);
orderProductRouter.patch(
  "/order-product/:id",
  OrderProductController.updateValidation,
  OrderProductController.updateOrder
);
orderProductRouter.delete(
  "/order-product/:id",
  OrderProductController.deleteValidation,
  OrderProductController.deleteOrder
);

export default orderProductRouter;