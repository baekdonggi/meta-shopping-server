const Sequelize = require('sequelize');

module.exports = class UserOrder extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      orderNumber: {
        type: Sequelize.BIGINT,
        unique: true,
        // allowNull: false,
      },
      userId: {
        type: Sequelize.STRING(30),
        // unique: true,
        // allowNull: false,
      },
      orderDate: {
        type: Sequelize.DATE,
        // allowNull: false,
      },
      address1: {
        type: Sequelize.STRING(20),
        // allowNull: false,
      },
      address2: {
        type: Sequelize.STRING(50),
        // allowNull: false,
      },
      address3: {
        type: Sequelize.STRING(50),
        // allowNull: false,
      },
      receiverName: {
        type: Sequelize.STRING(20),
        // allowNull: false,
      },
      receiverPhone: {
        type: Sequelize.STRING(20),
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
    db.UserOrder.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'userId' });
    // db.UserOrder.belongsTo(db.User, { foreignKey: { name: 'userId', onDelete: 'SET NULL', as: 'user' } });
  }
};
