const AbstractManager = require("./AbstractManager");

class ProManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "professional" });
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }
}

module.exports = ProManager;
