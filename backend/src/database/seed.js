import CategoryModel from "../models/CategoryModel.js";
import ControlModel from "../models/ControlModel.js";

export const seed = async () => {
  try {
    const control = await ControlModel.findOne({ where: { name: 'seed_executed' } })
    .then(result => {return result})
    .catch(error => console.error("Erro ao acessar a tabela de controle de dados provisionados: ", error));

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
      
      await ControlModel.create({
        name: "seed_executed"
      });

      console.log("Banco de dados provisionado com sucesso.");
    }
  } catch {
    error => console.error("Erro ao provisionar o banco de dados: ", error);
  }
};