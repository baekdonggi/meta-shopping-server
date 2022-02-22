const logger = require('../lib/logger');

const hashUtil = require;
const userDao = require('../dao/userDao');

const service = {
  // 회원정보 입력(회원가입)
  async reg(params) {
    let inserted = null;

    // 1. 비밀번호 암호화
    const hashPassword = null;
    try {
      // hashPassword = await hashUtil.makePasswordHash(params.password);
    } catch (err) {
      logger.error(`(userService.makePasswordHash) ${err.stringify()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 2. 사용자 등록 처리
    try {
      inserted = await userDao.insert(params);
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
};

module.exports = service;
