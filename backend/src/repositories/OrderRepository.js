import OrderModel from "../models/OrderModel.js";

class OrderRepository {
  async getOrder() {
    try {
      return await OrderModel.findAll();
    } catch(error) {
      console.error("Não foi possível listar as ordens: ", error);
    }
  }

  async getOrderById(id) {
    try {
      return await OrderModel.findByPk(id);
    } catch(error) {
      console.error("Não foi possível listar a ordem: ", error);
    }
  }

  async createOrder(data) {
    try {
      return await OrderModel.create(data);
    } catch(error) {
      console.error("Não foi possível criar a ordem.");
    }
  }
  
  async updateOrder(id, data) {
    const date = new Date();
    const body = {
      ...data,
      updatedAt: date
    }

    try {
      const result = await OrderModel.update(body, { where: { id } }); 

      if(result > 0)
        return await OrderModel.findByPk(id);
    } catch(error) {
      console.error("Não foi possível atualizar a ordem: ", error);
    }
  }

  async deleteOrder(id) {
    try {
      return await OrderModel.destroy({ where: { id } });
    } catch(error) {
      console.error("Não foi possível apagar a ordem: ", error);
    }
  }
}

export default new OrderRepository();