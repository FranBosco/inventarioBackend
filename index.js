const server = require("./src/app.js");
const express = require("express");
const { conn } = require("./src/db.js");
const morgan = require("morgan");
const port = process.env.PORT || 3001;

const preLogin = require("./src/json/preLogin.json");
const { preload_insumos } = require("./src/utils/utilsMp");
const { preload_products } = require("./src/utils/utilsProductos");
const { create_login } = require("./src/utils/utilsLogin.js");

const app = express();

app.use(morgan("dev"));
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    create_login(preLogin);
    preload_insumos();
    preload_products();
    console.log(`listening at ${port}`); // eslint-disable-line no-console
  });
});
