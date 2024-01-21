'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'sexo', {
      type: Sequelize.STRING(1),
      defaultValue:"",
      comment: 'm:Masculino, f:feminino',
      allowNull:false 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users','sexo');
  }
};
