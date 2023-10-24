import { testServer } from "../jest.setup.js";

describe("Leitura de fornecedor", () => {
  it("precisa listar os fornecedores corretamente", async () => {
    const response1 = await testServer
                      .post("/supplier")
                      .send({name: "Eletrolux"});
    
    expect(response1.statusCode).toEqual(201);
    
    const response2 = await testServer
                      .get("/supplier");
    
    expect(response2.statusCode).toEqual(200);
    expect(response2.body.length).toBeGreaterThan(0);
  });

  it("precisa mostrar o fornecedor quando informado o id correto", async () => {
    const response1 = await testServer
                      .post("/supplier")
                      .send({name: "Estrela"});
    
    expect(response1.statusCode).toEqual(201);

    const response2 = await testServer
                            .get(`/supplier/${response1.body.id}`);
                          
    expect(response2.statusCode).toEqual(200);
  });

  it("precisa mostrar mensagem de erro se for informado o id errado", async () => {
    const response1 = await testServer
                      .post("/supplier")
                      .send({name: "Nike"});

    expect(response1.statusCode).toEqual(201);

    const response2 = await testServer
                      .get("/supplier/999")
                      .send({});
    
    expect(response2.statusCode).toEqual(404);
    expect(response2.body).toEqual({
      message: "Não foi possível encontrar o fornecedor."
    });
  });
});