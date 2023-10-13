import { testServer } from "../jest.setup.js";

describe("Criação de categoria", () => {
  it("precisa criar uma categoria quando forem fornecidos os dados certos", async () => {
    const response = await testServer
                      .post("/category")
                      .send({
                        name: "Informática"
                      });
    
    expect(response.statusCode).toEqual(201);
  });
});