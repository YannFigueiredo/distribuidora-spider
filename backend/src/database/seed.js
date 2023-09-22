import CategoryModel from "../models/CategoryModel.js";
import ControlModel from "../models/ControlModel.js";
import SupplierModel from "../models/SupplierModel.js";
import ProductTypeModel from "../models/ProductTypeModel.js";

export const seed = async () => {
  const control = await ControlModel.findOne({ where: { name: 'seed_executed' } });
  
  try {
    if(!control) {
      await CategoryModel.create({
        name: "Video-Game"
      });
  
      await CategoryModel.create({
        name: "Brinquedo"
      });
  
      await CategoryModel.create({
        name: "Eletrodoméstico"
      });
  
      await CategoryModel.create({
        name: "Televisão"
      });
  
      await CategoryModel.create({
        name: "Roupa"
      });

      await SupplierModel.create({
        name: "Sony"
      });

      await SupplierModel.create({
        name: "Samsung"
      });

      await SupplierModel.create({
        name: "Nike"
      });

      await SupplierModel.create({
        name: "Electrolux"
      });

      await SupplierModel.create({
        name: "Estrela"
      });

      await ProductTypeModel.create({
        name: "Playstation 5"
      });

      await ProductTypeModel.create({
        name: "Jogo de Tabuleiro"
      });

      await ProductTypeModel.create({
        name: "Smart TV"
      });

      await ProductTypeModel.create({
        name: "Geladeira"
      });

      await ControlModel.create({
        name: "seed_executed"
      });

      console.log("Banco de dados provisionado com sucesso.");
    }
  } catch(error) {
    console.error("Erro ao provisionar o banco de dados: ", error);
  }
};