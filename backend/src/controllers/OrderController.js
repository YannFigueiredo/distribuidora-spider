import OrderRepository from "../repositories/OrderRepository.js";
import { validation } from "../middleware/Validation.js";
import * as yup from "yup";

class OrderController {
  createValidation = validation({
    body: yup.object({
      value: yup.number().positive().required(),
      date: yup.date().default(() => new Date()),
      type: yup.string().required()
    })
  });

  updateValidation = validation({
    body: yup.object({
      value: yup.number().positive(),
      date: yup.date(),
      type: yup.string()
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

  async listOrders(_, res) {
    try {
      const result = await OrderRepository.getOrder();

      if(result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({message: `Não foi possível encontrar as ordens.`})
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao listar as ordens: ${error}`});
    }
  }

  async listOrder(req, res) {
    try {
      const result = await OrderRepository.getOrderById(req.params.id);

      if(result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({message: `Não foi possível encontrar a ordem.`})
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao listar a ordem: ${error}`});
    }
  }

  async createOrder(req, res) {
    try {
      const result = await OrderRepository.createOrder(req.body);

      if(result) {
        res.status(201).json(result);
      } else {
        res.status(400).json({message: "Não foi possível criar a ordem."});
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao criar a ordem: ${error}`});
    }
  }

  async updateOrder(req, res) {
    try {
      const result = await OrderRepository.updateOrder(req.params.id, req.body);

      if(result) {
        res.status(200).json(result);
      } else {
        res.status(400).json({message: "Não foi possível atualizar a ordem."});
      }
    } catch(error) {
      res.status(400).json({message: `Ocorreu um erro ao atualizar a ordem: ${error}`});
    }
  }

  async deleteOrder(req, res) {
    try {
      const result = await OrderRepository.deleteOrder(req.params.id);

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

export default new OrderController();