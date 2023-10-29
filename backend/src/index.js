import express from "express";
import productTypeRouter from "./routes/ProductTypeRoutes.js";
import productRouter from "./routes/ProductRoutes.js";
import categoryRouter from "./routes/CategoryRoutes.js";
import supplierRouter from "./routes/SupplierRoutes.js";
import orderRouter from "./routes/OrderRoutes.js";
import { testConnection } from "./database/connect.js";
import ProductModel from "./models/ProductModel.js";
import ProductTypeModel from "./models/ProductTypeModel.js";
import CategoryModel from "./models/CategoryModel.js";
import SupplierModel from "./models/SupplierModel.js";
import OrderModel from "./models/OrderModel.js";
import ControlModel from "./models/ControlModel.js";
import OrderProductModel from "./models/OrderProductModel.js";
import { seed } from "./database/seed.js";
import { setupAssociations } from "./database/associations.js";
import "./shared/services/TranslationsYup.js";
import swaggerUiExpress from "swagger-ui-express";
import swaggerSpec from "./swaggerOptions.js";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec));

app.use(productTypeRouter);
app.use(productRouter);
app.use(categoryRouter);
app.use(supplierRouter);
app.use(orderRouter);

if(process.env.NODE_ENV !== "test") {
  testConnection();
  
  (async () => {
    try {
      await ControlModel.sync({ force: true });
      await CategoryModel.sync({ force: true });
      await SupplierModel.sync({ force: true });
      await ProductTypeModel.sync({ force: true });
      await ProductModel.sync({ force: true });
      await OrderModel.sync({ force: true });
      await OrderProductModel.sync({ force: true });
  
      console.log("Banco de dados sincronizado!");
      
      try {
        setupAssociations();
      } catch(error) {
        console.error("Falha na configuração de associações das tabelas do banco de dados: ", error);
      } 
      
      await seed();
    } catch(error) {
      console.error("Falha na sincronização do banco de dados: ", error);
    }
  })();
}

export default app;