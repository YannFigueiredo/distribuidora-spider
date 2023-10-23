import { testServer } from "../jest.setup.js";

describe("Atualização de categoria", () => {
  it("precisa atualizar uma categoria quando forem fornecidos id e dados certos", async () => {
    const response1 = await testServer.post("/category")
                                      .send({
                                        name: "Livro"
                                      });

    expect(response1.statusCode).toEqual(201);
    
    const response2 = await testServer
                      .patch(`/category/${response1.body.id}`)
                      .send({
                        name: "Smartphone"
                      });
    
    expect(response2.statusCode).toEqual(200);
  });

  it("precisa mostrar mensagem de erro se for passado id errado", async () => {
    const response = await testServer
                      .patch("/category/999")
                      .send({});
    
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual({
      message: "Não foi possível atualizar a categoria."
    });
  });
});