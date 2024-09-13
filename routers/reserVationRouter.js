const express = require("express");
const {
  reservationController,
} = require("../controllers/reservationController");
const router = express.Router();

// POST request
router.post("/reservation", reservationController);

module.exports = router;
