// const httpBuildQuery = require('http-build-query');
const logger = require('./logger');

const kakaoPay = {
  // 단건결제 request 파라미터
  oneTimeOrder(params) {
    return new Promise((resolve, reject) => {
      const url = 'kapi.kakao.com';

      // db로부터 사용자 정보와, 제품정보 받아야함
      const parameters = {
        cid: 'TC0ONETIME',
        partner_order_id: '220311MDAwMDAx',
        partner_user_id: 'yechan',
        item_name: 'oioi RIBBON SLIT JUMPER',
        quantity: 1,
        total_amount: 92000,
        vat_amount: 9200,
        tax_free_amount: 82800,
        approval_url: 'http://localhost:8080/payments',
        fail_url: 'http://localhost:8080/payments',
        cancel_url: 'http://localhost:8080/payments',
      };
      const addminKey = '9ae662d2d5f94a07ae4ab02258f9a12d'; // 노출 금지
      // logger.debug(`(kakaoPay.onTimeOrder.parameters) ${parameters.total_amount}`);
      // const newParameters = httpBuildQuery(parameters);
      // logger.debug(`(newParameters) ${newParameters}`);

      /*
      상세 정보를 카카오 페이 서버에 전달하고, 결제 고유 번호(TID)
      를 받는 단계, adminKey를 헤더에 담아 파라미터 값들과 함께 POST 요청한다.

      요청 성공 시, 응답 바디에 JSON 객체로 다음 단계 진행을 위한 값들을 받는다.
      서버는 tid를 저장하고, 클라이언트는 사용자 환경에 맏는 URL로 리다이렉트 한다.
      */
      const options = {
        hostname: url,
        method: 'POST',
        path: '/v1/payment/ready?cid=TC0ONETIME&partner_order_id=220311MDAwMDAx&partner_user_id=yechan&item_name=oioi+RIBBON+SLIT+JUMPER&quantity=1&total_amount=92000&vat_amount=9200&tax_free_amount=82800&approval_url=http%3A%2F%2Flocalhost%3A8080%2Fpayments&fail_url=http%3A%2F%2Flocalhost%3A8080%2Fpayments&cancel_url=http%3A%2F%2Flocalhost%3A8080%2Fpayments',
        headers: {
          Authorization: `KakaoAK ${addminKey}`,
          'Content-type': 'application/x-www-form-urlencoded', // ;charset=utf-8',
        },

      };
      // logger.debug(`(kakaoPay.onTimeOrder.options) ${options}`);

      resolve(options);
    });
  },

};

module.exports = kakaoPay;
