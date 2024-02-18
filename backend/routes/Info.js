const express = require('express');
const InfoController = require('../controllers/Info');
const router = express.Router();

router.post("/newPet", InfoController.create);

module.exports = router