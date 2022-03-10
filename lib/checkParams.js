const logger = require('./logger');

const checkParams = {
  // id 중복 체크 함수, id overlab check
  ioc(params) {
    return new Promise((resolve, reject) => {
      let newParams = null;
      if (params === null) newParams = 1; // 중복아닐 때
      else newParams = 2;

      if (newParams === 1) resolve(1); // 중복아닐 때
      else resolve(2); // 중복일 때
    });
  },
};

module.exports = checkParams;
