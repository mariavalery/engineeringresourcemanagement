const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const User = sequelize.define(
  "User",
  {
    name: DataTypes.STRING,

    email: {
      type: DataTypes.STRING,

      unique: true,
    },

    password: DataTypes.STRING,

    role: {
      type: DataTypes.ENUM("admin", "employee"),
      defaultValue: "employee",
    },
  },
  {
    timestamps: true, // createdAt and updatedAt
  }
);

module.exports = User;
