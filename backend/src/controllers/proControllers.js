const tables = require("../tables");

const read = async (req, res, next) => {
  try {
    const item = await tables.professional.read(req.params.id);

    if (item == null) {
      res.sendStatus(404);
    } else {
      res.json(item);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  read,
};
