import { testServer } from "../jest.setup.js";

describe("Exclusão de fornecedor", () => {
  it("precisa excluir um fornecedor quando for fornecido um id certo", async () => {
    const response1 = await testServer.post("/supplier")
                                      .send({
                                        name: "Microsoft"
                                      });

    expect(response1.statusCode).toEqual(201);

    const response2 = await testServer
                      .delete(`/supplier/${response1.body.id}`);
    
    expect(response2.statusCode).toEqual(200);
  });

  it("precisa mostrar mensagem de erro se for passado id errado", async () => {
    const response = await testServer
                      .delete("/supplier/999");

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual({
      message: "Não foi possível apagar o fornecedor."
    });
  });
});