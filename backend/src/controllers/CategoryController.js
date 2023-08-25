class CategoryController {
  listCategories(_, res) {
    res.status(200).send("listados categorias");
  }

  listCategory(req, res) {
    res.status(200).send("listado categoria");
  }

  createCategory(req, res) {
    res.status(201).send("criado categoria");
  }

  updateCategory(req, res) {
    res.status(200).send("atualizado categoria");
  }

  deleteCategory(req, res) {
    res.status(200).send("deletado categoria");
  }
}

export default new CategoryController();