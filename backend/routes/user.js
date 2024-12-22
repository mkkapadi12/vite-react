const express = require("express");
const { getAllUser, postUserData } = require("../controllers/user");
const router = express.Router();

router.route("/user").get(getAllUser);
router.route("/user").post(postUserData);

module.exports = router;
