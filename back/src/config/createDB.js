const mysql = require("mysql2");
const dbconfig=require("./db.config")
function createDB() {
  return new Promise((resolve, reject) => {
    // Open the connection to MySQL server
    const connection = mysql.createConnection({
      host: dbconfig.HOST,
      port: dbconfig.port,
      user: dbconfig.USER,
      password: dbconfig.PASSWORD,
    });

    // Run create database statement
    connection.query(
      `CREATE DATABASE IF NOT EXISTS ${dbconfig.DB}`,
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