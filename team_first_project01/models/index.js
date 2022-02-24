const { sequelize } = require('./connection');
const Product = require('./product');
const ProductCategory = require('./productcategory');
const Cart = require('./cart');
const ProductReply = require('./productreply');
const ProductImageFile = require('./productimagefile');
const UserOrderDetail = require('./userorderdetail');

const db = {};

db.sequelize = sequelize;

// model 생성
db.Product = Product;
db.ProductCategory = ProductCategory;
db.Cart = Cart;
db.ProductReply = ProductReply;
db.ProductImageFile = ProductImageFile;
db.UserOrderDetail = UserOrderDetail;

// model init
Product.init(sequelize);
ProductCategory.init(sequelize);
Cart.init(sequelize);
ProductReply.init(sequelize);
ProductImageFile.init(sequelize);
UserOrderDetail.init(sequelize);

// association(관계 생성)
Product.associate(db);
ProductCategory.associate(db);
Cart.associate(db);
ProductReply.associate(db);
ProductImageFile.associate(db);
UserOrderDetail.associate(db);

module.exports = db;
