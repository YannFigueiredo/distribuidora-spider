import supertest from "supertest";
import app from "..";

export const testServer = supertest(app);