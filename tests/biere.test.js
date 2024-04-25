const { describe, expect, test } = require("@jest/globals");
const request = require("supertest");
const { app } = require("../app.js");
const { put } = require("../routers/barRouter.js");
const biereUrl = "/biere";

describe("Tests des Requêtes Biere", () => {
  // Fetch Requests

  //----------------------------GET---------------------------//
  test("getBiere", () => {
    return request(app).get(`${biereUrl}/1`).expect(200);
  });

  test("getAllBieres", () => {
    return request(app).get(`${biereUrl}`).expect(200);
  });

  //----------------------------PUT---------------------------//
  test("updateBeer", () => {
    const body = {
      name: "Bière trop chère",
      degree: 4.56,
      price: 330,
      BarId: 2,
    };
    request(app)
      .put(`${biereUrl}/2`)
      .send(body)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(true);
  });

  //---------------------------DELETE---------------------------//
  test("deleteBeer", () => {
    const response = delete `${biereUrl}/4`;
    console.log(response);
    expect(response).toEqual(true);
  });
});
