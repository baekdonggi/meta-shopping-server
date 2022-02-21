const Sequelize = require('sequelize');

module.exports = class NonuserOrderDetail extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      orderDetailNumber: {
        type: Sequelize.INTEGER,
        primaryKey,
        allowNull: false,
      },
      orderNumber: {
        type: Sequelize.INTEGER,
        foreignKey,
        allowNull: false,
      },
      productNumber: {
        type: Sequelize.INTEGER,
        foreignKey,
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
      refundCheck: {
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
    db.User.belongsTo(db.Department, { foreignKey: { name: 'departmentId', onDelete: 'SET NULL', as: 'Department' } });
  }
};
