const { sequelize } = require('./connection');
const User = require('./user');
const UserOrder = require('./userorder');
const UserOrderDetail = require('./userorderdetail');
const UserOrderRefund = require('./userorderrefund');
const DeliverAddress = require('./deliveraddress');

const db = {};

db.sequelize = sequelize;

// model 생성
db.User = User;
db.UserOrder = UserOrder;
db.UserOrderDetail = UserOrderDetail;
db.UserOrderRefund = UserOrderRefund;
db.DeliverAddress = DeliverAddress;

// model init
User.init(sequelize);
UserOrder.init(sequelize);
UserOrderDetail.init(sequelize);
UserOrderRefund.init(sequelize);
DeliverAddress.init(sequelize);

// association(관계 생성)
User.associate(db);
UserOrder.associate(db);
UserOrderDetail.associate(db);
UserOrderRefund.associate(db);
DeliverAddress.associate(db);

module.exports = db;
