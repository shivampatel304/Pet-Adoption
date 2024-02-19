const express = require('express');
const router = express.Router();

const testiController = require('../controllers/Testimoni');

router.post("/newTestimoni", testiController.create);
router.get("/viewTestimoni", testiController.findAllDetails);



module.exports = router