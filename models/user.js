const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      userSequence: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      userId: {
        type: Sequelize.STRING(20),
        allowNull: true,
        unique: true,
      },
      userPassword: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      userName: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      userGender: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      userEmail: {
        type: Sequelize.STRING(50),
        allowNull: true,
        unique: true,
      },
      userAddress: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      userPhonenumber: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      userRole: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    }, {
      sequelize,
      // tableName: 'tableName', // table명을 수동으로 생성 함
      // freezeTableName: true, // true: table명의 복수형 변환을 막음
      underscored: true, // true: underscored, false: camelCase
      timestamps: true, // createAt, updatedAt
      paranoid: true, // deletedAt
    });
  }
};
