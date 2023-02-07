const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("login", {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
