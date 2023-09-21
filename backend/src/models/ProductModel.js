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
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    batch: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    modelName: "Product"
  }
);

export default ProductModel;