const AbstractManager = require("./AbstractManager");

class ServiceManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "service" });
  }

  async browse(id) {
    const [rows] = await this.database.query(
      `SELECT duration, price, ${this.table}.name AS service_name, category.name AS category_name
      from ${this.table}
      INNER JOIN category ON category.id = service.id_category
      where id_professional = ?
      ORDER BY id_category`,
      [id]
    );
    return rows;
  }
}

module.exports = ServiceManager;
