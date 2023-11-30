const express = require("express");
const router = express.Router();
const {
  getUser,
  setUser,
  updateUser,
  deleteUser,
  getUsers,
} = require("../controller/user.controller");

router.route("/").get(getUser).post(setUser).get(getUsers);

router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
