const logger = require('../lib/logger');
const hashUtil = require('../lib/hashUtil');
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
  // login 프로세스
  async login(params) {
    // 1. 사용자 조회
    let user = null;
    try {
      user = await userorderDao.selectUser(params);
      logger.debug(`(userorderService.login) ${JSON.stringify(user)}`);

      // 해당 사용자가 없는 경우 튕겨냄
      if (!user) {
        const err = new Error('Incorect userid or password');
        logger.error(err.toString());

        return new Promise((resolve, reject) => {
          reject(err);
        });
      }
    } catch (err) {
      logger.error(`(userorderService.login) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 2. 비밀번호 비교
    try {
      const checkPassword = await hashUtil.checkPasswordHash(params.password, user.password);
      logger.debug(`(userorderService.checkPassword) ${checkPassword}`);

      // 비밀번호 틀린 경우 튕겨냄
      if (!checkPassword) {
        const err = new Error('Incorect userid or password');
        logger.error(err.toString());

        return new Promise((resolve, reject) => {
          reject(err);
        });
      }
    } catch (err) {
      logger.error(`(userorderService.checkPassword) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(user);
    });
  },
};

module.exports = service;
