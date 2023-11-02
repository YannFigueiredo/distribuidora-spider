import { Router } from "express";
import SupplierController from "../controllers/SupplierController.js";

const supplierRouter = Router();

/**
 * @swagger
 * tags:
 *  name: Fornecedor
 *  description: Rotas para gerenciar fornecedor
 */

/**
 * @swagger
 * /supplier:
 *   get:
 *     summary: Retorna uma lista com todas os fornecedores
 *     tags:
 *      - Fornecedor
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
 *                    description: id do fornecedor
 *                  name:
 *                    type: string
 *                    description: nome do fornecedor
 *                  createdAt:
 *                    type: string
 *                    format: date
 *                    description: criação do fornecedor
 *                  updatedAt:
 *                    type: string
 *                    format: date
 *                    description: atualização do fornecedor
 *       400:
 *         description: Bad Request
 */
supplierRouter.get("/supplier", SupplierController.listSuppliers);

/**
 * @swagger
 * /supplier/{id}:
 *    get:
 *     summary: Retorna um fornecedor
 *     tags:
 *      - Fornecedor
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID do fornecedor
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
 *                   description: id do fornecedor
 *                 name:
 *                   type: string
 *                   description: nome do fornecedor
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: criação do fornecedor
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: atualização do fornecedor
 *       404:
 *         description: Not Found
 */
supplierRouter.get("/supplier/:id", SupplierController.listSupplier);

/**
 * @swagger
 * /supplier:
 *   post:
 *     summary: Cria um fornecedor
 *     tags:
 *      - Fornecedor
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID do fornecedor
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: Nome do fornecedor
 *            required:
 *              - name 
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
 *                   description: id do fornecedor
 *                 name:
 *                   type: string
 *                   description: nome do fornecedor
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: criação do fornecedor
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: atualização do fornecedor
 *       400:
 *         description: Bad Request
 */
supplierRouter.post(
  "/supplier", 
  SupplierController.createValidation,
  SupplierController.createSupplier
);

/**
 * @swagger
 * /supplier/{id}:
 *   patch:
 *     summary: Atualiza um fornecedor
 *     tags:
 *      - Fornecedor
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID do fornecedor
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: Nome do fornecedor
 *            required:
 *              - name 
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
 *                   description: id do fornecedor
 *                 name:
 *                   type: string
 *                   description: nome do fornecedor
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: criação do fornecedor
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: atualização do fornecedor
 *       404:
 *         description: Not Found
 */
supplierRouter.patch(
  "/supplier/:id",
  SupplierController.updateValidation,
  SupplierController.updateSupplier
);

/**
 * @swagger
 * /supplier/{id}:
 *   delete:
 *     summary: Deleta um fornecedor
 *     tags:
 *      - Fornecedor
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID do fornecedor
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 */
supplierRouter.delete(
  "/supplier/:id", 
  SupplierController.deleteValidation,
  SupplierController.deleteSupplier
);

export default supplierRouter;