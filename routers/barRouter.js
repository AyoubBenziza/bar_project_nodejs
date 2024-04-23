const {
  getBars,
  getBarProfil,
  addBar,
  deleteBar,
  getAllBeersFromBar,
  editbar,
  addCommandeIntoBar,
  averageDegreeFromBar,
} = require("../controllers/barController");

const {
  validateIdBar,
  validateBarBody,
} = require("../validateurs/barValidator");
const validate = require("../validateurs/validate");

const { validateCommandBody } = require("../validateurs/commandeValidator");

const express = require("express");
const router = express.Router();

// Récupérer liste des bars
router.get("/", getBars);

// Récupérer le profil d'un bar
router.get("/:barId", validateIdBar, validate, getBarProfil);

// Récupérer la liste des biere d'un bar
router.get("/:barId/biere", validateIdBar, validate, getAllBeersFromBar);

// Ajouter un bar
router.post("/", validateBarBody, addBar);

// Ajoute une commande au bar
router.post("/:barId/commande", validateIdBar, validate, addCommandeIntoBar);

// Modifier un bar
router.put("/:barId", validateBarBody, validateIdBar, validate, editbar);

// Suprimer un bar
router.delete("/:barId", validateIdBar, validate, deleteBar);

//Obtenir le degré d'alcool moyen des bières d'un bars
router.get("/:barId/degree", validateIdBar, validate, averageDegreeFromBar);

module.exports = router;
