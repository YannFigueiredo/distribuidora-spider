import express from "express";
import productTypeRouter from "./routes/ProductTypeRoutes.js";
import productRouter from "./routes/ProductRoutes.js";
import categoryRouter from "./routes/CategoryRoutes.js";
import supplierRouter from "./routes/SupplierRoutes.js";
import { testConnection } from "./database/connect.js";
import ProductModel from "./models/ProductModel.js";
import ProductTypeModel from "./models/ProductTypeModel.js";
import CategoryModel from "./models/CategoryModel.js";
import SupplierModel from "./models/SupplierModel.js";

const app = express();

app.use(express.json());

app.use(productTypeRouter);
app.use(productRouter);
app.use(categoryRouter);
app.use(supplierRouter);

testConnection();

try {
  ProductModel.sync();
  ProductTypeModel.sync();
  CategoryModel.sync();
  SupplierModel.sync();

  console.log("Banco de dados sincronizado!");
} catch(error) {
  console.error("Falha na sincronização do banco de dados: ", error);
}

export default app;