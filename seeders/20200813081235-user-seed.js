'use strict';
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [{
        name: 'kevinhsu7361',
        email: 'applewish9@gmail.com',
        password: bcrypt.hashSync('peace7361', salt),
        createdAt: '2019-9-20T13:00:00',
        updatedAt: '2019-9-20T13:00:00'
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  }
};
