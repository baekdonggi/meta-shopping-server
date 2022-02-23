const logger = require('../lib/logger');
const hashUtil = require('../lib/hashUtil');
const userDao = require('../dao/userDao');

const service = {
  // 회원정보 입력(회원가입)
  async reg(params) {
    let inserted = null;

    // 1. 비밀번호 암호화
    let hashPassword = null;
    try {
      hashPassword = await hashUtil.makePasswordHash(params.userPassword);
      logger.debug(`(./service/userService.makePasswordHash) ${JSON.stringify(hashPassword)}`);
    } catch (err) {
      logger.error(`(./service/userService.makePasswordHash) ${err.toString()}`);
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
};

module.exports = service;
