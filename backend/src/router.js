const express = require("express");
const { hashPassword, verifyToken } = require("./services/auth");

const router = express.Router();

// Import controllers modules
const proControllers = require("./controllers/proControllers");
const serviceControllers = require("./controllers/serviceControllers");
const reservationControllers = require("./controllers/reservationControllers");
const customerControllers = require("./controllers/customerController");
const authControllers = require("./controllers/authControllers");

// Route to get informations about a professional by its ID
router.post("/user", hashPassword, customerControllers.add);

router.post("/login", authControllers.login);

router.get("/pro/:id", proControllers.read);

// Route to get all services purposed by a professional by its ID
router.get("/service/:id", serviceControllers.read);

router.post("/reservation", reservationControllers.create);

router.get("/reservation/:id", reservationControllers.read);

router.delete("/reservation", reservationControllers.deletion);

router.use(verifyToken);

/* ************************************************************************* */

module.exports = router;
