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
      allowNull: false,
      validate: {
        notEmpty: { msg: "O valor da transação precisa ser informado!" },
        isFloat: { msg: "O valor da transação precisa ser um número de ponto flutuante!" }
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: { msg: "A data da transação precisa ser informada!" },
        isDate: { msg: "A data precisa precisa estar no formato de data!" }
      }
    },
    type: {
      type: DataTypes.ENUM("sale", "purchase"),
      allowNull: false,
      validate: {
        notEmpty: { msg: "O tipo da transação precisa ser informado!" },
        isIn: {
          args: [["sale", "purchase"]],
          msg: "O tipo precisa ser 'sale', que é a venda, ou 'purchase', que é a compra!"
        }
      }
    }
  },
  {
    sequelize: connection,
    modelName: "Order"
  }
);

export default OrderModel;