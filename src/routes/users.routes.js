// Importações

const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

const usersController = new UsersController();

function myMiddleware(request, response, next) {
  console.log("Voce passou pelo middleware.");
  if (!request.body.isAdmin) {
    return response.json({ message: "User unathorized" });
  }
  next(); // chama a proxima função a ser executada.
}

// Inicio Rotas

usersRoutes.post("/", myMiddleware, usersController.create);

// Fim Rotas

module.exports = usersRoutes; // exportando