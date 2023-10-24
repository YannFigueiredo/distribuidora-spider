import { testServer } from "../jest.setup.js";

describe("Criação de fornecedor", () => {
  it("precisa criar um fornecedor quando forem fornecidos os dados certos", async () => {
    const response = await testServer
                      .post("/supplier")
                      .send({
                        name: "Sony"
                      });
    
    expect(response.statusCode).toEqual(201);
    expect(typeof response.body).toEqual("object");
  });

  it("precisa mostrar mensagem de erro se não for passado algum dado obrigatório", async () => {
    const response = await testServer
                      .post("/supplier")
                      .send({});
    
    expect(response.statusCode).toEqual(400);
    expect(response.body).toHaveProperty("errors.body.name");
  });
});