const express = require("express");
const router = express.Router();

const { searchAll } = require("../controllers/search");

router.route("/:query").get(searchAll);

module.exports = router;
