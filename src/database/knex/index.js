const config = require("../../../knexfile");

const knex = require("knex");

const conection = knex(config.development);

modules.export = conection;
