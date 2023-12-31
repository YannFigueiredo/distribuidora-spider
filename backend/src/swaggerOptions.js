import swaggerJSDoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Distribuidora Spider API",
      version: "1.0.0",
      description: "Documentação da API do projeto Distribuidora Spider. A base URL é https://distribuidora-spider-api.onrender.com."
    },
    servers: [
      {
        url: "https://distribuidora-spider-api.onrender.com",
        description: "Base URL"
      }
    ]
  },
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;

