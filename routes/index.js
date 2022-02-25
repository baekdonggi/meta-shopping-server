const express = require('express');
const logger = require('../lib/logger');
const authRouter = require('./auth');
const userRouter = require('./user');
const userorderRouter = require('./userorder');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

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

// user
router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/userorder', userorderRouter);

module.exports = router;
