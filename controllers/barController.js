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
  const {
    degree_min,
    degree_max,
    /* prix_min, prix_max, */ offset,
    limit,
    sort,
  } = req.query;
  console.log(`order : ${sort}`);
  const where = {};
  const options = {
    where,
    limit: limit,
    offset: offset,
  };
  if (degree_min && degree_max) {
    where.degree = { [Op.between]: [degree_min, degree_max] };
  }
  if (sort) {
    options.order = [["name", sort]];
  }

  const bar = await Bar.findByPk(req.params.barId);

  bar
    .getBieres(options)
    .then((biere) => {
      res.json(biere);
    })
    .catch((err) => {
      res.send(err);
    });
};

// Ajoute une commande dans un bar
const addCommandeIntoBar = async (req, res) => {
  console.log(`test`);
  const commande = Commande.create({
    name: req.body.name,
    price: req.body.price,
    date: new Date(),
    status: "en cours",
    BarId: req.params.barId,
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
  const { date, prix_min, prix_max } = req.query;
  const where = { barId: req.params.barId };
  const include = { model: Commande };

  if (prix_min && prix_max) {
    where.price = { [Op.between]: [prix_min, prix_max] };
  }
  if (date) {
    include.where = { date: new Date(date) };
  }
  Biere.findAll({
    where,
    include,
    attributes: [[fn("AVG", col("degree")), "avDegree"]],
  })
    .then((avgDegree) => {
      res.json(avgDegree);
    })
    .catch((err) => {
      res.send(err);
    });
};
const getFilterCommand = (req, res) => {
  const { date, prix_min, prix_max, status, name } = req.query;
  const contentWhere = {};

  if (status) {
    contentWhere.status = status;
  }

  if (name) {
    contentWhere.name = {
      [Op.like]: `%${name}%`,
    };
  }

  if (date && prix_min && prix_max) {
    contentWhere.price = {
      [Op.between]: [prix_min, prix_max],
    };
    contentWhere.date = new Date(date);
  } else {
    contentWhere[Op.or] = {
      price: {
        [Op.between]: [prix_min, prix_max],
      },
      date: new Date(date),
    };
  }

  Commande.findAll({
    where: contentWhere,
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
  getFilterCommand,
};
