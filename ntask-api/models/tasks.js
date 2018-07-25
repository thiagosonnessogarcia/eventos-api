module.exports = (sequelize, DataType) => {
    const Tasks = sequelize.define("Tasks", { // função sequelize é responsavel por alterar uma tabela do banco de dados
        id: {
            type: DataType.INTEGER, // representa uma chave primária
            primaryKey: true, // valor autoincrimental
            autoIncrement: true // a cada novo registro
        },
        title: {
            type: DataType.STRING,
            allowNull: false,  // não é permitido valores nulos
            validate: {
                notEmpty: true // verifica se a string não está vazia
            }
        },
        done: {
            type: DataType.BOOLEAN, // // não permite valores nulos
            allowNull: false,
            defaultValue: false // se não for informado um valor, o mesmo se torna false
        }
    }, {
        classMethods: {
            associate: (models) => { // permite criar um associação entre os tres modelos
                Tasks.belongsTo(models.Users);
            }
        }
    });
    return Tasks;
};    