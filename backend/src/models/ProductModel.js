import { connection } from "../database/connect.js";
import { DataTypes, Model } from "sequelize";

class ProductModel extends Model {} 

ProductModel.init(
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
        notEmpty: { msg: "O nome do produto precisa ser preenchido!" },
        isAlphanumeric: { msg: "O nome do produto precisa ser um texto alfanumérico!" }
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: "A quantidade do produto precisa ser informada!" },
        isInt: { msg: "A quantidade precisa ser um número inteiro!" }
      }
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "O valor do produto precisa ser informado!" },
        isFloat: { msg: "O valor precisa ser um número de ponto flutuante!" }
      }
    },
    batch: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "O lote do produto precisa ser informado!" },
        isAlphanumeric: { msg: "A identificação do lote do produto precisa ser um texto alfanumérico!" }
      }
    }
  },
  {
    sequelize: connection,
    modelName: "Product"
  }
);

export default ProductModel;