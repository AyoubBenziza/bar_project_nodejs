// Récupération des méthodes
const {
  updateBeer,
  deleteBeer,
  getAllBeers,
  getBeer,
} = require("../controllers/biereController");

const {
  validateIdBeer,
  validateBodyBeer,
} = require("../validateurs/biereValidator");

const validate = require("../validateurs/biereValidator");

const express = require("express");

const router = express.Router();

router.get("", getAllBeers);
router.get("/:idBiere", getBeer);
router.put(
  "/:idBiere",
  validateIdBeer,
  validateBodyBeer,
  /*  validate, */ updateBeer
);
router.delete("/:idBiere", validateIdBeer, /* validate, */ deleteBeer);

module.exports = router;
