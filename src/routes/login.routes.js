const { Router } = require("express");
const { Login } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
  } catch (error) {
    console.log("ERROR EN RUTA GET LOGIN", error);
  }
});

module.exports = router;
