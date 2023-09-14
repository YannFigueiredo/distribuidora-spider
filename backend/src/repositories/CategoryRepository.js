import CategoryModel from "../models/CategoryModel.js";

class CategoryRepository {
  async getCategory() { 
    try {
      return await CategoryModel.findAll();
    } catch(error) {
      console.error("Não foi possível listar as categorias: ", error);
    };
  }

  async getCategoryById(id) {
    try {
      return await CategoryModel.findByPk(id);
    } catch(error) {
      console.error("Não foi possível listar a categoria: ", error);
    } 
  }

  async createCategory(data) {
    try {
      return await CategoryModel.create(data);
    } catch(error) {
      console.error("Não foi possível criar uma categoria: ", error);
    }
  }

  async updateCategory(id, data) {
    const date = new Date();
    const body = {
      ...data,
      updatedAt: date
    };

    try {
      const result = await CategoryModel.update(
        body, { where: { id } }
      );
      
      if(result > 0)
        return CategoryModel.findByPk(id);
    } catch(error) {
      console.error("Não foi possível atualizar a categoria: ", error);
    }
  }

  async deleteCategory(id) {
    try {
      return await CategoryModel.destroy({where: { id }});
    } catch(error) {
      console.error("Não foi possível apagar a categoria: ", error);
    } 
  }
}

export default new CategoryRepository();