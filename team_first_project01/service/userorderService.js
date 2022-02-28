const logger = require('../lib/logger');
const userorderDao = require('../dao/userorderDao');

const service = {
  // 회원정보 입력(회원가입)
  async reg(params) {
    let inserted = null;

    try {
      inserted = await userorderDao.insert(params);
      logger.debug(`(userorderService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(userorderService.reg) ${err.toString()}`);
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
      result = await userorderDao.selectList(params);
      logger.debug(`(userorderService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(userorderService.list) ${err.toString()}`);
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
      result = await userorderDao.selectInfo(params);
      logger.debug(`(userorderService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(userorderService.info) ${err.toString()}`);
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
      result = await userorderDao.update(params);
      logger.debug(`(userorderService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(userorderService.edit) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // delelte
  async del(params) {
    let result = null;

    try {
      result = await userorderDao.delete(params);
      logger.debug(`(userorderService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(userorderService.delete) ${err.toString()}`);
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
