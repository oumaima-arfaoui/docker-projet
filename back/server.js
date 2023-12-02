const express = require("express");
const app = express();
const db = require("./src/config/dbconnection.js");
const PORT = 5000;
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = require("./src/routes/routes.js")(app);

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
  } else {
    console.log(`⛔server is down : ${err}`);
  }
});