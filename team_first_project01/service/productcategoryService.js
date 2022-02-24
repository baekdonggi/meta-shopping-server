const logger = require('../lib/logger');
const productcategoryDao = require('../dao/productcategoryDao');

const service = {
  // user 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await productcategoryDao.insert(params);
      logger.debug(`(productcategoryService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(productcategoryService.reg) ${err.toString()}`);
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
      result = await productcategoryDao.selectList(params);
      logger.debug(`(productcategoryService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(productcategoryService.list) ${err.toString()}`);
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
