import OrderModel from "./OrderModel.js";
import ProductModel from "./ProductModel.js";
import OrderProductModel from "./OrderProductModel.js";
import ProductTypeModel from "./ProductTypeModel.js";
import CategoryModel from "./CategoryModel.js";
import SupplierModel from "./SupplierModel.js";

export const setupAssociations = () => {
  OrderModel.belongsToMany(ProductModel, { through: OrderProductModel, onDelete: "CASCADE", onUpdate: "CASCADE" });
  ProductModel.belongsToMany(OrderModel, { through: OrderProductModel, onDelete: "CASCADE", onUpdate: "CASCADE" });
  ProductModel.belongsTo(ProductTypeModel, { as: "productType", onDelete: "RESTRICT" });
  ProductTypeModel.belongsTo(CategoryModel, { as: "category" });
  ProductTypeModel.belongsTo(SupplierModel, { as: "supplier" });
};