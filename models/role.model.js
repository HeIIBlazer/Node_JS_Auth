module.exports = (sequlize, Sequelize) => {
    const Role = sequlize.define('roles', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });

    return Role;
};