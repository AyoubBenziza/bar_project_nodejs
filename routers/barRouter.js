const {
  getBars,
  getBarProfil,
  addBar,
  deleteBar,
  getAllBeersFromBar,
  editbar,
  addCommandeIntoBar,
  getCommandeOnDate,
  getCommandeBetweenPrice,
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

// Récupère la liste des commande à une date donné
router.get("/:barId/commande?date", validateIdBar, validate, getCommandeOnDate);

// Récupère la liste des commande à une date donné
router.get(
  "/:barId/commande?prix_min&prix_max",
  validateIdBar,
  validate,
  getCommandeBetweenPrice
);

module.exports = router;
