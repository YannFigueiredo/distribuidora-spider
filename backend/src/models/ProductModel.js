import { connection } from "../database/connect.js";
import { DataTypes } from "sequelize";
import ProductTypeModel from "./ProductTypeModel.js";
import OrderModel from "./OrderModel.js";

const ProductModel = connection.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  batch: {
    type: DataTypes.STRING,
    allowNull: false
  },
  productType: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      name: ProductTypeModel,
      key: "id"
    }
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      name: OrderModel,
      key: "id"
    }
  }
});

const init = async () => {
  let ProductTypeModel = (await import("./ProductTypeModel.js")).default;
  let OrderModel = (await import("./OrderModel.js")).default;

  ProductModel.belongsTo(ProductTypeModel, { foreignKey: "productType" });
  ProductModel.belongsTo(OrderModel, { foreignKey: "order" });
};

init();

export default ProductModel;