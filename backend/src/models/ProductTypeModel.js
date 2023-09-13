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
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: CategoryModel,
      key: "id"
    }
  },
  supplierId: {
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

  ProductTypeModel.belongsTo(CategoryModel, { foreignKey: "categoryId" });
  ProductTypeModel.belongsTo(SupplierModel, { foreignKey: "supplierId" });
};

init();

export default ProductTypeModel;
