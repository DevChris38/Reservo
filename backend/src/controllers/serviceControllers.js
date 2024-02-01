const tables = require("../tables");

const read = async (req, res, next) => {
  try {
    const service = await tables.service.browse(req.params.id);

    if (service === null) {
      res.sendStatus(404);
    } else {
      res.json(service);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  read,
};
