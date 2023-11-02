import { Router } from "express";
import CategoryController from "../controllers/CategoryController.js";

const categoryRouter = Router();

/**
 * @swagger
 * tags:
 *  name: Categoria
 *  description: Rotas para gerenciar categoria
 */

/**
 * @swagger
 * /category:
 *   get:
 *     summary: Retorna uma lista com todas as categorias
 *     tags:
 *      - Categoria
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
 *                    description: id da categoria
 *                  name:
 *                    type: string
 *                    description: nome da categoria
 *                  createdAt:
 *                    type: string
 *                    format: date
 *                    description: criação da categoria
 *                  updatedAt:
 *                    type: string
 *                    format: date
 *                    description: atualização da categoria
 *       400:
 *         description: Bad Request
 */
categoryRouter.get("/category", CategoryController.listCategories);

/**
 * @swagger
 * /category/{id}:
 *    get:
 *     summary: Retorna uma categoria
 *     tags:
 *      - Categoria
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID da categoria
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
 *                   description: id da categoria
 *                 name:
 *                   type: string
 *                   description: nome da categoria
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: criação da categoria
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: atualização da categoria
 *       404:
 *         description: Not Found
 */
categoryRouter.get("/category/:id", CategoryController.listCategory);

/**
 * @swagger
 * /category:
 *   post:
 *     summary: Cria uma categoria
 *     tags:
 *      - Categoria
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: Nome da categoria 
 *            required:
 *              - name 
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
 *                   description: id da categoria
 *                 name:
 *                   type: string
 *                   description: nome da categoria
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: criação da categoria
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: atualização da categoria
 *       400:
 *         description: Bad Request
 */
categoryRouter.post(
  "/category", 
  CategoryController.createValidation,
  CategoryController.createCategory
);

/**
 * @swagger
 * /category/{id}:
 *   patch:
 *     summary: Atualiza uma categoria
 *     tags:
 *      - Categoria
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
 *              name:
 *                type: string
 *                description: Nome da categoria
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
 *                   description: id da categoria
 *                 name:
 *                   type: string
 *                   description: nome da categoria
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: criação da categoria
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: atualização da categoria
 *       404:
 *         description: Not Found
 */
categoryRouter.patch(
  "/category/:id",
  CategoryController.updateValidation, 
  CategoryController.updateCategory
);

/**
 * @swagger
 * /category/{id}:
 *   delete:
 *     summary: Deleta uma categoria
 *     tags:
 *      - Categoria
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: O ID da categoria
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 */
categoryRouter.delete(
  "/category/:id", 
  CategoryController.deleteValidation,
  CategoryController.deleteCategory
);

export default categoryRouter;