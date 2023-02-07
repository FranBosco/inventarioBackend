const { Login } = require("../db");
const preLogin = require("../json/preLogin.json");

const create_login = async (data) => {
  try {
    let { user, password } = data;

    let new_login = await Login.create({
      user,
      password,
    });
  } catch (error) {
    console.log("ERROR en create_product", error);
  }
};

module.exports = { create_login };
