// Importações

const { Router } = require("express");

const TagsController = require("../controllers/TagsController");

const tagsRoutes = Router();

const tagsController = new TagsController();

// Inicio Rotas

tagsRoutes.get("/:user_id", tagsController.index);

// Fim Rotas

module.exports = tagsRoutes; // exportando
