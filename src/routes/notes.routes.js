// Importações

const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();

const notesController = new NotesController();

// Inicio Rotas

notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);

// Fim Rotas

module.exports = notesRoutes; // exportando