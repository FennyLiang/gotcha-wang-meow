'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Animals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      animal_id: {
        type: Sequelize.STRING
      },
      animal_subid: {
        type: Sequelize.STRING
      },
      animal_area_pkid: {
        type: Sequelize.STRING
      },
      animal_shelter_pkid: {
        type: Sequelize.STRING
      },
      animal_place: {
        type: Sequelize.STRING
      },
      animal_kind: {
        type: Sequelize.STRING
      },
      animal_sex: {
        type: Sequelize.STRING
      },
      animal_bodytype: {
        type: Sequelize.STRING
      },
      animal_colour: {
        type: Sequelize.STRING
      },
      animal_age: {
        type: Sequelize.STRING
      },
      animal_sterilization: {
        type: Sequelize.STRING
      },
      animal_bacterin: {
        type: Sequelize.STRING
      },
      animal_foundplace: {
        type: Sequelize.STRING
      },
      animal_title: {
        type: Sequelize.STRING
      },
      animal_status: {
        type: Sequelize.STRING
      },
      animal_remark: {
        type: Sequelize.TEXT
      },
      animal_caption: {
        type: Sequelize.STRING
      },
      animal_opendate: {
        type: Sequelize.STRING
      },
      animal_closeddate: {
        type: Sequelize.STRING
      },
      animal_update: {
        type: Sequelize.STRING
      },
      animal_createtime: {
        type: Sequelize.STRING
      },
      shelter_name: {
        type: Sequelize.STRING
      },
      album_name: {
        type: Sequelize.STRING
      },
      album_file: {
        type: Sequelize.TEXT
      },
      album_base64: {
        type: Sequelize.TEXT
      },
      album_update: {
        type: Sequelize.STRING
      },
      cDate: {
        type: Sequelize.STRING
      },
      shelter_address: {
        type: Sequelize.TEXT
      },
      shelter_tel: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // down: function(queryInterface, Sequelize) {
  //   return queryInterface.dropTable('Animals');
  // }
};