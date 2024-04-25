const { describe, expect, test } = require("@jest/globals");
const request = require("supertest");
const { app } = require("../app.js");
const barUrl = "/bar";

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

describe("Tests des Requêtes Bar", () => {
  // Fetch Requests
  //----------------------------GET---------------------------//
  /*test("getBars", () => {
    return request(app)
      .get(`${barUrl}/2`)
      .expect([
        {
          id: 2,
          name: "Est West",
          tel: "0203040506",
          adresse: "20 route de Lyon",
          email: "jgefvopqij@gfj.fr",
          description: "bar à bierre",
          createdAt: "2024-04-24T08:57:37.484Z",
          updatedAt: "2024-04-24T08:57:37.484Z",
        },
      ]);
  });*/
  /*test("getBarProfil", () => {
    return request(app)
      .get(`${barUrl}/2`)
      .expect([
        {
          id: 2,
          name: "Est West",
          tel: "0203040506",
          adresse: "20 route de Lyon",
          email: "jgefvopqij@gfj.fr",
          description: "bar à bierre",
          createdAt: "2024-04-24T08:57:37.484Z",
          updatedAt: "2024-04-24T08:57:37.484Z",
        },
      ]);
  });*/
  // //----------------------------POST---------------------------//
  /*test("addBar", () => {
    const body = {
      name: "Lebar",
      tel: "0102030405",
      adresse: "pqhgpqoij",
      email: "irjfehqre@qrguhi.fr",
      description: "iugqhrvopi",
    };
    return request(app)
      .post(`${barUrl}`)
      .send(body)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(`Le bar est créé`);
  });*/

  /*test("addCommandIntoBar", () => {
    const body = {
      name: "commande 1",
      price: 5,
    };
    return request(app)
      .post(`${barUrl}/2/commande`)
      .send(body)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect("test");
  });*/

  // //----------------------------PUT---------------------------//
  test("editBar", () => {
    const body = {
      name: "Est West",
      description: "bar à bierre",
      tel: "010203d0405",
      email: "jgefvopqij@gfj.fr",
      adresse: "20 route de Poitiers",
    };
    return request(app).put(`${barUrl}/2`).send(body).expect(200);
  });
  // //---------------------------DELETE---------------------------//
  /*test("deleteBar", () => {
    return request(app).delete(`${barUrl}/2`).expect("Bar deleted");
  });*/
});
