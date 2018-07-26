module.exports = app => {
    const Tasks = app.db.models.Tasks;

    // Middleware para pré execução das routes
    app.route("/tasks")
            // tasks = linha de tarefas
        .all(app.auth.authenticate())
        .get((req, res) => {
            Tasks.findAll({
                where: { user_id: req.user.id }
            })
                .then(result => res.json(result))
                .catch(e => {
                    res.status(412).json({msg: e.message()});
                });
        })
            // tasks = cadastra uma nova tarefa
        .post((req, res) => {
            req.body.user_id = req.user.id;
            Tasks.create(req.body)
                .then(result => res.json(result))
                .catch(e => {
                    res.status(412).json({msg: e.message()});
                });
        });
        //funções do ENDPOINT já finalizadas e tratadas.

        // Middleware para pré execução das routes
    app.route("/tasks/:id")
            // tasks/1 consulta uma tarefa
        .all(app.auth.authenticate())
        .get((req, res) => {
            Tasks.findOne({where: {
                id: req.params.id,
                user_id: req.user.id
            }})
                .then(result => {
                    if (result) {
                        return res.json(result);
                    } 
                    return res.sendStatus(404);
                })
                .catch(e => {
                    res.status(412).json({msg: e.message});
                });
        })
            // tasks/1 atualiza uma tarefa
        .put((req, res) => {
            Tasks.update(req.body, {where: {
                id: req.params.id,
                user_id: req.user.id
            }})
                .then(result => res.sendStatus(204))
                .catch(e => {
                    res.status(412).json({msg: e.message});
                });
        })
            // tasks/1 exclui uma tarefa
        .delete((req, res) => {
            Tasks.destroy({where: {
                id: req.params.id,
                user_id: req.user.id
            }})
                .then(result => res.sendStatus(204))
                .catch(e => {
                    res.status(412).json({msg: e.message});
                });
        });
}