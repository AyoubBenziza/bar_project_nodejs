const { barController } = require("../controllers/barController");

const { validateIdBar } = require("../validateurs/barValidator");
const validate = require("../validateurs/barValidator");

const express = require("express");
const router = express.Router();

// Récupérer liste des bars
router.get("/", barController.getBars);

// Récupérer le profil d'un bar
router.get("/:id_bar",validateIdBar,validate, barController.getBarProfil);

// Récupérer la liste des biere d'un bar
router.get("/:id_bar/biere",validateIdBar,validate, barController.getAllBeersFromBar);

// Ajouter un bar
router.post("/", addBar);

// Récupérer la liste des biere d'un bar
router.post(":id_bar/biere",validateIdBar,validate,barController.addBeerIntoBar)

// Modifier un bar
router.put("/:id_bar",validateIdBar,validate, barController.editbar);

// Suprimer un bar
router.delete("/:id_bar",validateIdBar,validate, barController.deleteBar);



module.exports = router;
