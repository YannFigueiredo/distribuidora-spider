class ProductTypeController {
  listProductsTypes(_, res) {
    res.status(200).send("listados tipos de produtos");
  }

  listProductType(req, res) {
    res.status(200).send("listado tipo de produto");
  }

  createProductType(req, res) {
    res.status(201).send("criado tipo de produto");
  }

  updateProductType(req, res) {
    res.status(200).send("atualizado tipo de produto");
  }

  deleteProductType(req, res) {
    res.status(200).send("deletado tipo de produto");
  }
}

export default new ProductTypeController();