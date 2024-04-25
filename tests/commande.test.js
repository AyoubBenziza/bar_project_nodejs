const { describe, expect, test } = require("@jest/globals");
const request = require("supertest");
const { app } = require("../app.js");
const axios = require("axios");
const commandeUrl = "/commande";

describe("Tests des Requêtes Commande", () => {
  // Fetch Requests

  //----------------------------GET---------------------------//
  test("getCommand", async () => {
    const response = await request(app).get(`${commandeUrl}/1`);
    expect(response.statusCode).toBe(200);
  });

  // //----------------------------POST---------------------------//
  // test("addBeer", async () => {
  //   const response = await deleteRequest(`${commandeUrl}/4`);
  //   console.log(response);
  //   expect(response).toEqual("Ajout de Bière effectué");
  // });

  // //----------------------------PUT---------------------------//
  // test("updateCommand", async () => {
  //   const body = {
  //     name: "ouch",
  //     price: 330,
  //     date: "2024-04-25",
  //     status: "en cours",
  //     createdAt: "2024-04-23T13:11:22.246Z",
  //     updatedAt: "2024-04-23T13:11:22.246Z",
  //     BarId: 1,
  //   };
  //   const response = await putRequest(`${commandeUrl}/1`, body);
  //   console.log(response);
  //   expect(response).toEqual(body);
  // });

  // //---------------------------DELETE---------------------------//
  // test("deleteCommand", async () => {
  //   const response = await deleteRequest(`${commandeUrl}/4`);
  //   console.log(response);
  //   expect(response).toEqual("Suppression de la commande effectué");
  // });

  // test("deleteBeer", async () => {
  //   const response = await deleteRequest(`${commandeUrl}/1/biere/4`);
  //   console.log(response);
  //   expect(response).toEqual("Supression de la bière effectuée");
  // });
});
