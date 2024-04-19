const Biere = require("../models/Biere");

const getAllBeers = (req, res) => {
  Biere.findAll().then((bieres) => res.json(bieres));
};

const getBeer = (req, res) => {
  const biere = {
    name: req.body.name,
    degree: parseFloat(req.body.degree),
    price: parseFloat(req.body.price),
  }
    .then((biere) => {
      res.send(biere);
    })
    .catch((err) => {
      res.send(err);
    });
};
const updateBeer = (req, res) => {
  const biere = {
    name: req.body.name,
    degree: parseFloat(req.body.degree),
    price: parseFloat(req.body.price),
  };

  Biere.update(biere, { where: { id: req.params.id } })
    .then((biere) => res.json(biere))
    .catch((err) => {
      res.send(err);
    });
};

const deleteBeer = (req, res) => {
  Biere.destroy({ where: { id: req.params.id } }).then(() =>
    res.send("Bière effacée")
  );
};

module.exports = { getAllBeers, getBeer, updateBeer, deleteBeer };
