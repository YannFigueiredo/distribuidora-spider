import { connection } from "../database/connect.js";
import { DataTypes, Model } from "sequelize";

class OrderModel extends Model {}

OrderModel.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM("sale", "purchase"),
      allowNull: false
    }
  },
  {
    sequelize: connection,
    modelName: "Order"
  }
);

export default OrderModel;