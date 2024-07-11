const CustomError = require("../middlewares/CustomError");

// Tratamento de erro de endereço
const notFound = (req, res, next) => {
    res.status(404).send("Page not Found!");
};

// Tratamento de erro interno
const internalErrorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        res.status(err.statusCode).json({ error: err.message });
    } else {
        console.error(err.stack);
        res.status(500).send("Internal server error.");
    }
};

module.exports = {
    notFound,
    internalErrorHandler,
};
