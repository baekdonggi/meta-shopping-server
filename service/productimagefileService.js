const logger = require('../lib/logger');
const productimagefileDao = require('../dao/productimagefileDao');

const service = {
  // user 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await productimagefileDao.insert(params);
      logger.debug(`(productimagefileService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(productimagefileService.reg) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(inserted);
    });
  },
  // selectList
  async list(params) {
    let result = null;

    try {
      result = await productimagefileDao.selectList(params);
      logger.debug(`(productimagefileService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(productimagefileService.list) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
};

module.exports = service;
