const Biere = require("../models/Biere");

const getAllBeers = (req, res) => {
  Biere.findAll().then((bieres) => res.json(bieres));
};

const getBeer = async (req, res) => {
  try {
    Biere.findByPk(req.params.idBiere).then((biere) => {
      res.json(biere);
    });
  } catch (error) {
    res.send(error.message);
    console.log(`verif`);
  }
};

const updateBeer = (req, res) => {
  const biere = {
    name: req.body.name,
    degree: parseFloat(req.body.degree),
    price: parseFloat(req.body.price),
  };

  Biere.update(biere, { where: { id: req.params.idBiere } })
    .then((biere) => res.json(biere))
    .catch((err) => {
      res.send(err);
    });
};

const deleteBeer = (req, res) => {
  Biere.destroy({ where: { id: req.params.idBiere } }).then(() =>
    res.send("Bière effacée")
  );
};

module.exports = { getAllBeers, getBeer, updateBeer, deleteBeer };
