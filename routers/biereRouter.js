// Récupération des méthodes
const {
  updateBeer,
  suppBeer,
  getAllBeers,
  getBeer,
} = require("../controllers/biereController");

const {
  validateIdBeer,
  validateBodyBeer,
} = require("../validateurs/biereValitor");

const validate = require("../validateurs/biereValidator");

const express = require("express");

const router = express.Router();

router.get("", getAllBeers);
router.get("/:id_biere", getBeer);
router.put(
  "biere/id_biere",
  validateIdBeer,
  validateBodyBeer,
  validate,
  updateBeer
);
router.delete("/biere/:id_biere", validateIdBeer, validate, suppBeer);

module.exports = router;
