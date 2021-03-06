const Sequelize = require('sequelize');

module.exports = class ProductCategory extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      categoryCode: {
        type: Sequelize.STRING(30),
        unique: true,
        allowNull: false,
      },
      categoryName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      categoryRefCode: {
        type: Sequelize.STRING(30),
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

  static associate(db) {
    db.ProductCategory.hasMany(db.Product, { foreignKey: 'categoryCode', sourceKey: 'categoryCode' });
  }
};
