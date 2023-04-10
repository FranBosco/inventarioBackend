const { Router } = require("express");

const router = Router();

const login = require("./login.routes");
const insumosHome = require("./insumosHome.routes");
const productosHome = require("./productosHome.routes");
const insumos = require("./insumos.routes");
const productos = require("./productos.routes");
const produccion = require("./produccion.routes");
const ventas = require("./ventas.routes");

router.use("/login", login);
router.use("/insumosHome", insumosHome);
router.use("/productosHome", productosHome);
router.use("/insumos", insumos);
router.use("/productos", productos);
router.use("/produccion", produccion);
router.use("/ventas", ventas);

module.exports = router;
