//importação do express
const express = require("express");

//inicialização do express
const app = express();
app.use(express.json()); // padrao para receber informações.

app.post("/users", (request, response) => {
  const { name, email, password } = request.body;
  response.json({name, email, password});
});



//porta da aplicação
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));