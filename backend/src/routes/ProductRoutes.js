import { Router } from "express";
import ProductController from "../controllers/ProductController.js";

const productRouter = Router();

/**
 * @swagger
 * tags:
 *  name: Produto
 *  description: Rotas para gerenciar produto
 */

/**
 * @swagger
 * /product:
 *   get:
 *     summary: Retorna uma lista com todos os produtos
 *     tags:
 *      - Produto
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
 *                    description: id do produto
 *                  name:
 *                    type: string
 *                    description: nome do produto
 *                  quantity:
 *                    type: integer
 *                    description: quantidade do produto
 *                  value:
 *                    type: float
 *                    description: valor do produto
 *                  batch:
 *                    type: string
 *                    description: lote do produto
 *                  productTypeId:
 *                    type: integer
 *                    description: id do tipo de produto
 *                  createdAt:
 *                    type: string
 *                    format: date
 *                    description: criação do produto
 *                  updatedAt:
 *                    type: string
 *                    format: date
 *                    description: atualização do produto
 *       400:
 *         description: Bad Request
 */
productRouter.get("/product", ProductController.listProducts);

/**
 * @swagger
 * /product/{id}:
 *    get:
 *     summary: Retorna um produto
 *     tags:
 *      - Produto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID do produto
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
 *                   description: id do produto
 *                 name:
 *                   type: string
 *                   description: nome do produto
 *                 quantity:
 *                   type: integer
 *                   description: quantidade do produto
 *                 value:
 *                   type: float
 *                   description: valor do produto
 *                 batch:
 *                   type: string
 *                   description: lote do produto 
 *                 productTypeId:
 *                   type: integer
 *                   description: id do tipo de produto             
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: criação do produto
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: atualização do produto
 *       404:
 *         description: Not Found
 */
productRouter.get("/product/:id", ProductController.listProduct);

/**
 * @swagger
 * /product:
 *   post:
 *     summary: Cria um produto
 *     tags:
 *      - Produto
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: Nome do produto
 *              quantity:
 *                type: integer
 *                description: quantidade do produto
 *              value:
 *                type: float
 *                description: valor do produto
 *              batch:
 *                type: string
 *                description: lote do produto
 *              productTypeId:
 *                type: integer
 *                description: id do tipo de produto   
 *            required:
 *              - name 
 *              - quantity
 *              - value
 *              - batch
 *              - productTypeId
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: id do produto
 *                 name:
 *                   type: string
 *                   description: nome do produto
 *                 quantity:
 *                   type: integer
 *                   description: quantidade do produto
 *                 value:
 *                   type: float
 *                   description: valor do produto
 *                 batch:
 *                   type: string
 *                   description: lote do produto
 *                 productTypeId:
 *                   type: integer
 *                   description: id do tipo de produto
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: criação do produto
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: atualização do produto
 *       400:
 *         description: Bad Request
 */
productRouter.post(
  "/product",
  ProductController.createValidation, 
  ProductController.createProduct
);

/**
 * @swagger
 * /product/{id}:
 *   patch:
 *     summary: Atualiza um produto
 *     tags:
 *      - Produto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID do produto
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: Nome do produto
 *              quantity:
 *                 type: integer
 *                 description: quantidade do produto
 *              value:
 *                type: float
 *                description: valor do produto
 *              batch:
 *                type: string
 *                description: lote do produto 
 *              productTypeId:
 *                type: integer
 *                description: id do tipo de produto
 *            required:
 *              - name 
 *              - quantity
 *              - value
 *              - batch
 *              - productTypeId
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
 *                   description: id do produto
 *                 name:
 *                   type: string
 *                   description: nome do produto
 *                 quantity:
 *                   type: integer
 *                   description: quantidade do produto
 *                 value:
 *                   type: float
 *                   description: valor do produto
 *                 batch:
 *                   type: string
 *                   description: lote do produto 
 *                 productTypeId:
 *                   type: integer
 *                   description: id do tipo de produto
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: criação do produto
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: atualização do produto
 *       404:
 *         description: Not Found
 */
productRouter.patch(
  "/product/:id",
  ProductController.updateValidation, 
  ProductController.updateProduct
);

/**
 * @swagger
 * /product/{id}:
 *   delete:
 *     summary: Deleta um produto
 *     tags:
 *      - Produto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID do produto
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 */
productRouter.delete(
  "/product/:id", 
  ProductController.deleteValidation,
  ProductController.deleteProduct
);

export default productRouter;