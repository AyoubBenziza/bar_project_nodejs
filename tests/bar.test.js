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
  //----------------------------GET---------------------------//
  /*test("getBars", async () => {
    const response = await getRequest(`${barUrl}`);
    console.log(response);
    expect(response).toEqual([
      {
        id: 1,
        name: "Payotte",
        tel: "0102030405",
        adresse: "pqhgpqoij",
        email: "irjfehqre@qrguhi.fr",
        description: "iugqhrvopi",
        createdAt: "2024-04-23T13:10:48.648Z",
        updatedAt: "2024-04-23T13:10:48.648Z",
      },
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
  });

  //----------------------------POST---------------------------//
  test("getBarProfil", async () => {
    const response = await getRequest(`${barUrl}/2`);
    console.log(response);
    expect(response).toEqual([
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
  /*
  //----------------------------PUT---------------------------//
  test("updateCommand", async () => {
    const body = {
      name: "ouch",
      price: 330,
      date: "2024-04-25",
      status: "en cours",
      createdAt: "2024-04-23T13:11:22.246Z",
      updatedAt: "2024-04-23T13:11:22.246Z",
      BarId: 1,
    };
    const response = await putRequest(`${commandeUrl}/1`, body);
    console.log(response);
    expect(response).toEqual(body);
  });
  
  //---------------------------DELETE---------------------------//
  test("deleteCommand", async () => {
    const response = await deleteRequest(`${commandeUrl}/4`);
    console.log(response);
    expect(response).toEqual("Suppression de la commande effectué");
  });
  */
  /*
  test("deleteBar", async () => {
    const response = await deleteRequest(`${barUrl}/1`);
    console.log(response);
    expect(response).toEqual("Bar deleted");
  });*/
});
