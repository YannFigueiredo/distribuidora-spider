import mysql2 from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql2.createPool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

const connect = async () => {
  try {
    const connectionStatus = await connection.getConnection();

    console.log("Banco de dados conectado com sucesso!");

    connectionStatus.release();
  } catch(e) {
    console.log("Erro ao conectar no banco de dados: ", e);
  }
};

export default connect;