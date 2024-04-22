// Imports
const express = require("express");
const {
  getCommand,
  updateCommand,
  deleteCommand,
  addBeer,
  deleteBeer,
} = require("../controllers/commandeController");
const router = express.Router();

// Commande
router.get("/:idCommand", getCommand);
router.put("/:idCommand", updateCommand);
router.delete("/:idCommand", deleteCommand);

// Biere_commande
router.post("/:idCommand/biere/:idBeer", addBeer);
router.delete(":idCommand/biere/:idBeer", deleteBeer);

// Exports
module.exports = router;
