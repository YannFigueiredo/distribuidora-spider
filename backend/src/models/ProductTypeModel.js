import { connection } from "../database/connect.js";
import { DataTypes } from "sequelize";

const ProductTypeModel = connection.define("Product_Type", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoInCrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  value: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default ProductTypeModel;

