const express = require("express");
const app = express();
const db = require("./src/config/dbconnection.js");
const port = 5000;
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connect to db and create table
db.configserverdb
  .sync()
  .then(() => {
    console.log("****** tables created ! *********");
  })
  .catch((err) => {
    console.log("err", err);
  });

require("./src/routes/routes.js")(app);

app.listen(port, () => console.log(`Server started on port ${port}`));
