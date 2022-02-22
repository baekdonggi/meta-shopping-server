// const Sequelize = require('sequelize');

// module.exports = class NonuserOrderRefund extends Sequelize.Model {
//   static init(sequelize) {
//     return super.init({
//       refundNumber: {
//         type: Sequelize.INTEGER,
//         primaryKey,
//         allowNull: false,
//       },
//       orderDetailNumber: {
//         type: Sequelize.INTEGER,
//         foreignKey,
//         allowNull: false,
//       },
//       refundReason: {
//         type: Sequelize.STRING(300),
//         allowNull: false,
//       },
//       refundImg: {
//         type: Sequelize.STRING(300),
//         allowNull: false,
//       },
//       productPrice: {
//         type: Sequelize.INTEGER,
//         allowNull: true,
//       },
//     }, {
//       sequelize,
//       // tableName: 'tableName', // table명을 수동으로 생성 함
//       // freezeTableName: true, // true: table명의 복수형 변환을 막음
//       underscored: true, // true: underscored, false: camelCase
//       timestamps: true, // createAt, updatedAt
//       paranoid: true, // deletedAt
//     });
//   }

//   static associate(db) {
//     db.User.belongsTo(db.Department, { foreignKey: { name: 'departmentId', onDelete: 'SET NULL', as: 'Department' } });
//   }
// };
