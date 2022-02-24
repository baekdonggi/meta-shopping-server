const Sequelize = require('sequelize');

module.exports = class UserOrderDetail extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      orderDetailNumber: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      orderNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      orderDetailStatus: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      returnCheck: {
        type: Sequelize.STRING(1),
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
  //   db.userOrderDetail.belongsTo(db.userOrder, { foreignKey: { name: 'orderNumber', onDelete: 'SET NULL', as: 'userorder' } });
  //   db.userOrderDetail.belongsTo(db.userOrder, { foreignKey: { name: 'productNumber', onDelete: 'SET NULL', as: 'userorder' } });
  //   db.userOrderDetail.hasMany(db.userOrderRefund, { foreignKey: { name: 'orderDetailNumber' }, onDelete: 'SET NULL', as: 'userorderrefund' });
    db.UserOrderDetail.belongsTo(db.Product, { foreignKey: { productNumber: 'productNumber', onDelete: 'SET NULL', as: 'Product' } });
  }
};
