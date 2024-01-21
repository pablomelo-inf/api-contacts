'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'sexo', {
      type: Sequelize.STRING(1),
      defaultValue:'m',
      comment: 'm:Masculino, f:feminino',
      allowNull:false 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users','sexo');
  }
};