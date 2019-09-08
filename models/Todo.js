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
        get() {
          return this.getDataValue('create_at').getTime();
        }
      },
      update_at: {
        type: Sequelize.DATE,
        get() {
          return this.getDataValue('update_at') && this.getDataValue('update_at').getTime();
        }
      },
    },
    { 
      timestamps: false,
      sequelize
    }
  );

  return Todo;
};
