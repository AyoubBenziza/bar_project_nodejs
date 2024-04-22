const {
  getBars,
  getBarProfil,
  addBar,
  deleteBar,
  getAllBeersFromBar,
  editbar,
  addBeerIntoBar,
} = require("../controllers/barController");

const { validateIdBar } = require("../validateurs/barValidator");

const express = require("express");
const router = express.Router();

// Récupérer liste des bars
router.get("/", getBars);

// Récupérer le profil d'un bar
router.get("/:id_bar", validateIdBar, getBarProfil);

// Récupérer la liste des biere d'un bar
router.get("/:id_bar/biere", /* validateIdBar, */ getAllBeersFromBar);

// Ajouter un bar
router.post("/", addBar);

// Récupérer la liste des biere d'un bar
router.post(":id_bar/biere", validateIdBar, addBeerIntoBar);

// Modifier un bar
router.put("/:id_bar", validateIdBar, editbar);

// Suprimer un bar
router.delete("/:id_bar", validateIdBar, deleteBar);

module.exports = router;
