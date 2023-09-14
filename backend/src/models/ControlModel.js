import { connection } from "../database/connect.js";
import { DataTypes } from "sequelize";

const ControlModel = connection.define("Control", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default ControlModel;