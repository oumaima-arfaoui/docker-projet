module.exports = (configserverdb, Sequelize) => {
  const User = configserverdb.define(
    "users",
    {
      fullName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
      destination: {
        type: Sequelize.STRING,
      },
      nbreVoy: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  return User;
};

//check data type here =>
// https://sequelize.org/docs/v7/models/data-types/