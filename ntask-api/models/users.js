import bcrypt from "bcrypt";
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
        },
        password: {
            type: DataType.STRING,
            unique: true, // só permite uma senha
            allowNull: false,
            validate {
                notEmpty: true
            }
        },
        hooks: {
            beforeCreate: user => {
                const salt = bcrypt.genSaltSync();
                console.log(user)
                user.password = bcrypt.hashSync(user.password, salt);
            }
        },
        classMethods: {
            associate: models => {
                Users.hasMany(models.Tasks);
            },
            isPassword: (encodedPassword, password) => {
                return bcrypt.compareSync(password, encodedPassword);
            }
        }
    });
    return Users;
};