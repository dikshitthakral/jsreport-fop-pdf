const express = require("express");
const commissions = require("../controllers/commission");

const router = express.Router();
router.get("/coimmissions/export", commissions.exportCommissions);

module.exports = router;
