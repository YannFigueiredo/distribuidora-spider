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
      allowNull: false
    }
  },
  {
    sequelize: connection,
    modelName: "Supplier"
  }
);

export default SupplierModel;