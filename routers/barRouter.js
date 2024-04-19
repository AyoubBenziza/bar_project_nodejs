const {
  getBars,
  getBarProfil,
  addBar,
  editbar,
  deleteBar,
} = require("../controllers/barsController");

const express = require("express");
const router = express.Router();
const controller = require("../controllers/barsController");

// Récupérer liste des bars
router.get("/", getBars);

// Récupérer le profil d'un bar
router.get("/:id_bar", getBarProfil);

// Ajouter un bar
router.post("/", addBar);

// Modifier un bar
router.put("/:id_bar", editbar);

// Suprimer un bar
router.delete("/:id_bar", deleteBar);

// Récupérer la liste des biere d'un bar
router.get("/:id_bar/biere", getAllBeersFromBar);

module.exports = router;
