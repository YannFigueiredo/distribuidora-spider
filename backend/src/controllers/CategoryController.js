import CategoryRepository from "../repositories/CategoryRepository.js";
import { validation } from "../middleware/Validation.js";
import * as yup from "yup";

class CategoryController {
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

  async listCategories(_, res) {
    try {
      const result = await CategoryRepository.getCategory();
  
      if(result) {
        await res.status(200).json(result);
      } else {
        await res.status(404).json({message: "Não foi possível encontrar as categorias."});
      }
    } catch(error) {
      await res.status(400).json({message: `Ocorreu um erro ao listar as categorias: ${error}`});
    }
  }

  async listCategory(req, res) {
    try {
      const result = await CategoryRepository.getCategoryById(req.params.id);
      
      if(result) {
        await res.status(200).json(result);
      } else {
        await res.status(404).json({message: "Não foi possível encontrar a categoria."})
      }
    } catch(error) {
      await res.status(400).json({message: `Ocorreu um erro ao listar a categoria: ${error}`});
    }
  }

  async createCategory(req, res) {
    try {
      const result = await CategoryRepository.createCategory(req.body);
      
      if(result) {
        await res.status(201).json(result);
      } else {
        await res.status(500).json({message: "Não foi possível criar a categoria."});
      }
    } catch(error) {
      await res.status(400).json({message: "Ocorreu um erro ao criar a categoria: ", error});
    }
  }

  async updateCategory(req, res) {
    try {
      const result = await CategoryRepository.updateCategory(req.params.id, req.body);

      if(result) {
        await res.status(200).json(result);
      } else {
        await res.status(400).json({message: "Não foi possível atualizar a categoria."});
      }
    } catch(error) {
      await res.status(400).json({message: "Ocorreu um erro ao atualizar a categoria: ", error});
    }
  }

  async deleteCategory(req, res) {
    try {
      const result = await CategoryRepository.deleteCategory(req.params.id);

      if(result) {
        await res.status(200).json({message: "Categoria apagada com sucesso."});
      } else {
        await res.status(400).json({message: "Não foi possível apagar a categoria."});
      }
    } catch(error) {
      await res.status(400).json({message: "Ocorreu um erro ao apagar a categoria: ", error});
    }
  }
}

export default new CategoryController();