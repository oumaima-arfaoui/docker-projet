const express = require("express");
const db = require("./src/config/db.config");
const User = require("./src/config/db.config").user;
const port = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", require("./routes/routes"));

app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));
