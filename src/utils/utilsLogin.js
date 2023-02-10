const { Login } = require("../db");
const preLogin = require("../json/preLogin.json");

const create_login = async ({ user, password }) => {
  try {
    await Login.create({ user, password });
  } catch (error) {
    console.log("ERROR en create_login", error);
  }
};

module.exports = { create_login };
