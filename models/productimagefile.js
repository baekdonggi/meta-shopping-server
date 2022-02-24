const Sequelize = require('sequelize');

module.exports = class ProductImageFile extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      fileNumber: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      productNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      orginFileName: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      storedFileName: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      storedThumbNail: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      delegateThumbNail: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      fileSize: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deleteCheck: {
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
    db.ProductImageFile.belongsTo(db.Product, { foreignKey: { productNumber: 'productNumber', onDelete: 'SET NULL', as: 'Product' } });
  }
};
