const Sequelize = require('sequelize');

module.exports = class UserOrderRefund
  extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      refundNumber: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      orderDetail_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      refundReason: {
        type: Sequelize.STRING(300),
        allowNull: true,
      },
      refundImage: {
        type: Sequelize.STRING(300),
        allowNull: true,
      },
      userEmail: {
        type: Sequelize.STRING(50),
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
