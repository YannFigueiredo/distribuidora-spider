import ProductTypeRepository from "../repositories/ProductTypeRepository.js";
import { validation } from "../middleware/Validation.js";
import * as yup from "yup";

class ProductTypeController {
  createValidation = validation({
    body: yup.object({
      name: yup.string().required().min(3)
    })
  });

  updateValidation = validation({
    body: yup.object({
      name: yup.string().min(3)
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

  async listProductsTypes(_, res) {
    try {
      const result = await ProductTypeRepository.getProductType();

      if(result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({message: `Não foi possível encontrar os tipos de produtos.`})
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao listar os tipos de produtos: ${error}`});
    }
  }

  async listProductType(req, res) {
    try {
      const result = await ProductTypeRepository.getProductTypeById(req.params.id);

      if(result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({message: `Não foi possível encontrar o tipo de produto.`})
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao listar o tipo de produto: ${error}`});
    }
  }

  async createProductType(req, res) {
    try {
      const result = await ProductTypeRepository.createProductType(req.body);

      if(result) {
        res.status(201).json(result);
      } else {
        res.status(400).json({message: "Não foi possível criar o tipo de produto."});
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao criar o tipo de produto: ${error}`});
    }
  }

  async updateProductType(req, res) {
    try {
      const result = await ProductTypeRepository.updateProductType(req.params.id, req.body);

      if(result) {
        res.status(200).json(result);
      } else {
        res.status(400).json({message: "Não foi possível atualizar o tipo de produto."});
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao atualizar o tipo de produto: ${error}`});
    }
  }

  async deleteProductType(req, res) {
    try {
      const result = await ProductTypeRepository.deleteProductType(req.params.id);

      if(result) {
        res.status(200).json({message: "Tipo de produto apagado com sucesso."});
      } else {
        res.status(400).json({message: "Não foi possível apagar o tipo de produto."});
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao apagar o tipo de produto: ${error}`});
    }
  }
}

export default new ProductTypeController();