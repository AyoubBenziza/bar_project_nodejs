// Imports
const fs = require("fs");
const PDFDocument = require("pdfkit");
const { createPDF } = require("../utils/pdfService");
const Commande = require("../models/Commande");
const Biere = require("../models/Biere");

//------------------GET-----------------//

// Accéder aux données d'une commande
const getCommand = (req, res) => {
  Commande.findByPk(req.params.idCommand)
    .then((command) => {
      res.json(command);
    })
    .catch((err) => res.send(err));
};

const getDetailsPDF = (req, res) => {
  Commande.findByPk(req.params.idCommand).then((commande) => {
    const stream = res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment;filename=Commande${commande.id}.pdf`,
    });
    const values = commande.dataValues;
    values.createdAt = values.createdAt.toLocaleString("fr-FR");
    values.updatedAt = values.updatedAt.toLocaleString("fr-FR");
    createPDF(
      (chunk) => stream.write(chunk),
      () => stream.end(),
      values
    );
    // res.send("Fichier PDF créé");
  });
};

//------------------POST---------------//

// Ajout d'une bière dans une commande
const addBeer = async (req, res) => {
  try {
    const command = await Commande.findByPk(req.params.idCommand);
    const beer = await Biere.findByPk(req.params.idBiere);
    if (beer === null || command === null) {
      throw new Error(`La commande ou la bière n'existe pas`);
    }
    await command
      .addBiere(beer)
      .then((result) => res.send("Ajout de Bière effectué"));
  } catch (err) {
    res.send(err.message);
  }
};

//------------------PUT----------------//

// Modification d'une commande
const updateCommand = (req, res) => {
  Commande.update(req.body, { where: { id: req.params.idCommand } })
    .then((command) => res.json(command))
    .catch((err) => res.send(err.message));
};

//----------------DELETE---------------//

// Suppression d'une commande
const deleteCommand = (req, res) => {
  Commande.destroy({ where: { id: req.params.idCommand } })
    .then(() => {
      res.send("Suppression de la commande effectué");
    })
    .catch((err) => res.send(err));
};

// Suppression d'une bière dans une commande
const deleteBeer = async (req, res) => {
  try {
    const command = await Commande.findByPk(req.params.idCommand);
    command
      .removeBiere({ where: { id: req.params.idBiere } })
      .then((result) => res.send("Supression de la bière effectuée"));
  } catch (err) {
    res.send(err.message);
  }
};

// Exports
module.exports = {
  getCommand,
  updateCommand,
  deleteCommand,
  addBeer,
  deleteBeer,
  getDetailsPDF,
};
