const { Insumos, Productos } = require("../db");

//.........................................................................................//
// OBTENER PRODUCTO
const get_product_home = async () => {
  try {
    return await Productos.findAll()
      .then((data) =>
        data.sort((a, b) => (a.difference > b.difference ? 1 : -1))
      )
      .then((dataSort) => dataSort.slice(0, 7));
  } catch (error) {
    console.log("ERROR en get_product_home", error);
  }
};

module.exports = { get_product_home };
