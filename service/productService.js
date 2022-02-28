const logger = require('../lib/logger');
const productDao = require('../dao/productDao');

const service = {
  // product 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await productDao.insert(params);
      logger.debug(`(productService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(productService.reg) ${err.toString()}`);
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
      result = await productDao.selectList(params);
      logger.debug(`(productService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(productService.list) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // selectInfo
  async info(params) {
    let result = null;

    try {
      result = await productDao.selectInfo(params);
      logger.debug(`(productService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(productService.info) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // update
  async edit(params) {
    let result = null;

    try {
      result = await productDao.update(params);
      logger.debug(`(productService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(productService.edit) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // delelte
  async delete(params) {
    let result = null;

    try {
      result = await productDao.delete(params);
      logger.debug(`(productService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(productService.delete) ${err.toString()}`);
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
