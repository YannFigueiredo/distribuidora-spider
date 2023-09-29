import OrderProductRepository from "../repositories/OrderProductRepository.js";

class OrderProductController {
  async listOrdersProduct(_, res) {
    try {
      const result = await OrderProductRepository.getOrder();

      if(result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({message: `Não foi possível encontrar as ordens.`})
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao listar as ordens: ${error}`});
    }
  }

  async listOrderProduct(req, res) {
    try {
      const result = await OrderProductRepository.getOrderProductById(req.params.id);

      if(result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({message: `Não foi possível encontrar a ordem.`})
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao listar a ordem: ${error}`});
    }
  }

  async createOrderProduct(req, res) {
    try {
      const result = await OrderProductRepository.createOrderProduct(req.body);

      if(result) {
        res.status(201).json(result);
      } else {
        res.status(400).json({message: "Não foi possível criar a ordem."});
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao criar a ordem: ${error}`});
    }
  }

  async updateOrderProduct(req, res) {
    try {
      const result = await OrderProductRepository.updateOrderProduct(req.params.id, req.body);

      if(result) {
        res.status(200).json(result);
      } else {
        res.status(400).json({message: "Não foi possível atualizar a ordem."});
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao atualizar a ordem: ${error}`});
    }
  }

  async deleteOrderProduct(req, res) {
    try {
      const result = await OrderProductRepository.deleteOrderProduct(req.params.id);

      if(result) {
        res.status(200).json({message: "Ordem apagada com sucesso."});
      } else {
        res.status(400).json({message: "Não foi possível apagar a ordem."});
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao apagar a ordem: ${error}`});
    }
  }
}

export default new OrderProductController();