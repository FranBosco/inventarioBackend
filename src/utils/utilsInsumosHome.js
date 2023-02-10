const { Insumos, Productos } = require("../db");

//.........................................................................................//
// OBTENER PRODUCTO
const get_insumos_home = async () => {
  try {
    return await Insumos.findAll()
      .then((data) =>
        data.sort((a, b) => (a.difference > b.difference ? 1 : -1))
      )
      .then((dataSort) => dataSort.slice(0, 7));
  } catch (error) {
    console.log("ERROR en get_insumos_home", error);
  }
};

module.exports = { get_insumos_home };
