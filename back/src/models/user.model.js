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
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.date,
      },
      destination: {
        type: Sequelize.STRING,
      },
      nbreVoy: {
        type: Sequelize.STRING,
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
