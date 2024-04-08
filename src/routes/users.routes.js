// Importações

const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

const usersController = new UsersController();

// Inicio Rotas

usersRoutes.post("/", usersController.create);

// Fim Rotas

module.exports = usersRoutes; // exportando