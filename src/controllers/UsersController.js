const AppError = require("../utils/AppError");

class UsersController {
  /**
   * PODE TER ATÉ 5 MÉTODOS
    * index - GET para listar vários registros.
    * show - GET para exibir um registro especifico.
    * create - POST criar um registro.
    * update - PUT atualizar um registro.
    * delete - DELETE para remover um registro.
   */

  create(request, response) {
    const { name, email, password } = request.body;

    if (!name) {
      throw new AppError("O nome é obrigatório");
    }

    response.status(201).json({ name, email, password });
  }


}

module.exports = UsersController;