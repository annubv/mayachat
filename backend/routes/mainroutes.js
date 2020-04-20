const express = require("express");
const viewmgmnt = require("../controllers/viewmgmnt");

const router = express.Router();

router.route("/").get(viewmgmnt.homepage);

module.exports = router;
