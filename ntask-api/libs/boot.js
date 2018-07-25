module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log(`NTasks API - porta ${app.get("port")}`);
        });
    });
}