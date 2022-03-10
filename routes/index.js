const express = require('express');

const logger = require('../lib/logger');
const productRouter = require('./product');
const productcategoryRouter = require('./productcategory');
const productimagefileRouter = require('./productimagefile');
const cartRouter = require('./cart');
const productreplyRouter = require('./productreply');
const authRouter = require('./auth'); // 로그인
const userRouter = require('./user');
const userorderRouter = require('./userorder');
const paymentRouter = require('./payment');

const router = express.Router();

// multer

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// /* POST home page. */
// router.post('/upload', multer(multerConf).single(), (req, res) => {
//   res.send('this is post route upload');
// });

// logTest
router.get('/log-test', (req, res, next) => {
  logger.error('This message is error');
  logger.warn('This message is warn');
  logger.info('This message is info');
  logger.verbose('This message is verbose');
  logger.debug('This message is debug');
  logger.silly('This message is silly');

  res.send('log test');
});

// product
router.use('/products', productRouter);
router.use('/productcategory', productcategoryRouter);
router.use('/productimagefile', productimagefileRouter);
router.use('/cart', cartRouter);
router.use('/productreply', productreplyRouter);
router.use('/auths', authRouter);
router.use('/users', userRouter);
router.use('/userorders', userorderRouter);
router.use('/payments', paymentRouter);

module.exports = router;
