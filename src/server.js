//importação do express
const express = require("express");

//inicialização do express
const app = express();

//porta da aplicação
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));