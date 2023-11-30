const UserController = require("../controller/user.controller");

module.exports = (app) => {
  app.post("/adduser", UserController.AddUser);
  app.get("/getuser/:id", UserController.getUser);
  app.get("/getallusers", UserController.getUsers);
  app.put("updateuser/:id", UserController.updateUser);
  app.delete("delete/:id", UserController.deleteUser);
};
