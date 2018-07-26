module.exports = app => {
    const Users = app.db.models.Users;
    
    app.route("/user")
        .all(app.auth.authenticate())
        .get((req, res) => {
            Users.findById(req.user.id, {
                attributes: ["id", "name", "email"]
            })
            .then(result => res.json(result))
            .catch(e => {
                res.status(412).json({msg: e.message});
        });
    })
    .delete((req, res) => {
        Users.destroy({where: {id: req.user.id} })
            .then(result => res.sendStatus(204))
            .catch(e => {
               res.status(412).json({msg: e.message});
        });
    });

    app.post("/users", (req, res) => {
        Users.create(req.body)
            .then(result => res.json(result))
            .catch(e => {
                res.status(412).json({msg: e.message});
        });
    });
};