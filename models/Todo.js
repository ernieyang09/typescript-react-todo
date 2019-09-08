const Sequelize = require("sequelize");

module.exports = sequelize => {
  class Todo extends Sequelize.Model {}

  Todo.init(
    {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isDone: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      create_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      update_at: {
        type: Sequelize.DATE,
      },
    },
    { 
      timestamps: false,
      sequelize
    }
  );

  return Todo;
};
