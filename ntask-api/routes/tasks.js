module.exports = app => {
    const Tasks = app.db.models.Tasks;

    // Middleware para pré execução das routes
    app.route("/tasks")
            // tasks = linha de tarefas
        .all(app.auth.authenticate())
        .get((req, res) => {
            Tasks.findAll({})
                .then(result => res.json(result))
                .catch(e => {
                    res.status(412).json({msg: e.message()});
                });
        })
            // tasks = cadastra uma nova tarefa
        .post((req, res) => {
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
            Tasks.findOne({where: req.params})
                .then(result => {
                    if (result) {
                        res.json(result);
                    } else {
                        res.send(result);
                    }
                })
                .catch(e => {
                    res.status(412).json({msg: e.message()});
                });
        })
            // tasks/1 atualiza uma tarefa
        .put((req, res) => {
            Tasks.update(req.body, {where: req.params})
                .then(result => res.sendStatus(204))
                .catch(e => {
                    res.status(412).json({msg: e.message()});
                });
        })
            // tasks/1 exclui uma tarefa
        .delete((req, res) => {
            Tasks.destroy({where: req.params})
                .then(result => res.sendStatus(204))
                .catch(e => {
                    res.status(412).json({msg: e.message()});
                });
        });
}