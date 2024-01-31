const tables = require("../tables");

const add = async (req, res, next) => {
  // Extract the user data from the request body
  const user = req.body;

  try {
    // Insert the user into the database
    const insertId = await tables.customer.create(user);

    res.status(201).json({ insertId });
  } catch (err) {
    res.status(500).send("Cet utilisateur existe déjà");
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await tables.customer.read(req.params.id);

    if (user === null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  add,
  read,
};
