const { Insumos, Productos } = require("../db");
const preInsumos = require("../json/preInsumos.json");

//.........................................................................................//
// CARGA JSON
const preload_insumos = async () => {
  try {
    let data = preInsumos.map((insumos) => {
      return {
        name: insumos.name,
        stock: insumos.stock,
        details: insumos.details,
        unidadDeMedida: insumos.unidadDeMedida,
        min: insumos.min,
        img: insumos.img,
      };
    });

    for (const insumos of data) {
      create_mp(insumos);
    }
    return data;
  } catch (error) {
    console.log("ROMPO EN PRELOAD INSUMOS", error);
  }
};

//.........................................................................................//
// CREAR INSUMO
const create_mp = async (data) => {
  try {
    let { name, stock, details, unidadDeMedida, min, img } = data;

    await Insumos.create({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      stock,
      details,
      unidadDeMedida,
      min,
      img,
    });
  } catch (error) {
    console.log("ROMPO EN UTILS, CREATE MP", error);
  }
};

//.........................................................................................//
// OBTENER INSUMO
const materiaPrima_load = async () => {
  try {
    return await Insumos.findAll();
  } catch (error) {
    console.log("ERROR EN UTILS MP_LOAD", error);
  }
};

module.exports = {
  create_mp,
  materiaPrima_load,
  preload_insumos,
};
