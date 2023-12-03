const mysql = require("mysql2");

function createDB() {
  return new Promise((resolve, reject) => {
    // Open the connection to MySQL server
    const connection = mysql.createConnection({
      host: process.env.HOST,
      port: process.env.PORT,
      user: process.env.USER,
      password: process.env.PASSWORD,
    });

    // Run create database statement
    connection.query(
      `CREATE DATABASE IF NOT EXISTS ${process.env.DB}`,
      (err) => {
        // Close the connection
        connection.end();
        if (!err) {
          console.log(`✅ Database created `);
          resolve();
        } else {
          console.log(`❌create failed : ${err}`);
          reject(err);
        }
      }
    );
  });
}

module.exports = createDB;