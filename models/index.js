const { sequelize } = require('./connection');
const Product = require('./product');
const ProductCategory = require('./productcategory');
const Cart = require('./cart');
const ProductReply = require('./productreply');
const ProductImageFile = require('./productimagefile');
const User = require('./user');
const UserOrder = require('./userorder');
const UserOrderDetail = require('./userorderdetail');
const UserOrderRefund = require('./userorderrefund');

const db = {};

db.sequelize = sequelize;

// model 생성
db.Product = Product;
db.ProductCategory = ProductCategory;
db.Cart = Cart;
db.ProductReply = ProductReply;
db.ProductImageFile = ProductImageFile;
db.User = User;
db.UserOrder = UserOrder;
db.UserOrderDetail = UserOrderDetail;
db.UserOrderRefund = UserOrderRefund;

// model init
Product.init(sequelize);
ProductCategory.init(sequelize);
Cart.init(sequelize);
ProductReply.init(sequelize);
ProductImageFile.init(sequelize);
User.init(sequelize);
UserOrder.init(sequelize);
UserOrderDetail.init(sequelize);
UserOrderRefund.init(sequelize);

// association(관계 생성)
Product.associate(db);
ProductCategory.associate(db);
Cart.associate(db);
ProductReply.associate(db);
User.associate(db);
UserOrder.associate(db);
UserOrderDetail.associate(db);
UserOrderRefund.associate(db);

module.exports = db;
