const AbstractManager = require("./AbstractManager");

class ReservationManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "customer_service" });
  }

  async create(reservation) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (customer_id, service_id, date_beginning, date_end) values (?, ?, ?, ?)`,
      [
        reservation.customer,
        reservation.service,
        reservation.horaire,
        reservation.horaire,
      ]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    const [rows] = await this.database.query(
      `select service_id, customer_id, date_beginning, service.name AS service_name 
      from ${this.table} 
      INNER JOIN service ON service.id = ${this.table}.service_id
      where customer_id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows;
  }

  async delete(reservation) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE customer_id = ? AND date_beginning = ? `,
      [reservation.customer, reservation.date]
    );

    // Return the ID of the newly inserted item
    return result;
  }
}

module.exports = ReservationManager;
