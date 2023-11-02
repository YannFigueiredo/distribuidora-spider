import { Router } from "express";
import OrderController from "../controllers/OrderController.js";

const orderRouter = Router();

/**
 * @swagger
 * tags:
 *  name: Ordem (Compra/Venda)
 *  description: Rotas para gerenciar ordem
 */

/**
 * @swagger
 * /order:
 *   get:
 *     summary: Retorna uma lista com todas as ordens
 *     tags:
 *      - Ordem (Compra/Venda)
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: integer
 *                    description: id da ordem
 *                  value:
 *                    type: number
 *                    format: float
 *                    description: valor da ordem
 *                  date:
 *                     type: string
 *                     format: date
 *                     description: data da ordem
 *                  type:
 *                     type: string
 *                     enum:
 *                      - Compra
 *                      - Venda
 *                     description: tipo da ordem
 *                  createdAt:
 *                    type: string
 *                    format: date
 *                    description: criação da ordem
 *                  updatedAt:
 *                    type: string
 *                    format: date
 *                    description: atualização da ordem
 *       400:
 *         description: Bad Request
 */
orderRouter.get("/order", OrderController.listOrders);

/**
 * @swagger
 * /order/{id}:
 *    get:
 *     summary: Retorna uma ordem
 *     tags:
 *      - Ordem (Compra/Venda)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID da ordem
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 id:
 *                   type: integer
 *                   description: id da ordem
 *                 value:
 *                   type: number
 *                   format: float
 *                   description: valor da ordem
 *                 date:
 *                    type: string
 *                    format: date
 *                    description: data da ordem
 *                 type:
 *                    type: string
 *                    enum:
 *                     - Compra
 *                     - Venda
 *                    description: tipo da ordem
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: criação da ordem
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: atualização da ordem
 *       404:
 *         description: Not Found
 */
orderRouter.get("/order/:id", OrderController.listOrder);

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Cria uma ordem
 *     tags:
 *      - Ordem (Compra/Venda)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID da ordem
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              value:
 *                type: number
 *                format: float
 *                description: valor da ordem
 *              date:
 *                 type: string
 *                 format: date
 *                 description: data da ordem
 *              type:
 *                 type: string
 *                 enum:
 *                  - Compra
 *                  - Venda
 *                 description: tipo da ordem
 *            required:
 *              - value
 *              - date
 *              - type
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 id:
 *                   type: integer
 *                   description: id da ordem
 *                 value:
 *                   type: number
 *                   format: float
 *                   description: valor da ordem
 *                 date:
 *                    type: string
 *                    format: date
 *                    description: data da ordem
 *                 type:
 *                    type: string
 *                    enum:
 *                     - Compra
 *                     - Venda
 *                    description: tipo da ordem
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: criação da ordem
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: atualização da ordem
 *       400:
 *         description: Bad Request
 */
orderRouter.post(
  "/order",
  OrderController.createValidation, 
  OrderController.createOrder
);

/**
 * @swagger
 * /order/{id}:
 *   patch:
 *     summary: Atualiza uma ordem
 *     tags:
 *      - Ordem (Compra/Venda)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID da ordem
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              value:
 *                type: number
 *                format: float
 *                description: valor da ordem
 *              date:
 *                 type: string
 *                 format: date
 *                 description: data da ordem
 *              type:
 *                 type: string
 *                 enum:
 *                  - Compra
 *                  - Venda
 *                 description: tipo da ordem
 *            required:
 *              - value
 *              - date
 *              - type 
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 id:
 *                   type: integer
 *                   description: id da ordem
 *                 value:
 *                   type: number
 *                   format: float
 *                   description: valor da ordem
 *                 date:
 *                    type: string
 *                    format: date
 *                    description: data da ordem
 *                 type:
 *                    type: string
 *                    enum:
 *                     - Compra
 *                     - Venda
 *                    description: tipo da ordem
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: criação da ordem
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: atualização da ordem
 *       404:
 *         description: Not Found
 */
orderRouter.patch(
  "/order/:id",
  OrderController.updateValidation,
  OrderController.updateOrder
);

/**
 * @swagger
 * /order/{id}:
 *   delete:
 *     summary: Deleta uma ordem
 *     tags:
 *      - Ordem (Compra/Venda)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID da ordem
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 */
orderRouter.delete(
  "/order/:id",
  OrderController.deleteValidation,
  OrderController.deleteOrder
);

export default orderRouter;