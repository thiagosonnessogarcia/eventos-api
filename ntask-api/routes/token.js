import jwt from "jwt-simple";
module.exports = app => {
    const cfg = app.libs.config;
    const Users = app.db.models.Users;

/**
 * @api {post} /token Token autenticado
 * @apiGroup Credencial
 * @apiParam {String} email Email de usuário
 * @apiParam {String} password Senha de usuário
 * @apiParamExample {json} Entrada
 *      {
 *      "email": "john@connor.net",
 *      "password": "skynet"
 *      }
 * @apiSucess {String} token Token de usuario autenticado
 * @apiSucessExample {json} Sucesso
 *      HTTP/ 1.1 200 OK
 *      {"token": "xyz.abc.123.hfg"}
 * @apiErrorExample {json} Erro de autenticação
 *      HTTP/1.1 401 Unauthorized
 */
    app.post("/token", (req, res) => {
        if (req.body.email && req.body.password) {
            const email = req.body.password;
            Users.findOne({where: {email: email}})
                .then(user => {
                    if (Users.isPassword(user.password, password)) {
                        const payload = {id: user.id};
                        res.json({
                            token: jwt.encode(payload, cfg.jwtSecret)
                        });
                    } else {
                        res.sendStatus(401);
                    }
                })
                .catch(e => res.sendStatus(401));
        } else {
            res.sendStatus(401);
        }
    });
};