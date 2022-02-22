const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      userId: {
        type: Sequelize.STRING(30),
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      userPassword: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      userName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      userPhoner: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      userEmail: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      userNickname: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      userProfile: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      emailCheck: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      userGender: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userRole: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userGrade: {
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
    db.User.hasMany(db.DeliverAddress, { foreignKey: { name: 'userId' }, onDelete: 'SET NULL', as: 'deliveraddress' });
    db.User.hasMany(db.UserOrder, { foreignKey: { name: 'userId' }, onDelete: 'SET NULL', as: 'userorder' });
  }
};
