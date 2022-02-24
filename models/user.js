const Sequelize = require('sequelize');

module.exports = class Department extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      user_sequence: {
        type: Sequelize.INTEGER(10),
      },
      user_id: {
        type: Sequelize.STRING(20),
      },
      user_password: {
        type: Sequelize.STRING(20),
      },
      user_name: {
        type: Sequelize.STRING(50),
      },
      user_gender: {
        type: Sequelize.INTEGER,
      },
      user_email: {
        type: Sequelize.STRING(50),
      },
      user_address: {
        type: Sequelize.STRING(50),
      },
      user_phonenumber: {
        type: Sequelize.INTEGER(50),
      },
      user_role: {
        type: Sequelize.INTEGER(50),
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
};
