const {
  getBars,
  getBarProfil,
  addBar,
  deleteBar,
  getAllBeersFromBar,
  editbar,
  addCommandeIntoBar,
} = require("../controllers/barController");

const {
  validateIdBar,
  validateBarBody,
} = require("../validateurs/barValidator");
const validate = require("../validateurs/validate");

const express = require("express");
const router = express.Router();

// Récupérer liste des bars
router.get("/", getBars);

// Récupérer le profil d'un bar
router.get("/:idBar", validateIdBar, validate, getBarProfil);

// Récupérer la liste des biere d'un bar
router.get("/:idBar/biere", validateIdBar, validate, getAllBeersFromBar);

// Ajouter un bar
router.post("/", validateBarBody, addBar);

// Ajoute une commande au bar
router.post("/:idBar/commande", validateIdBar, validate, addCommandeIntoBar);

// Modifier un bar
router.put("/:idBar", validateBarBody, validateIdBar, validate, editbar);

// Suprimer un bar
router.delete("/:idBar", validateIdBar, validate, deleteBar);

module.exports = router;
