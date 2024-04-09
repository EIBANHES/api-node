const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

class UsersController {
  /**
   * PODE TER ATÉ 5 MÉTODOS
    * index - GET para listar vários registros.
    * show - GET para exibir um registro especifico.
    * create - POST criar um registro.
    * update - PUT atualizar um registro.
    * delete - DELETE para remover um registro.
   */

  async create(request, response) {
    const { name, email, password } = request.body;
    const database = await sqliteConnection();
    const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if (checkUserExist) {
      throw new AppError("Este email já esta em uso.");
    }

    const hashedPassword = await hash(password, 8);

    await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", 
    [name, email, hashedPassword])
    return response.status(201).json({

    });
  }


}

module.exports = UsersController;