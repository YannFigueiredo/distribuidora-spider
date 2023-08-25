import { connection } from "../database/connect.js";
import { DataTypes } from "sequelize";

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
  }
});

export default ProductModel;