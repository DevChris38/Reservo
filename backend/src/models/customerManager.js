const AbstractManager = require("./AbstractManager");

class CustomerManager extends AbstractManager {
  constructor() {
    super({ table: "customer" });
  }

  async create(user) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const id = await this.database.query(
      `insert into ${this.table} (firstname, lastname, phone, mail, password) values (?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.phone,
        user.mail,
        user.hashedPassword,
      ]
    );
    return id;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select firstname, lastname, mail, pseudo from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readByEmailWithPassword(mail) {
    const [rows] = await this.database.query(
      `select id, mail, firstname, lastname, password from ${this.table} where mail = ?`,
      [mail]
    );

    return rows[0];
  }
}

module.exports = CustomerManager;
