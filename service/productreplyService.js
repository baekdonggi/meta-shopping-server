const logger = require('../lib/logger');
const productreplyDao = require('../dao/productreplyDao');

const service = {
  // cart 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await productreplyDao.insert(params);
      logger.debug(`(productreplyService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(productreplyService.reg) ${err.toString()}`);
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
      result = await productreplyDao.selectList(params);
      logger.debug(`(productreplyService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(productreplyService.list) ${err.toString()}`);
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
      result = await productreplyDao.selectInfo(params);
      logger.debug(`(productreplyService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(productreplyService.info) ${err.toString()}`);
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
      result = await productreplyDao.update(params);
      logger.debug(`(productreplyService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(productreplyService.edit) ${err.toString()}`);
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
      result = await productreplyDao.delete(params);
      logger.debug(`(productreplyService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(productreplyService.delete) ${err.toString()}`);
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
