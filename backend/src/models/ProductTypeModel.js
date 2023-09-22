import { connection } from "../database/connect.js";
import { DataTypes, Model } from "sequelize";

class ProductTypeModel extends Model {} 

ProductTypeModel.init(
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
        notEmpty: { msg: "O nome do tipo de produto precisa ser informado!" },
        isAlphanumeric: { msg: "O nome do tipo de produto precisa ser um texto alfanumérico!" }
      }
    }
  },
  {
    sequelize: connection,
    modelName: "Product_Type"
  }
);

export default ProductTypeModel;
