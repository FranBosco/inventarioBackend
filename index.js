const server = require('./src/app.js');
const express = require('express');
const { conn } = require('./src/db.js');
const morgan = require('morgan');
const { preload_insumos } = require('./src/utils/utilsMp');
const { preload_products } = require('./src/utils/utilsProductos');
const port = process.env.PORT || 3001;

const app = express();

app.use(morgan('dev'));
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
	server.listen(port, () => {
		preload_insumos();
		preload_products();
		console.log(`listening at ${port}`); // eslint-disable-line no-console
	});
});
