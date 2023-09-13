import { connection } from "../database/connect.js";
import { DataTypes } from "sequelize";
import CategoryModel from "./CategoryModel.js";
import SupplierModel from "./SupplierModel.js";

const ProductTypeModel = connection.define("Product_Type", {
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
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  category: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: CategoryModel,
      key: "id"
    }
  },
  supplier: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: SupplierModel,
      key: "id"
    }
  }
});

const init = async () => {
  let CategoryModel = (await import("./CategoryModel.js")).default;
  let SupplierModel = (await import("./SupplierModel.js")).default;
  let ProductModel = (await import("./ProductModel.js")).default;

  ProductTypeModel.belongsTo(CategoryModel, { foreignKey: "category" });
  ProductTypeModel.belongsTo(SupplierModel, { foreignKey: "supplier" });
  ProductTypeModel.hasMany(ProductModel, { foreignKey: "productType" });
};

init();

export default ProductTypeModel;
