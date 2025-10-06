const express = require("express");
const router = express.Router();

// Import controller
const { register, login } = require("../controllers/user");

// Login user
router.post("/register", register);


// Export the router
module.exports = router;