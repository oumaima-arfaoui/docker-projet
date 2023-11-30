//connect to db and create table
db.configserverdb
  .sync()
  .then(() => {
    console.log("****** tables created ! *********");
  })
  .catch((err) => {
    console.log("err", err);
  });

/* GET BY ID */
const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ where: { id: id } });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(`err ${error}`);
  }
};

/* ADD */
const setUser = async (req, res) => {
  try {
    //destruction of object

    const { fullName, email, phoneNumber, date, destination, nbreVoy } =
      req.body;
    return (
      await db.user.create({
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        date: date,
        destination: destination,
        nbreVoy: nbreVoy,
      }),
      res.status(201).send("user saved")
    );
  } catch (error) {
    res.status(500).send("server error :", err);
  }
};

/* GET ALL */
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(`err ${error}`);
  }
};

/* UPDATE */
app.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let { fullName, email, phoneNumber, date, destination, nbreVoy } = req.body;
    const user = await User.update(
      {
        fullName: req.body.fullName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        date: req.body.date,
        destination: req.body.destination,
        nbreVoy: req.body.nbreV,
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
});
/* UPDATE */
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    let { username, email, password } = req.body;
    const user = await User.update(
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
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
const deleteUser = async (req, res) => {
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
module.exports = {
  getUser,
  setUser,
  getUsers,
  updateUser,
  deleteUser,
};
