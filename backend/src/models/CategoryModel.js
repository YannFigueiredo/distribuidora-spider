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

const init = async () => {
  let ProductTypeModel = (await import("./ProductTypeModel.js")).default;

  CategoryModel.hasMany(ProductTypeModel, { foreignKey: "category" });
};

init();

export default CategoryModel;