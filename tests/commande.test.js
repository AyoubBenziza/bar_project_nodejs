// Imports
const request = require("supertest");
const { app } = require("../app.js");
const db = require("../config/database.js");
const commandeUrl = "/commande";
const {
  afterAll,
  beforeAll,
  describe,
  expect,
  test,
} = require("@jest/globals");

describe("Tests des Requêtes Commande", () => {
  // Database Configuration
  let t = undefined;
  beforeAll(async () => {
    try {
      await db.authenticate();
      console.log("Connected to database successfully...");
    } catch (error) {
      throw new Error("Unable to connect to database...");
    }
  });
  beforeEach(async () => {
    t = await db.transaction();
  });

  afterEach(() => {
    t.rollback();
  });

  afterAll(() => {
    db.close();
  });

  // Fetch Requests

  //----------------------------GET---------------------------//
  test("getCommand", () => {
    const format = {
      id: 1,
      name: "aie",
      price: 256,
      status: "en cours",
    };

    return request(app)
      .get(`${commandeUrl}/1`)
      .expect(200)
      .then((data) => {
        const response = JSON.parse(data.text);
        expect(response).toMatchObject(format);
      });
  });
  test("getDetailsPDF", () => {
    return request(app).get(`${commandeUrl}/details/1`).expect(200);
  });

  //----------------------------POST---------------------------//
  test("addBeer", async () => {
    return request(app)
      .post(`${commandeUrl}/1/biere/5`)
      .expect(200)
      .then((data) => {
        const response = data.text;
        expect(response).toEqual("Ajout de Bière effectué");
      });
  });

  //----------------------------PUT---------------------------//
  test("updateCommand", async () => {
    const body = {
      name: "ouch",
      price: 330,
      status: "en cours",
    };

    return request(app).put(`${commandeUrl}/1`).send(body).expect(200);
  });

  //---------------------------DELETE---------------------------//
  test("deleteBeer", async () => {
    return request(app)
      .delete(`${commandeUrl}/3/biere/5`)
      .expect(200)
      .then((data) => {
        const response = data.text;
        expect(response).toEqual("Suppression de la bière effectuée");
      });
  });
  test("deleteCommand", async () => {
    return request(app)
      .delete(`${commandeUrl}/4`)
      .expect(200)
      .then((data) => {
        const response = data.text;
        expect(response).toEqual("Suppression de la commande effectuée");
      });
  });
});
