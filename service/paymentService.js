const logger = require('../lib/logger');
const kakaoPay = require('../lib/kakaoPay');

const service = {
  // kakaoPay api 연동
  async kakaoPayApi(params) {
    let result = null;
    try {
      result = await kakaoPay.oneTimeOrder(params);
      logger.debug(`(paymentService.oneTimeOrder) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(paymentService.oneTimeOrder) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(result);
    });
  },
};

module.exports = service;
