const Sequelize = require('sequelize');

module.exports = class UserOrderDetail
  extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      orderDetailNumber: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      orderNumber: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      productNumber: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      productCount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      productPrice: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      orderDetailStatus: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      returnCheck: {
        type: Sequelize.STRING(1),
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
