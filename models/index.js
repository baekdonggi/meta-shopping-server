const { sequelize } = require('./connection');
const Product = require('./product');
const ProductCategory = require('./productcategory');
const Cart = require('./cart');
const ProductReply = require('./productreply');
const ProductImageFile = require('./productimagefile');
const UserOrderDetail = require('./userorderdetail');
const User = require('./user');
const UserOrder = require('./userorder');
const UserOrderRefund = require('./userorderrefund');

const db = {};

db.sequelize = sequelize;

// 이미지랑 상품 관계생성

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
UserOrderDetail.init(sequelize);
User.init(sequelize);
UserOrder.init(sequelize);
UserOrderRefund.init(sequelize);

// association(관계 생성)
Product.associate(db);
ProductCategory.associate(db);
Cart.associate(db);
ProductReply.associate(db);
ProductImageFile.associate(db);
UserOrderDetail.associate(db);
User.associate(db);
UserOrder.associate(db);

module.exports = db;
