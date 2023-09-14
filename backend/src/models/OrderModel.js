import { connection } from "../database/connect.js";
import { DataTypes } from "sequelize";

const OrderModel = connection.define("Order", {
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
});

const init = async () => {
  let ProductModel = (await import("./ProductModel.js")).default;

  OrderModel.hasMany(ProductModel, { foreignKey: "order" })
};

init();

export default OrderModel;