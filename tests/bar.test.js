const { describe, expect, test } = require("@jest/globals");
const axios = require("axios");
const barUrl = "http://localhost:3000/bar";

describe("Tests des Requêtes Bar", () => {
  // Fetch Requests
  const getRequest = async (url) => {
    const response = await axios.get(url);

    return response.data;
  };

  const postRequest = async (url) => {
    const response = await axios.post(url);

    return response.data;
  };

  const putRequest = async (url) => {
    const response = await axios.put(url);

    return response.data;
  };

  const deleteRequest = async (url) => {
    const response = await axios.delete(url);

    return response.data;
  };

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

  test("addBar", async () => {
    const body = {
      name: "Payotte",
      tel: "0102030405",
      adresse: "pqhgpqoij",
      email: "irjfehqre@qrguhi.fr",
      description: "iugqhrvopi",
    };
    const response = await postRequest(`${barUrl}`, body);
    console.log(response);
    expect(response).toEqual("Le bar est créé");
  });
});
