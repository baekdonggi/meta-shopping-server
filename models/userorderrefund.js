const Sequelize = require('sequelize');

module.exports = class UserOrderRefund extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      refundNumber: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      orderDetailNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      refundReason: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      refundImage: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      userEmail: {
        type: Sequelize.STRING(50),
        allowNull: false,
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

  static associate(db) {
    db.UserOrderRefund.belongsTo(db.UserOrderDetail, { foreignKey: { name: 'orderDetailNumber', onDelete: 'SET NULL', as: 'userorderdetail' } });
  }
};
