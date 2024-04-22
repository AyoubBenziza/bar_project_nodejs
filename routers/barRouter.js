const {   getBars,getBarProfil,addBar,deleteBar,getAllBeersFromBar,editbar,addCommandeIntoBar } = require("../controllers/barController");

const { validateIdBar } = require("../validateurs/barValidator");

const express = require("express");
const router = express.Router();

// Récupérer liste des bars
router.get("/", getBars);

// Récupérer le profil d'un bar
router.get("/:idBar", validateIdBar, getBarProfil);

// Récupérer la liste des biere d'un bar
router.get("/:idBar/biere", validateIdBar, getAllBeersFromBar);

// Ajouter un bar
router.post("/", addBar);

// Ajoute une commande au bar
router.post("/:idBar/commande", validateIdBar, addCommandeIntoBar);

// Modifier un bar
router.put("/:idBar", validateIdBar, editbar);

// Suprimer un bar
router.delete("/:idBar", validateIdBar, deleteBar);

module.exports = router;
