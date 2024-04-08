//importação do express
const express = require("express");
const routes = require("./routes");

//inicialização do express
const app = express();
app.use(express.json()); // padrao para receber informações.

app.use(routes);

//porta da aplicação
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));