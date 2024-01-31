/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    const valuesCategory = [
      ["Epilation à la cire"],
      ["Vernis semi-permanent"],
      ["Beauté des pieds"],
      ["Massage"],
    ];

    await Promise.all(
      valuesCategory.map(async (rowValues) => {
        await database.query("INSERT INTO category (name) VALUES (?)", [
          rowValues,
        ]);
      })
    );

    const valuesCustomer = [
      [
        "Alice",
        "Marmiton",
        "0658759684",
        "alice.marmiton@gmail.com",
        "toto",
        "2001-01-02",
      ],
    ];

    await Promise.all(
      valuesCustomer.map(async (rowValues) => {
        await database.query(
          "INSERT INTO customer (firstName, lastName, phone, mail, password, birthday) VALUES (?)",
          [rowValues]
        );
      })
    );

    const valuesProfessional = [
      [
        "Elodie Beauté",
        "Salon d'esthétique",
        "Elodie vous acceuille dans son institut pour une grande variété de prestations : Epilation, massages, onglerie, ... ",
        "www.elodiebeaute42.fr",
        "0642569852",
        "26 Rue Chevalier , 42380 Saint-Bonnet-le-Château",
      ],
    ];

    await Promise.all(
      valuesProfessional.map(async (rowValues) => {
        await database.query(
          "INSERT INTO professional (name, activity, description, website, phone, adresse) VALUES (?)",
          [rowValues]
        );
      })
    );

    const valuesService = [
      ["Aisselles", 10, 10, 1, 1],
      ["1/2 jambes", 15, 15, 1, 1],
      ["Jambes complète", 30, 24, 1, 1],
      ["3/4 jambes", 20, 20, 1, 1],
      ["bras", 15, 15, 1, 1],
      ["1/2 bras", 15, 12, 1, 1],
      ["Cuisses", 15, 15, 1, 1],
      ["Ventre/dos", 10, 10, 1, 1],
      ["Pose vernis semi-permanent", 60, 27, 2, 1],
      ["Green flash", 30, 18, 2, 1],
      ["Soin anti-callosité", 40, 35, 3, 1],
      ["Beauté des pieds", 15, 32, 3, 1],
      ["Massage vietnamien tam-quat", 60, 69, 4, 1],
      ["Massage chinois ying qi shen", 90, 83, 4, 1],
      ["Massage polynesien", 75, 76, 4, 1],
    ];

    await Promise.all(
      valuesService.map(async (rowValues) => {
        await database.query(
          "INSERT INTO service (name, duration, price, id_category, id_professional) VALUES (?)",
          [rowValues]
        );
      })
    );

    const valuesCustomerService = [
      [1, 1, "2023-10-01 14:30:00", "2023-10-01 14:40:00"],
      [1, 9, "2023-10-01 14:45:00", "2023-10-01 15:45:00"],
      [1, 1, "2023-11-25 09:00:00", "2023-10-01 09:10:00"],
      [1, 9, "2023-10-01 09:15:00", "2023-10-01 10:15:00"],
    ];

    await Promise.all(
      valuesCustomerService.map(async (rowValues) => {
        await database.query(
          "INSERT INTO customer_service (customer_id, service_id, date_beginning, date_end) VALUES (?)",
          [rowValues]
        );
      })
    );

    const valuesImage = [
      ["Elodie1", 1],
      ["Elodie2", 1],
      ["Elodie3", 1],
      ["Elodie4", 1],
    ];

    await Promise.all(
      valuesImage.map(async (rowValues) => {
        await database.query(
          "INSERT INTO image (link, id_professional) VALUES (?)",
          [rowValues]
        );
      })
    );

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    // await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
