import OrderModel from "./OrderModel.js";
import ProductModel from "./ProductModel.js";
import OrderProductModel from "./OrderProductModel.js";
import ProductTypeModel from "./ProductTypeModel.js";
import CategoryModel from "./CategoryModel.js";
import SupplierModel from "./SupplierModel.js";

export const setupAssociations = () => {
  OrderModel.belongsToMany(ProductModel, { through: OrderProductModel });
  ProductModel.belongsToMany(OrderModel, { through: OrderProductModel });
  ProductModel.belongsTo(ProductTypeModel, { as: "productType" });
  ProductTypeModel.belongsTo(CategoryModel, { as: "category" });
  ProductTypeModel.belongsTo(SupplierModel, { as: "supplier" });
};