import ProductTypeModel from "../models/ProductTypeModel.js";

class ProductTypeRepository {
  async getProductType() {
    try {
      return await ProductTypeModel.findAll();
    } catch(error) {
      console.error("Não foi possível listar os tipos de produtos: ", error);
    }
  }

  async getProductTypeById(id) {
    try {
      return await ProductTypeModel.findByPk(id);
    } catch(error) {
      console.error("Não foi possível listar o tipo de produto: ", error);
    }
  }

  async createProductType(data) {
    try {
      return await ProductTypeModel.create(data);
    } catch(error) {
      console.error("Não foi possível criar o tipo de produto.");
    }
  }
  
  async updateProductType(id, data) {
    const date = new Date();
    const body = {
      ...data,
      updatedAt: date
    }

    try {
      const result = await ProductTypeModel.update(body, { where: { id } }); 

      if(result > 0)
        return await ProductTypeModel.findByPk(id);
    } catch(error) {
      console.error("Não foi possível atualizar o tipo de produto: ", error);
    }
  }

  async deleteProductType(id) {
    try {
      return await ProductTypeModel.destroy({ where: { id } });
    } catch(error) {
      console.error("Não foi possível apagar o tipo de produto: ", error);
    }
  }
}

export default new ProductTypeRepository();