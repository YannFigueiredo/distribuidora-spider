import ProductRepository from "../repositories/ProductRepository.js";
import { validation } from "../middleware/Validation.js";
import * as yup from "yup";

class ProductController {
  createValidation = validation({
    body: yup.object({
      name: yup.string().required().min(3),
      quantity: yup.number().required().min(1),
      value: yup.number().required(),
      batch: yup.string().required()
    })
  });

  updateValidation = validation({
    body: yup.object({
      name: yup.string().min(2),
      quantity: yup.number().min(1),
      value: yup.number(),
      batch: yup.string()
    }),
    params: yup.object({
      id: yup.number().required()
    })
  });

  deleteValidation = validation({
    params: yup.object({
      id: yup.number().required()
    })
  });

  async listProducts(_, res) {
    try {
      const result = await ProductRepository.getProduct();

      if(result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({message: `Não foi possível encontrar os produtos.`})
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao listar os produtos: ${error}`});
    }
  }

  async listProduct(req, res) {
    try {
      const result = await ProductTypeRepository.getProductById(req.params.id);

      if(result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({message: `Não foi possível encontrar o produto.`})
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao listar o produto: ${error}`});
    }
  }

  async createProduct(req, res) {
    try {
      const result = await ProductTypeRepository.createProduct(req.body);

      if(result) {
        res.status(201).json(result);
      } else {
        res.status(400).json({message: "Não foi possível criar o produto."});
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao criar o produto: ${error}`});
    }
  }

  async updateProduct(req, res) {
    try {
      const result = await ProductTypeRepository.updateProduct(req.params.id, req.body);

      if(result) {
        res.status(200).json(result);
      } else {
        res.status(400).json({message: "Não foi possível atualizar o produto."});
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao atualizar o produto: ${error}`});
    }
  }

  async deleteProduct(req, res) {
    try {
      const result = await ProductTypeRepository.deleteProduct(req.params.id);

      if(result) {
        res.status(200).json({message: "Produto apagado com sucesso."});
      } else {
        res.status(400).json({message: "Não foi possível apagar o produto."});
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao apagar o produto: ${error}`});
    }
  }
}

export default new ProductController();