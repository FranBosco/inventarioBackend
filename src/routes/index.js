const { Router } = require("express");

const router = Router();

const login = require("./login");
const insumosHome = require("./insumosHome");
const productosHome = require("./productosHome");
const insumos = require("./insumos");
const productos = require("./productos");
const produccion = require("./produccion");
const ventas = require("./ventas");

router.use("/login", login);
router.use("/insumosHome", insumosHome);
router.use("/productosHome", productosHome);
router.use("/insumos", insumos);
router.use("/productos", productos);
router.use("/produccion", produccion);
router.use("/ventas", ventas);

module.exports = router;
