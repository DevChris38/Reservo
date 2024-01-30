const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const proControllers = require("./controllers/proControllers");

// Route to get a specific item by ID
router.get("/pro/:id", proControllers.read);

/* ************************************************************************* */

module.exports = router;
