// Import access to database tables
const tables = require("../tables");

const read = async (req, res, next) => {
  try {
    const reservation = await tables.customer_service.read(req.params.id);

    if (reservation === null) {
      res.sendStatus(404);
    } else {
      res.json(reservation);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const create = async (req, res, next) => {
  // Extract the item data from the request body
  const reservation = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.customer_service.create(reservation);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const deletion = async (req, res, next) => {
  try {
    await tables.customer_service.delete(req.body);

    res.status(200).send("Le rendez-vous a bien été supprimé");
  } catch (err) {
    res.status(500).send(err.message);
    next(err);
  }
};

module.exports = {
  create,
  read,
  deletion,
};
