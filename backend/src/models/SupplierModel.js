import { connection } from "../database/connect.js";
import { DataTypes } from "sequelize";

const SupplierModel = connection.define("Supplier", {
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

export default SupplierModel;