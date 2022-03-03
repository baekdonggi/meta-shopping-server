const logger = require('./logger');

const checkParams = {
  // hash 함수 생성
  ioc(params) {
    // logger.info(`(makePasswordHash) ${password}`); 정상작동 확인
    return new Promise((resolve, reject) => {
      // if (!params) {
      //   reject(new Error('Not allowed null (params) in idCheck'));
      // }
      logger.debug(`(id중복체크) ${params}`);

      if (params === null) resolve(true); // 중복임
      else resolve(false); // 중복 아님
    });
  },
};

module.exports = checkParams;
