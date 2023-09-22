import { connection } from "../database/connect.js";
import { DataTypes, Model } from "sequelize";

class CategoryModel extends Model {} 

CategoryModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "O nome da categoria precisa ser informado!" },
        isAlphanumeric: { msg: "O nome da categoria precisa ser um texto alfanumérico!" }
      }
    }
  },
  {
    sequelize: connection,
    modelName: "Category"
  }
);

export default CategoryModel;