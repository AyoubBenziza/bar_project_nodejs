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
const addBar = async (req, res) => {
  const [bar, created] = await Bar.findOrCreate({
    where: { name: req.body.name.trim() },
    defaults: {
      description: req.body.description,
      tel: req.body.tel,
      email: req.body.email,
      adresse: req.body.adresse,
    },
  });
  if (created) {
    res.send("Le bar est créé");
  } else {
    res.send("Le nom est déja utilisé");
  }
};

// Modifie un bar en prenant en paramètre son id
const editbar = async (req, res) => {
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
  console.log(`test`);
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

const addCommandeIntoBar = async (req, res) => {
  const commande = Commande.create({
    name: req.body.name,
    price: req.body.price,
    date: new Date(Date.now()),
    status: "in progress",
  });

  const bar = await Bar.findByPk(req.params.barId);
  bar
    .addCommande(commande, { include: Commande })
    .then((com) => {
      res.json(com);
    })
    .catch((err) => {
      res.send(err.message);
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
