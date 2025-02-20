const express = require("express");
const router = express.Router();

// contollers fuctions
const { signupUser, loginUser } = require("../controllers/userController");

// login route
router.post("/login", loginUser)

// signup router
router.post("/signup", signupUser)

module.exports = router;