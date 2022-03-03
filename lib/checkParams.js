const logger = require('./logger');

const checkParams = {
  // id 중복 체크 함수, id overlab check
  ioc(params) {
    return new Promise((resolve, reject) => {
      if (params === null) resolve(true); // 중복일 때
      else resolve(false); // 중복 아닐 때
    });
  },
};

module.exports = checkParams;
