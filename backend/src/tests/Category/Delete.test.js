import { testServer } from "../jest.setup.js";

describe("Exclusão de categoria", () => {
  it("precisa excluir uma categoria quando for fornecido um id certo", async () => {
    const response1 = await testServer.post("/category")
                                      .send({
                                        name: "Informática"
                                      });

    expect(response1.statusCode).toEqual(201);

    const response2 = await testServer
                      .delete(`/category/${response1.body.id}`);
    
    expect(response2.statusCode).toEqual(200);
  });

  it("precisa mostrar mensagem de erro se for passado id errado", async () => {
    const response = await testServer
                      .delete("/category/999");

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual({
      message: "Não foi possível apagar a categoria."
    });
  });
});