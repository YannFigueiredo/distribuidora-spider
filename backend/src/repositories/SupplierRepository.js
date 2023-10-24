import SupplierModel from "../models/SupplierModel.js";

class SupplierRepository {
  async getSupplier() {
    try {
      return await SupplierModel.findAll();
    } catch(error) {
      console.error("Não foi possível listar os fornecedores: ", error);
    }
  }

  async getSupplierById(id) {
    try {
      return await SupplierModel.findByPk(id);
    } catch(error) {
      console.error("Não foi possível listar o fornecedor: ", error);
    }
  }

  async createSupplier(data) {
    try {
      return await SupplierModel.create(data);
    } catch(error) {
      console.error("Não foi possível criar o fornecedor.");
    }
  }
  
  async updateSupplier(id, data) {
    const date = new Date();
    const body = {
      ...data,
      updatedAt: date
    }

    try {
      const result = await SupplierModel.update(body, { where: { id } }); 

      if(result > 0)
        return await SupplierModel.findByPk(id);
    } catch(error) {
      console.error("Não foi possível atualizar o fornecedor: ", error);
    }
  }

  async deleteSupplier(id) {
    try {
      return await SupplierModel.destroy({ where: { id } });
    } catch(error) {
      console.error("Não foi possível apagar o fornecedor: ", error);
    }
  }
}

export default new SupplierRepository();