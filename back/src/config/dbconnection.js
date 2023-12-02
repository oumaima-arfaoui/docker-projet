const config = require("./db.config.js");
const createDB = require("./createDB");

const Sequelize = require("sequelize");
const configserverdb = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  port: config.port,
  dialect: config.dialect,
  operatorsAliases: false,
});

async function main() {
  try {
    //create db
    await createDB();
    //connect to db
    await configserverdb
      .authenticate()
      .then(() => {
        console.log(
          "✔ Connection has been established successfully."
        );
      })
      .catch((err) => {
        console.error(`Unable to connect to the database : ${err}`);
      });
    //create table from our models
    await configserverdb
      .sync({ force: false })
      .then(() => {
        console.log("tables created !".underline);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.error(`Unable to connect to the database : ${err}`);
  }
}

main();

const db = {};
db.Sequelize = Sequelize;
db.configserverdb = configserverdb;
db.user = require("../models/user.model.js")(configserverdb, Sequelize);
// db.member = require("../models/user.entity.js")(configserverdb, Sequelize);

module.exports = db;
