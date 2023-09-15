import ProductModel from "../models/ProductModel.js";

class ProductRepository {
  async getProduct() {
    try {
      return await ProductModel.findAll();
    } catch(error) {
      console.error("Não foi possível listar os produtos: ", error);
    }
  }

  async getProductById(id) {
    try {
      return await ProductModel.findByPk(id);
    } catch(error) {
      console.error("Não foi possível listar o produto: ", error);
    }
  }

  async createProduct(data) {
    try {
      return await ProductModel.create(data);
    } catch(error) {
      console.error("Não foi possível criar o produto.");
    }
  }
  
  async updateProduct(id, data) {
    const date = new Date();
    const body = {
      ...data,
      updatedAt: date
    }

    try {
      const result = await ProductModel.update(body, { where: { id } }); 

      if(result > 0)
        return await ProductModel.findByPk(id);
    } catch(error) {
      console.error("Não foi possível atualizar o produto: ", error);
    }
  }

  async deleteProduct(id) {
    try {
      return await ProductModel.destroy({ where: { id } });
    } catch(error) {
      console.error("Não foi possível apagar o produto: ", error);
    }
  }
}

export default new ProductRepository();