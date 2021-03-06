const Sequelize = require('sequelize');

module.exports = class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      productNumber: {
        type: Sequelize.INTEGER,
        unique: true,
        // // allowNull: false,
      },
      categoryCode: {
        type: Sequelize.STRING(30),
        // allowNull: false,
      },
      productName: {
        type: Sequelize.STRING(50),
        // allowNull: false,
      },
      productPrice: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },
      productStock: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },
      productDesc: {
        type: Sequelize.TEXT,
        // allowNull: false,
      },
      productDate: {
        type: Sequelize.DATE,
        // allowNull: false,
      },
      productHits: {
        type: Sequelize.INTEGER,
        // autoIncrement: true,
        // primaryKey: true,
        // allowNull: false,
      },
      color: {
        type: Sequelize.STRING(100),
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
    db.Product.belongsTo(db.ProductCategory, { foreignKey: 'categoryCode', targetKey: 'categoryCode' });
    db.Product.hasMany(db.Cart, { foreignKey: 'productNumber', sourceKey: 'productNumber' });
    db.Product.hasMany(db.ProductReply, { foreignKey: 'productNumber', sourceKey: 'productNumber' });
    db.Product.hasMany(db.ProductImageFile, { foreignKey: 'productNumber', sourceKey: 'productNumber' });
    db.Product.hasMany(db.UserOrderDetail, { foreignKey: 'productNumber', sourceKey: 'productNumber' });
  }
};
