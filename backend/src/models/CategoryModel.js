import { connection } from "../database/connect.js";
import { DataTypes } from "sequelize";

const CategoryModel = connection.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default CategoryModel;