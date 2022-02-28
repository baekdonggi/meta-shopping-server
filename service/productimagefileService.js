const logger = require('../lib/logger');
const productimagefileDao = require('../dao/productimagefileDao');

const service = {
  // cart 입력
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
  // selectInfo
  async info(params) {
    let result = null;

    try {
      result = await productimagefileDao.selectInfo(params);
      logger.debug(`(productimagefileService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(productimagefileService.info) ${err.toString()}`);
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
      result = await productimagefileDao.update(params);
      logger.debug(`(productimagefileService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(productimagefileService.edit) ${err.toString()}`);
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
      result = await productimagefileDao.delete(params);
      logger.debug(`(productimagefileService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(productimagefileService.delete) ${err.toString()}`);
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
