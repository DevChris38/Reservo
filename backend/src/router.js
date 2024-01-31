const express = require("express");

const router = express.Router();

// Import controllers modules
const proControllers = require("./controllers/proControllers");
const serviceControllers = require("./controllers/serviceControllers");
const reservationControllers = require("./controllers/reservationControllers");

// Route to get informations about a professional by its ID
router.get("/pro/:id", proControllers.read);

// Route to get all services purposed by a professional by its ID
router.get("/service/:id", serviceControllers.read);

router.post("/reservation", reservationControllers.create);

/* ************************************************************************* */

module.exports = router;
