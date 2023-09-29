import OrderProductModel from "../models/OrderProductModel.js";

class OrderProductRepository {
  async getOrderProduct() {
    try {
      return await OrderProductModel.findAll();
    } catch(error) {
      console.error("Não foi possível listar as ordens: ", error);
    }
  }

  async getOrderProductById(id) {
    try {
      return await OrderProductModel.findByPk(id);
    } catch(error) {
      console.error("Não foi possível listar a ordem: ", error);
    }
  }

  async createOrderProduct(data) {
    try {
      return await OrderProductModel.create(data);
    } catch(error) {
      console.error("Não foi possível criar a ordem.");
    }
  }
  
  async updateOrderProduct(id, data) {
    const date = new Date();
    const body = {
      ...data,
      updatedAt: date
    }

    try {
      const result = await OrderProductModel.update(body, { where: { id } }); 

      if(result > 0)
        return await OrderProductModel.findByPk(id);
    } catch(error) {
      console.error("Não foi possível atualizar a ordem: ", error);
    }
  }

  async deleteOrderProduct(id) {
    try {
      return await OrderProductModel.destroy({ where: { id } });
    } catch(error) {
      console.error("Não foi possível apagar a ordem: ", error);
    }
  }
}

export default new OrderProductRepository();