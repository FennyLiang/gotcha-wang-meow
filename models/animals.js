'use strict';
module.exports = function(sequelize, DataTypes) {
  var Animals = sequelize.define('Animals', {
    animalId: DataTypes.STRING,
    animalSubid: DataTypes.STRING,
    animalAreaPkid: DataTypes.STRING,
    animalShelterPkid: DataTypes.STRING,
    animalPlace: DataTypes.STRING,
    animalKind: DataTypes.STRING,
    animalSex: DataTypes.STRING,
    animalBodytype: DataTypes.STRING,
    animalColour: DataTypes.STRING,
    animalAge: DataTypes.STRING,
    animalSterilization: DataTypes.STRING,
    animalBacterin: DataTypes.STRING,
    animalFoundplace: DataTypes.STRING,
    animalTitle: DataTypes.STRING,
    animalStatus: DataTypes.STRING,
    animalRemark: DataTypes.TEXT,
    animalCaption: DataTypes.STRING,
    animalOpendate: DataTypes.STRING,
    animalCloseddate: DataTypes.STRING,
    animalUpdate: DataTypes.STRING,
    animalCreatetime: DataTypes.STRING,
    shelterName: DataTypes.STRING,
    albumName: DataTypes.STRING,
    albumFile: DataTypes.STRING,
    albumBase64: DataTypes.TEXT,
    albumUpdate: DataTypes.STRING,
    cDate: DataTypes.STRING,
    shelterAddress: DataTypes.STRING,
    shelterTel: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Animals;
};