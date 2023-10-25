import { testServer } from "../jest.setup.js";

describe("Atualização de fornecedor", () => {
  it("precisa atualizar um fornecedor quando forem fornecidos id e dados certos", async () => {
    const response1 = await testServer.post("/supplier")
                                      .send({
                                        name: "Adidas"
                                      });

    expect(response1.statusCode).toEqual(201);
    
    const response2 = await testServer
                      .patch(`/supplier/${response1.body.id}`)
                      .send({
                        name: "Puma"
                      });
    
    expect(response2.statusCode).toEqual(200);
  });

  it("precisa mostrar mensagem de erro se for passado id errado", async () => {
    const response = await testServer
                      .patch("/supplier/999")
                      .send({});
    
    expect(response.statusCode).toEqual(404);
    expect(response.body).toEqual({
      message: "Não foi possível atualizar o fornecedor."
    });
  });
});