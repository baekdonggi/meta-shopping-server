const logger = require('../lib/logger');
const hashUtil = require('../lib/hashUtil');
const checkParams = require('../lib/checkParams');
const userDao = require('../dao/userDao');

const service = {
  // 회원정보 입력(회원가입)
  async reg(params) {
    let inserted = null;

    // 1. 비밀번호 암호화
    let hashPassword = null;
    try {
      hashPassword = await hashUtil.makePasswordHash(params.userPassword);
      logger.debug(`(userService.makePasswordHash) ${JSON.stringify(hashPassword)}`);
    } catch (err) {
      logger.error(`(userService.makePasswordHash) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 2. 사용자 등록 처리
    const newParams = {
      ...params,
      userPassword: hashPassword,
    };
    try {
      inserted = await userDao.insert(newParams);
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
      result = await userDao.selectList(params);
      logger.debug(`(userService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(userService.list) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // user id check
  async idCheck(params) {
    let resultDao = null;
    let resultLib = null;

    try {
      logger.debug(`(userService.idOverlabCheck11) ${JSON.stringify(params)}`);
      resultDao = await userDao.idOverlabCheck(params);
      logger.debug(`(userService.idOverlabCheck) ${JSON.stringify(resultDao)}`);
    } catch (err) {
      logger.error(`(userService.idOverlabCheck) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    try {
      resultLib = await checkParams.ioc(resultDao);
      logger.debug(`(userService.checkParams) ${JSON.stringify(resultLib)}`);
    } catch (err) {
      logger.error(`(userService.checkParams) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(resultLib);
    });
  },
  // selectInfo
  async info(params) {
    let result = null;

    try {
      result = await userDao.selectInfo(params);
      logger.debug(`(userService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(userService.info) ${err.toString()}`);
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
      result = await userDao.update(params);
      logger.debug(`(userService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(userService.edit) ${err.toString()}`);
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
      result = await userDao.delete(params);
      logger.debug(`(userService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(userService.delete) ${err.toString()}`);
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
      user = await userDao.selectUser(params);
      logger.info(`(userService.login) ${JSON.stringify(user)}`);

      // 해당 사용자가 없는 경우 튕겨냄
      if (!user) {
        const err = new Error('Incorect userId or userPassword');
        logger.error(err.toString());

        return new Promise((resolve, reject) => {
          reject(err);
        });
      }
    } catch (err) {
      logger.error(`(userService.login) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 2. 비밀번호 비교
    try {
      const checkPassword = await hashUtil.checkPasswordHash(params.userPassword, user.userPassword);
      logger.debug(`(userService.checkPassword) ${checkPassword}`);

      // 비밀번호 틀린 경우 튕겨냄
      if (!checkPassword) {
        const err = new Error('Incorect userId or userPassword');
        logger.error(err.toString());

        return new Promise((resolve, reject) => {
          reject(err);
        });
      }
    } catch (err) {
      logger.error(`(userService.checkPassword) ${err.toString()}`);
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
