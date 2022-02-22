const Sequelize = require('sequelize');

module.exports = class DeliverAddress extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      userSequence: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
      },
      userAddress1: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      userAddress2: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      userAddress3: {
        type: Sequelize.STRING(50),
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
    db.DeliverAddress.belongsTo(db.User, { foreignKey: { name: 'userId', onDelete: 'SET NULL', as: 'user' } });
  }
};
