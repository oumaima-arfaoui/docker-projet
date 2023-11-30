const UserController = require("../controller/user.controller");

module.exports = (app) => {
  app.post("/adduser", UserController.AddUser);
  app.get("/getuser/:id", UserController.getUser);
  app.get("/getallusers", UserController.getUsers);
  app.put("/updateuser/:id", UserController.updateUser);
  app.delete("/delete/:id", UserController.deleteUser);
};
// dima tabda endpoint b / 
// ken kharjtlk error not found akeka b html maaneha mesh yaarf fy route bkolha

// switchi ll branch mteeik yehdik matnjmsh tab9a tekhdm al main o heya al main
