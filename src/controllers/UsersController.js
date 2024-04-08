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
    response.json({ name, email, password });
  }


}

module.exports = UsersController;