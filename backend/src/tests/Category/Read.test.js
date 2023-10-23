import { testServer } from "../jest.setup.js";

describe("Leitura de categoria", () => {
  it("precisa listar as categorias corretamente", async () => {
    const response1 = await testServer
                      .post("/category")
                      .send({name: "Eletrônicos"});
    
    expect(response1.statusCode).toEqual(201);
    
    const response2 = await testServer
                      .get("/category");
    
    expect(response2.statusCode).toEqual(200);
    expect(response2.body.length).toBeGreaterThan(0);
  });

  it("precisa mostrar a categoria quando informado o id correto", async () => {
    const response1 = await testServer
                      .post("/category")
                      .send({name: "Informática"});
    
    expect(response1.statusCode).toEqual(201);

    const response2 = await testServer
                            .get(`/category/${response1.body.id}`);
                          
    expect(response2.statusCode).toEqual(200);
  });

  it("precisa mostrar mensagem de erro se for informado o id errado", async () => {
    const response1 = await testServer
                      .post("/category")
                      .send({name: "Videogame"});

    expect(response1.statusCode).toEqual(201);

    const response2 = await testServer
                      .get("/category/999")
                      .send({});
    
    expect(response2.statusCode).toEqual(404);
    expect(response2.body).toEqual({
      message: "Não foi possível encontrar a categoria."
    });
  });
});