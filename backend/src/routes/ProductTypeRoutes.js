import { Router } from "express";
import ProductTypeController from "../controllers/ProductTypeController.js";

const productTypeRouter = Router();

/**
 * @swagger
 * tags:
 *  name: Tipo de Produto
 *  description: Rotas para gerenciar tipo de produto
 */

/**
 * @swagger
 * /product-type:
 *   get:
 *     summary: Retorna uma lista com todos os tipos de produtos
 *     tags:
 *      - Tipo de Produto
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
 *                    description: id do tipo de produto
 *                  name:
 *                    type: string
 *                    description: nome do tipo de produto
 *                  supplierId:
 *                    type: integer
 *                    description: id do fornecedor
 *                  categoryId:
 *                    type: integer
 *                    description: id da categoria
 *                  createdAt:
 *                    type: string
 *                    format: date
 *                    description: criação do tipo de produto
 *                  updatedAt:
 *                    type: string
 *                    format: date
 *                    description: atualização do tipo de produto
 *       400:
 *         description: Bad Request
 */
productTypeRouter.get("/product-type", ProductTypeController.listProductsTypes);

/**
 * @swagger
 * /product-type/{id}:
 *    get:
 *     summary: Retorna um tipo de produto
 *     tags:
 *      - Tipo de Produto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID do tipo de produto
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
 *                   description: id do tipo de produto
 *                 name:
 *                   type: string
 *                   description: nome do tipo de produto
 *                 supplierId:
 *                   type: integer
 *                   description: id do fornecedor
 *                 categoryId:
 *                   type: integer
 *                   description: id da categoria
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: criação do tipo de produto
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: atualização do tipo de produto
 *       404:
 *         description: Not Found
 */
productTypeRouter.get("/product-type/:id", ProductTypeController.listProductType);

/**
 * @swagger
 * /product-type:
 *   post:
 *     summary: Cria um tipo de produto
 *     tags:
 *      - Tipo de Produto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID do tipo de produto
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: Nome do tipo de produto
 *              supplierId:
 *                type: integer
 *                description: id do fornecedor
 *              categoryId:
 *                type: integer
 *                description: id da categoria
 *            required:
 *              - name 
 *              - supplierId
 *              - categoryId
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
 *                   description: id do tipo de produto
 *                 name:
 *                   type: string
 *                   description: nome do tipo de produto
 *                 supplierId:
 *                   type: integer
 *                   description: id do fornecedor
 *                 categoryId:
 *                   type: integer
 *                   description: id da categoria
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: criação do tipo de produto
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: atualização do tipo de produto
 *       400:
 *         description: Bad Request
 */
productTypeRouter.post(
  "/product-type", 
  ProductTypeController.createValidation,
  ProductTypeController.createProductType
);

/**
 * @swagger
 * /product-type/{id}:
 *   patch:
 *     summary: Atualiza um tipo de produto
 *     tags:
 *      - Tipo de Produto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID do tipo de produto
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: Nome do tipo de produto
 *              supplierId:
 *                type: integer
 *                description: id do fornecedor
 *              categoryId:
 *                type: integer
 *                description: id da categoria
 *            required:
 *              - name 
 *              - supplierId
 *              - categoryId
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
 *                   description: id do tipo de produto
 *                 name:
 *                   type: string
 *                   description: nome do tipo de produto
 *                 supplierId:
 *                   type: integer
 *                   description: id do fornecedor
 *                 categoryId:
 *                   type: integer
 *                   description: id da categoria
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: criação do tipo de produto
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: atualização do tipo de produto
 *       400:
 *         description: Bad Request
 */
productTypeRouter.patch(
  "/product-type/:id", 
  ProductTypeController.updateValidation,
  ProductTypeController.updateProductType
);

/**
 * @swagger
 * /product-type/{id}:
 *   delete:
 *     summary: Deleta um tipo de produto
 *     tags:
 *      - Tipo de Produto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID do tipo de produto
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 */
productTypeRouter.delete(
  "/product-type/:id", 
  ProductTypeController.deleteValidation,
  ProductTypeController.deleteProductType
);

export default productTypeRouter;