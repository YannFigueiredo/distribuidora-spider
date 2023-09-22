import { connection } from "../database/connect.js";
import { DataTypes, Model } from "sequelize";

class SupplierModel extends Model {}

SupplierModel.init(
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
        notEmpty: "O nome da categoria precisa ser informada!",
        isAlphanumeric: { msg: "O nome do fornecedor precisa ser um texto alfanumérico!" }
      }
    }
  },
  {
    sequelize: connection,
    modelName: "Supplier"
  }
);

export default SupplierModel;