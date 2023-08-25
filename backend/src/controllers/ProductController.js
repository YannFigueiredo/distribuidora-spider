class ProductController {
  listProducts(_, res) {
    res.status(200).send("listados produtos");
  }

  listProduct(req, res) {
    res.status(200).send(`listado produto com id ${req.params.id}`);
  }

  createProduct(req, res) {
    res.status(201).send("criado produto");
  }

  updateProduct(req, res) {
    res.status(200).send("atualizado produto");
  }

  deleteProduct(req, res) {
    res.status(200).send("deletado produto");
  }
}

export default new ProductController();