class OrderController {
  listOrders(_, res) {
    res.status(200).send("Listando histórico de ordens");
  }

  listOrder(req, res) {
    res.status(200).send("Mostrando uma ordem por id");
  }

  createOrder(req, res) {
    res.status(201).send("Ordem criada");
  }
}

export default new OrderController();