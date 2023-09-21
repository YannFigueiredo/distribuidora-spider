import OrderModel from "../models/OrderModel.js";
import ProductModel from "../models/ProductModel.js";
import OrderProductModel from "../models/OrderProductModel.js";
import ProductTypeModel from "../models/ProductTypeModel.js";
import CategoryModel from "../models/CategoryModel.js";
import SupplierModel from "../models/SupplierModel.js";

export const setupAssociations = () => {
  OrderModel.belongsToMany(ProductModel, { through: OrderProductModel, onDelete: "CASCADE", onUpdate: "CASCADE" });
  ProductModel.belongsToMany(OrderModel, { through: OrderProductModel, onDelete: "CASCADE", onUpdate: "CASCADE" });
  ProductModel.belongsTo(ProductTypeModel, { as: "productType", onDelete: "RESTRICT" });
  ProductTypeModel.belongsTo(CategoryModel, { as: "category" });
  ProductTypeModel.belongsTo(SupplierModel, { as: "supplier" });
};