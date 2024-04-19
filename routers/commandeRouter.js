// Imports
const express = require("express");
const {
  getCommand,
  updateCommand,
  deleteCommand,
} = require("../controllers/commandeController");
const router = express.Router();

// Commande
router.get("/:id", getCommand);
router.put("/:id_command", updateCommand);
router.delete("/:id_command", deleteCommand);

// Biere_commande
// router.post("/:id_command/biere/:id_beer", addBeer);
// router.delete(":id_command/biere/:id_beer", deleteBeer);

module.exports = router;
