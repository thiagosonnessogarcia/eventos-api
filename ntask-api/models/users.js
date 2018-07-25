module.exports = (sequelize, DataType) => {
    const Users = sequelize.define("Users", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false, 
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataType.STRING,
            unique: true, // cadastro só permite um e-mail, não sendo válido emails iguais
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                Users.hasMany(models.Tasks);
            }
        }
    });
    return Users;
};