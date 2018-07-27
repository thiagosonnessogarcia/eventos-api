module.exports = app => {
/**
 * @api {get} / API Status
 * @apiGroup Status
 * @apiSucess {String} status Mensagem de Status da API
 * @apiSucessExample {json} Sucesso
 *  HTTP/1.1 200 OK
 *  {"status": "NTask API"}
 */
    app.get("/", (req, res) => {
        res.json({status: "NTask API"});
    });
};