const logger = require('../lib/logger');
const cartDao = require('../dao/cartDao');

const service = {
  // cart 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await cartDao.insert(params);
      logger.debug(`(cartService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(cartService.reg) ${err.toString()}`);
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
      result = await cartDao.selectList(params);
      logger.debug(`(cartService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(cartService.list) ${err.toString()}`);
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
      result = await cartDao.selectInfo(params);
      logger.debug(`(cartService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(cartService.info) ${err.toString()}`);
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
      result = await cartDao.update(params);
      logger.debug(`(cartService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(cartService.edit) ${err.toString()}`);
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
      result = await cartDao.delete(params);
      logger.debug(`(cartService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(cartService.delete) ${err.toString()}`);
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
