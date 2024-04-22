// Imports
const Commande = require("../models/Commande");

//------------------GET-----------------//
const getCommand = (req, res) => {
  Commande.findByPk(req.params.id_command)
    .then((command) => {
      res.json(command);
    })
    .catch((err) => res.send(err));
};

//------------------PUT----------------//
const updateCommand = (req, res) => {
  const command = req.body;
  Commande.update(command, { where: { id: req.params.id_command } })
    .then((command) => res.json(command))
    .catch((err) => res.send(err));
};

const addBeer = (req, res) => {
  Commande.findByPk(req.params.id_command).then((command) =>
    command
      .addBiere({ where: { id: req.params.id_beer } })
      .then((result) => res.json(result))
      .catch((err) => res.send(err))
  );
};

//----------------DELETE---------------//
const deleteCommand = (req, res) => {
  Commande.destroy({ where: { id: req.params.id_command } })
    .then(() => {
      res.send("Suppression effectué");
    })
    .catch((err) => res.send(err));
};

const deleteBeer = (req, res) => {
  Commande.findByPk(req.params.id_command).then((command) =>
    command
      .removeBiere({ where: { id: req.params.id_beer } })
      .then((result) => res.json(result))
      .catch((err) => res.send(err))
  );
};

module.exports = {
  getCommand,
  updateCommand,
  deleteCommand,
  addBeer,
  deleteBeer,
};
