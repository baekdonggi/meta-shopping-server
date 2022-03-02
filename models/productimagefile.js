const Sequelize = require('sequelize');

module.exports = class ProductImageFile extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      productNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING(300),
        unique: true,
        allowNull: false,
      },
      mimetype: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      path: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      size: {
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
    db.ProductImageFile.belongsTo(db.Product, { foreignKey: 'productNumber', targetKey: 'productNumber' });
  }
};
