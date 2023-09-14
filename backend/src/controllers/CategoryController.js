import CategoryRepository from "../repositories/CategoryRepository.js";

class CategoryController {
  async listCategories(_, res) {
    const result = await CategoryRepository.getCategory();

    res.status(200).json(result);
  }

  async listCategory(req, res) {
    const result = await CategoryRepository.getCategoryById(req.params.id);
    
    res.status(200).json(result);
  }

  async createCategory(req, res) {
    try {
      const result = await CategoryRepository.createCategory(req.body);
      
      if(result) {
        res.status(201).json(result);
      } else {
        res.status(500).json({message: "Não foi possível criar a categoria."});
      }
    } catch(error) {
      res.status(500).json({message: "Ocorreu um erro ao criar a categoria: ", error});
    }
  }

  async updateCategory(req, res) {
    try {
      const result = await CategoryRepository.updateCategory(req.params.id, req.body);

      if(result) {
        res.status(200).json(result);
      } else {
        res.status(500).json({message: "Não foi possível atualizar a categoria."});
      }
    } catch(error) {
      res.status(500).json({message: "Ocorreu um erro ao atualizar a categoria: ", error});
    }
  }

  async deleteCategory(req, res) {
    try {
      const result = await CategoryRepository.deleteCategory(req.params.id);

      if(result) {
        res.status(200).json({message: "Categoria apagada com sucesso."});
      } else {
        res.status(500).json({message: "Não foi possível apagar a categoria."});
      }
    } catch(error) {
      res.status(500).json({message: "Ocorreu um erro ao apagar a categoria: ", error});
    }
  }
}

export default new CategoryController();