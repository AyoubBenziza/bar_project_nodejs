// Imports
const Commande = require("../models/Commande");

//------------------GET-----------------//
const getCommand = (req, res) => {
  Commande.findByPk(id)
    .then((command) => {
      res.json(command);
    })
    .catch((err) => res.send(err));
};

//------------------PUT----------------//
const updateCommand = (req, res) => {
  const command = req.body;
  Commande.update(command, { where: { id: req.params.id } })
    .then((command) => res.json(command))
    .catch((err) => res.send(err));
};

const deleteCommand = (req, res) => {
  Commande.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.send("Suppression effectué");
    })
    .catch((err) => res.send(err));
};

module.exports = { getCommand, updateCommand, deleteCommand };
