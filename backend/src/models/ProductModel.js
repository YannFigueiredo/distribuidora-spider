import { connection } from "../database/connect.js";
import { DataTypes } from "sequelize";
import ProductTypeModel from "./ProductTypeModel.js";

const ProductModel = connection.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  register: {
    type: DataTypes.DATE,
    allowNull: false
  },
  sale: {
    type: DataTypes.DATE,
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
  }
});

const init = async () => {
  let ProductTypeModel = (await import("./ProductTypeModel.js")).default;

  ProductModel.belongsTo(ProductTypeModel, { foreignKey: "productType" });
};

init();

export default ProductModel;