import { connection } from "../database/connect.js";
import { DataTypes, Model } from "sequelize";

class ProductTypeModel extends Model {} 

ProductTypeModel.init(
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
    value: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    sequelize: connection,
    modelName: "Product_Type"
  }
);

export default ProductTypeModel;
