// const Sequelize = require('sequelize');

// module.exports = class NonUserOrder

//   extends Sequelize.Model {
//   static init(sequelize) {
//     return super.init({
//       orderNumber: {
//         type: Sequelize.INTEGER,
//         allowNull: true,
//         unique: true,
//       },
//       orderDate: {
//         type: Sequelize.DATETIME,
//         allowNull: true,
//       },
//       address1: {
//         type: Sequelize.STRING(20),
//         allowNull: true,
//       },
//       address2: {
//         type: Sequelize.STRING(50),
//         allowNull: true,
//       },
//       address3: {
//         type: Sequelize.STRING(50),
//         allowNull: true,
//       },
//       receiverName: {
//         type: Sequelize.STRING(20),
//         allowNull: true,
//       },
//       receiverPhone: {
//         type: Sequelize.STRING(20),
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
// };
