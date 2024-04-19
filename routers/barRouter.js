const {getBars,getBarProfil,addBar,editbar,deleteBar} = require("../controllers/barsController")

const express = require('express');
const router = express.Router();
const controller = require('../controllers/barsController')


router.get('/',getBars)
router.get('/:id_bar',getBarProfil ) 

router.post('/',addBar)
router.put('/:id_bar',editbar)
router.delete('/:id_bar',deleteBar)
router.get("/:id_bar/biere", getAllBeersFromBar);

module.exports = router
