// Imports
const express = require("express");
const {
  getCommand,
  updateCommand,
  deleteCommand,
  addBeer,
  deleteBeer,
  getDetailsPDF,
} = require("../controllers/commandeController");
const router = express.Router();

// Validators
const validate = require("../validateurs/validate");
const {
  validateCommandId,
  validateCommandBody,
} = require("../validateurs/commandeValidator");
const { validateIdBeer } = require("../validateurs/biereValidator");

// Commande
router.get("/:idCommand", validateCommandId, validate, getCommand);
router.put(
  "/:idCommand",
  validateCommandId,
  validateCommandBody,
  validate,
  updateCommand
);
router.delete("/:idCommand", validateCommandId, validate, deleteCommand);

// Biere_commande
router.post(
  "/:idCommand/biere/:idBiere",
  validateCommandId,
  validateIdBeer,
  validate,
  addBeer
);
router.delete(
  ":idCommand/biere/:idBiere",
  validateCommandId,
  validateIdBeer,
  validate,
  deleteBeer
);

// PDF File
router.get("/details/:idCommand", validateCommandId, validate, getDetailsPDF);

// Exports
module.exports = router;
