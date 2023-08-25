class SupplierController {
  listSuppliers(_, res) {
    res.status(200).send("listados fornecedores");
  }

  listSupplier(req, res) {
    res.status(200).send("listado fornecedor");
  }

  createSupplier(req, res) {
    res.status(201).send("criado fornecedor");
  }

  updateSupplier(req, res) {
    res.status(200).send("atualizado fornecedor");
  }

  deleteSupplier(req, res) {
    res.status(200).send("deletado fornecedor");
  }
}

export default new SupplierController();