//importação do express
const express = require("express");

//inicialização do express
const app = express();

// Método get, raiz
app.get("/message/:id/:user", (request, response) => {
  // desestruturação
  const { id, user } = request.params
  // devolve resposta
  response.send(`
  Id da mensagem: ${id}
  Para o usuário${user}`
  )
});

//porta da aplicação
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));