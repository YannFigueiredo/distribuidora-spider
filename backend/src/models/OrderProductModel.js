import { connection } from "../database/connect.js";
import { DataTypes, Model } from "sequelize";

class OrderProductModel extends Model {}

OrderProductModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  },
  {
    sequelize: connection,
    modelName: "Order_Product"
  }
);

export default OrderProductModel;