const User = require("../config/dbconnection").user;

/* GET BY ID */
exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ where: { id: id } });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(`err ${error}`);
  }
};

/* ADD */
exports.AddUser = async (req, res) => {
  try {
    //destruction of object
    const { fullName, email, phoneNumber, date, destination  } =
      req.body;

    const user = await User.create({
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      date: date,
      destination: destination,
     
    });
    res.status(201).send({
      result: user,
      message: "user saved",
      statusCode: 201,
    });
  } catch (error) {
    res.status(500).send("server error :", err);
  }
};

/* GET ALL */
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(`err ${error}`);
  }
};

/* UPDATE */
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { fullName, email, phoneNumber, date, destination  } = req.body;
    const User = await User.update(
      {
        fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      date: date,
      destination: destination,
     
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(201).send("user updated");
  } catch (error) {
    res.status(500).send("server error :", err);
  }
};
/* DELETE */
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send(`deleted ${id}`);
  } catch (error) {
    res.status(500).send("server error :", err);
  }
};
