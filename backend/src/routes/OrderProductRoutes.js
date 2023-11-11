import { Router } from "express";
import OrderProductController from "../controllers/OrderProductController.js";

const orderProductRouter = Router();

/**
 * @swagger
 * tags:
 *  name: Relacionamento Ordem/Produto
 *  description: Rotas para gerenciar o relacionamento ordem/produto
 */

/**
 * @swagger
 * /order-product:
 *   get:
 *     summary: Retorna uma lista com todas as relações ordem/produto
 *     tags:
 *      - Relacionamento Ordem/Produto
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
 *                    description: id da relação ordem/produto
 *                  orderId:
 *                    type: integer
 *                    description: id da ordem
 *                  productId:
 *                    type: integer
 *                    description: id do produto
 *                  createdAt:
 *                    type: string
 *                    format: date
 *                    description: criação da relação ordem/produto
 *                  updatedAt:
 *                    type: string
 *                    format: date
 *                    description: atualização da relação ordem/produto
 *       400:
 *         description: Bad Request
 */
orderProductRouter.get("/order-product", OrderProductController.listOrdersProduct);

/**
 * @swagger
 * /order-product/{id}:
 *    get:
 *     summary: Retorna uma relação ordem/produto
 *     tags:
 *      - Relacionamento Ordem/Produto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID da relação ordem/produto
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
 *                   description: id da relação ordem/produto
 *                 orderId:
 *                   type: integer
 *                   description: id da ordem
 *                 productId:
 *                   type: integer
 *                   description: id do produto
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: criação da relação ordem/produto
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: atualização da relação ordem/produto
 *       404:
 *         description: Not Found
 */
orderProductRouter.get("/order-product/:id", OrderProductController.listOrderProduct);

/**
 * @swagger
 * /order-product:
 *   post:
 *     summary: Cria uma relação ordem/produto
 *     tags:
 *      - Relacionamento Ordem/Produto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID da relação ordem/produto
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              orderId:
 *               type: integer
 *               description: id da ordem
 *              productId:
 *                type: integer
 *                description: id do produto
 *            required:
 *              - orderId
 *              - productId 
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
 *                   description: id da relação ordem/produto
 *                 orderId:
 *                   type: integer
 *                   description: id da ordem
 *                 productId:
 *                   type: integer
 *                   description: id do produto
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: criação da relação ordem/produto
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: atualização da relação ordem/produto
 *       400:
 *         description: Bad Request
 */
orderProductRouter.post("/order-product", OrderProductController.createOrderProduct);

/**
 * @swagger
 * /order-product/{id}:
 *   patch:
 *     summary: Atualiza uma relação ordem/produto
 *     tags:
 *      - Relacionamento Ordem/Produto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID da categoria
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              orderId:
 *               type: integer
 *               description: id da ordem
 *              productId:
 *                type: integer
 *                description: id do produto
 *            required:
 *              - orderId
 *              - productId
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
 *                   description: id da relação ordem/produto
 *                 orderId:
 *                   type: integer
 *                   description: id da ordem
 *                 productId:
 *                   type: integer
 *                   description: id do produto
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: criação da relação ordem/produto
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: atualização da relação ordem/produto
 *       404:
 *         description: Not Found
 */
orderProductRouter.patch(
  "/order-product/:id",
  OrderProductController.updateValidation,
  OrderProductController.updateOrderProduct
);

/**
 * @swagger
 * /order-product/{id}:
 *   delete:
 *     summary: Deleta uma relação ordem-produto
 *     tags:
 *      - Relacionamento Ordem/Produto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID da relação ordem/produto
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 */
orderProductRouter.delete(
  "/order-product/:id",
  OrderProductController.deleteValidation,
  OrderProductController.deleteOrderProduct
);

export default orderProductRouter;