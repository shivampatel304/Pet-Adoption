const express = require('express');
const InfoController = require('../controllers/Info');
const router = express.Router();

router.post("/newPet", InfoController.create);
router.get("/petDetails", InfoController.findAllDetails);
router.patch("/:id",InfoController.update);
router.delete("/:id", InfoController.destroy);

module.exports = router