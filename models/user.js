const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      userId: {
        type: Sequelize.STRING(30),
        unique: true,
      },
      userPassword: {
        type: Sequelize.STRING(217),
      },
      userName: {
        type: Sequelize.STRING(50),
      },
      userPhone: {
        type: Sequelize.STRING(20),
      },
      userEmail: {
        type: Sequelize.STRING(50),
      },
      userNickname: {
        type: Sequelize.STRING(20),
        unique: true,
      },
      userProfile: {
        type: Sequelize.STRING(100),
      },
      emailCheck: {
        type: Sequelize.STRING(1),
      },
      userGender: {
        type: Sequelize.INTEGER,
      },
      userRole: {
        type: Sequelize.INTEGER,
      },
      userGrade: {
        type: Sequelize.STRING(10),
      },
      userAddress1: {
        type: Sequelize.STRING(20),
      },
      userAddress2: {
        type: Sequelize.STRING(50),
      },
      userAddress3: {
        type: Sequelize.STRING(50),
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
    db.User.hasMany(db.UserOrder, { foreignKey: 'userId', sourceKey: 'userId' });
  }
};
