const Sequelize = require('sequelize');

module.exports = class Cart extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      cartNumber: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
      },
      productNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cartValue: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      productCount: {
        type: Sequelize.INTEGER,
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
    db.Cart.belongsTo(db.Product, { foreignKey: 'productNumber', targetKey: 'productNumber' });
  }
};
