const Sequelize = require('sequelize');

module.exports = class UserOrderDetail extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      orderDetailNumber: {
        type: Sequelize.STRING(30),
        unique: true,
        // allowNull: false,
      },
      orderNumber: {
        type: Sequelize.STRING(14),
        // allowNull: false,
      },
      productNumber: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },
      productCount: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },
      productPrice: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },
      orderDetailStatus: {
        type: Sequelize.STRING(30),
        // allowNull: false,
      },
      returnCheck: {
        type: Sequelize.STRING(1),
        // allowNull: false,
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
    db.UserOrderDetail.belongsTo(db.UserOrder, { foreignKey: 'orderNumber', targetKey: 'orderNumber' });
    db.UserOrderDetail.belongsTo(db.Product, { foreignKey: 'productNumber', targetKey: 'productNumber' });
    // db.UserOrderDetail.hasMany(db.UserOrderRefund, { foreignKey: { name: 'orderDetailNumber' }, onDelete: 'SET NULL', as: 'userorderrefund' });
  }
};
