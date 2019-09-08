'use strict';
const faker = require('faker');
const db = require('../models');
const Todo = db.sequelize.models.Todo;

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const Todos = Array.from({length:20}, () => {
      return {
        title: faker.random.words(),
        isDone: faker.random.boolean(),
      }
    });

    return Promise.all(Todos.map((item) => {
      return Todo.create(item);
    }))
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
