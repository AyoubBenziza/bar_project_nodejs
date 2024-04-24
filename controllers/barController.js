const Bar = require("../models/Bar.js");
const Biere = require("../models/Biere.js");
const Commande = require("../models/Commande.js");
const { Op, fn, col } = require("sequelize");

// Récupère tous les bars
const getBars = (req, res) => {
  if (req.query === null) {
    Bar.findAll({
      where: {
        [Op.or]: {
          adresse: { [Op.endsWith]: req.query.ville },
          name: { [Op.substring]: req.query.name },
        },
      },
    }).then((bar) => res.json(bar));
  } else {
    Bar.findAll().then((bar) => res.json(bar));
  }
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
  const bar = await Bar.findByPk(req.params.barId);
  const order = req.query.sort;
  const limit = req.query.limit;
  const offset = req.query.offset;
  const degree_min = req.query.degree_min;
  const degree_max = req.query.degree_max;
  console.log(`degree min : ${degree_min} et degree max : ${degree_max}`);

  bar
    .getBieres({
      where: {
        degree: {
          [Op.between]: [degree_min, degree_max],
        },
      },
      limit: limit,
      offset: offset,
      order: [["name", order]],
    })
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
    date: new Date(),
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

//Obtient le degré d'alcool moyen des bières d'un bars
const averageDegreeFromBar = async (req, res) => {
  const { prix_min, prix_max } = req.query;

  if (prix_min && prix_max) {
    Biere.findAll({
      where: {
        barId: req.params.barId,
        price: {
          [Op.between]: [prix_min, prix_max],
        },
      },
      attributes: [[fn("AVG", col("degree")), "avDegree"]],
    })
      .then((avgDegree) => {
        res.json(avgDegree);
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    Biere.findAll({
      where: {
        barId: req.params.barId,
      },
      attributes: [[fn("AVG", col("degree")), "avDegree"]],
    })
      .then((avgDegree) => {
        res.json(avgDegree);
      })
      .catch((err) => {
        res.send(err);
      });
  }
};
const getCommande = (req, res) => {
  // Recherche toutes les commandes à une date donné
  const dateChoice = req.query.date;

  // Recherche toutes les commandes entre un prix mini et max
  const prix_min = req.query.prix_min;
  const prix_max = req.query.prix_max;

  Commande.findAll({
    where: {
      [Op.or]: {
        price: {
          [Op.between]: [prix_min, prix_max],
        },
        date: new Date(dateChoice),
      },
    },
  }).then((com) => res.json(com));
};

module.exports = {
  getBars,
  getBarProfil,
  addBar,
  deleteBar,
  getAllBeersFromBar,
  editbar,
  addCommandeIntoBar,
  averageDegreeFromBar,
  getCommande,
};
