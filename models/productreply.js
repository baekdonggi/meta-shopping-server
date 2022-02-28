const Sequelize = require('sequelize');

module.exports = class ProductReply extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      replyNumber: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
      },
      productNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      writerNickname: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      reportingDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      replyOriginNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      replyOrder: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      replyDepth: {
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
    db.ProductReply.belongsTo(db.Product, { foreignKey: { productNumber: 'productNumber', onDelete: 'SET NULL', as: 'Product' } });
  }
};
