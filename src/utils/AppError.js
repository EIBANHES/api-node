class AppError {
  message;
  statusCode;

  constructor(message, statusCode = 400) { // Erro de cliente, definido por padrão
    this.message = message,
    this.statusCode = statusCode
  }

}

module.exports = AppError;