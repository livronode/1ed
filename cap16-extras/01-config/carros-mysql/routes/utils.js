/**
 * Função para auxiliar o uso de async/await
 */
const exec = fn =>
    (req, res, next) => {
        Promise.resolve(fn(req, res, next))
            .catch(function (error) {
                next(error);
            });
    };
module.exports = exec;