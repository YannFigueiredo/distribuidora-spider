import SupplierRepository from "../repositories/SupplierRepository.js";
import { validation } from "../middleware/Validation.js";
import * as yup from "yup";

class SupplierController {
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

  async listSuppliers(_, res) {
    try {
      const result = await SupplierRepository.getSupplier();

      if(result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({message: "Não foi possível encontrar os fornecedores."})
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao listar os fornecedores: ${error}`})
    }
  }

  async listSupplier(req, res) {
    try {
      const result = await SupplierRepository.getSupplierById(req.params.id);

      if(result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({message: "Não foi possível encontrar o fornecedor."});
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao listar o fornecedor: ${error}`});
    }
  }

  async createSupplier(req, res) {
    try {
      const result = await SupplierRepository.createSupplier(req.body);
      
      if(result) {
        res.status(201).json(result);
      } else {
        res.status(400).json({message: "Não foi possível criar o fornecedor."});
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao criar um fornecedor:  ${error}`});
    }
  }

  async updateSupplier(req, res) {
    try {
      const result = await SupplierRepository.updateSupplier(req.params.id, req.body);
      
      if(result) {
        res.status(200).json(result);
      } else {
        res.status(400).json({message: "Não foi possível atualizar o fornecedor."});
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao atualizar o fornecedor: ${error}`})
    }
  }

  async deleteSupplier(req, res) {
    try {
      const result = await SupplierRepository.deleteSupplier(req.params.id);

      if(result) {
        res.status(200).json({message: "Fornecedor apagado com sucesso."});
      } else {
        res.status(400).json({message: "Não foi possível apagar o fornecedor."});
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao apagar o fornecedor: ${error}`});
    }
  }
}

export default new SupplierController();