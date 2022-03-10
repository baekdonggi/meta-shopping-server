const logger = require('../lib/logger');
const makeNums = require('../lib/makeNums');
const userorderDao = require('../dao/userorderDao');

const service = {
  // 1. 주문번호 생성
  // '결제하기' 버튼 누르기 전단계 누르면 '주문번호' 생성한다.
  async seletMaxId(params) {
    let maxId = null;

    try {
      maxId = await userorderDao.selectMaxId(params);
      logger.debug(`(userorderService.selectMaxId1) ${JSON.stringify(maxId)}`);
    } catch (err) {
      logger.error(`(userorderService.selectMaxId) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(maxId);
    });
  },
  async reg(params) {
    let orderNumber = null;
    let inserted = null;

    try {
      orderNumber = await makeNums.makeOrderNum(params);
      logger.debug(`(userorderService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(userorderService.reg) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 2. 사용자 등록 처리
    const newParams = {
      ...params,
      orderNumber,
    };
    try {
      inserted = await userorderDao.orderNumInsert(newParams);
      logger.debug(`(userService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(userService.reg) ${err.toString()}`);
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
      logger.info(`(userorderService.list) ${JSON.stringify(result)}`);
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
  /*
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
  }, */
};

module.exports = service;
