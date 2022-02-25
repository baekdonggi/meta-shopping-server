const { sequelize } = require('./connection');
const User = require('./user');
const UserOrder = require('./userorder');
const UserOrderDetail = require('./userorderdetail');
const UserOrderRefund = require('./userorderrefund');

const db = {};

db.sequelize = sequelize;

// model 생성
db.User = User;
db.UserOrder = UserOrder;
db.UserOrderDetail = UserOrderDetail;
db.UserOrderRefund = UserOrderRefund;

// model init
User.init(sequelize);
UserOrder.init(sequelize);
UserOrderDetail.init(sequelize);
UserOrderRefund.init(sequelize);

// association(관계 생성)
User.associate(db);
UserOrder.associate(db);
UserOrderDetail.associate(db);
UserOrderRefund.associate(db);

module.exports = db;
