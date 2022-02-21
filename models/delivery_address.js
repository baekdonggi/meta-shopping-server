const Sequelize = require('sequelize');

module.exports = class DeliveryAddress
  extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      userSequence: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: true,
      },
      userAddress1: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      userAddress2: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      userAddress3: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      userId: {
        type: Sequelize.STRING(30),
        allowNull: true,
        unique: true,
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
