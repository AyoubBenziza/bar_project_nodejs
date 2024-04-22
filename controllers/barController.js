const Bar = require("../models/Bar.js");
const Bierre = require("../models/Biere.js");
const Commande = require("../models/Commande.js");

// Récupère tous les bars
const getBars = (req, res) => {
  Bar.findAll().then((bar) => res.json(bar));
};

// Récupère les caractréristique d'un bar en prenant son id en paramètre
const getBarProfil = (req, res) => {
  Bar.findAll({ where: { id: req.params.barId } }).then((bar) => res.json(bar));
};

// Crée un bar
const addBar = (req, res) => {
  const bar = {
    name: req.body.name,
    description: req.body.description,
    tel: req.body.tel,
    email: req.body.email,
    adresse: req.body.adresse,
  };

  Bar.create(bar).then((queryResult) => res.json(queryResult));
};

// Modifie un bar en prenant en paramètre son id
const editbar = (req, res) => {
  const bar = {
    name: req.body.name,
    description: req.body.description,
    tel: req.body.tel,
    email: req.body.email,
    adresse: req.body.adresse,
  };

  Bar.update(bar, { where: { id: req.params.barId } }).then((queryResult) =>
    res.json(queryResult)
  );
};

// Supprime un bar en prenant en paramètre son id
const deleteBar = (req, res) => {
  Bar.destroy({ where: { id: req.params.barId } }).then(() =>
    res.send("Bar deleted")
  );
};

// Récupère toutes les bières d'un bar
const getAllBeersFromBar = async (req, res) => {
  const bar = await Bar.findByPk(req.params.barId);

  bar
    .getBieres()
    .then((biere) => {
      res.json(biere);
    })
    .catch((err) => {
      res.send(err);
    });
};

// Ajoute une commande dans un bar
const addCommandeIntoBar = (req, res) => {
  console.log(`test`);
  const commande = {
    name: req.body.name,
    price: req.body.price,
    date: req.body.date,
    status: "in progress",
    barId: req.params.barId,
    //le contenu du body + le bar id en champ "barId"
  };
  Commande.create(commande)
    .then((commande) => {
      res.send(commande);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  getBars,
  getBarProfil,
  addBar,
  deleteBar,
  getAllBeersFromBar,
  editbar,
  addCommandeIntoBar,
};
