const Biere = require("../models/Biere");

const getAllBeers = (req, res) => {
  Biere.findAll().then((bieres) => res.json(bieres));
};

const getBeer = (req, res) => {
  Biere.findByPk(req.params.idBiere).then((biere) => {
    res.json(biere);
  });
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
      res.send(err.message);
    });
};

const deleteBeer = (req, res) => {
  Biere.destroy({ where: { id: req.params.idBiere } }).then(() =>
    res.send("Bière effacée")
  );
};

module.exports = { getAllBeers, getBeer, updateBeer, deleteBeer };
