const logger = require('./logger');

const makeNums = {
  // 주문번호 생성 함수
  // 생성 규칙: YYMMDD + 'id값을 6자리로 변경후, base64로 인코딩'
  makeOrderNum(params) {
    return new Promise((resolve, reject) => {
      const now = new Date();
      const todayYear = now.getFullYear();
      const todayMonth = (now.getMonth() + 1) > 9 ? (now.getMonth() + 1) : `0${now.getMonth() + 1}`;
      const todayDate = now.getDate() > 9 ? now.getDate() : `0${now.getDate()}`;
      const strYear = todayYear.toString();
      const date = strYear.slice(2, 4) + todayMonth + todayDate;

      const idArray = Array.from(String(params));
      const idLength = idArray.length;

      for (let i = idLength; i <= (6 - idLength); i += 1) {
        idArray[i] = 0;
      }

      const reverseArr = idArray.reverse();
      const strParams = reverseArr.join('');
      const encodedParams = Buffer.from(strParams).toString('base64');
      const orderNum = date + encodedParams;

      resolve(orderNum);
    });
  },
  // 상품번호 생성 함수
  // 생성 규칙: pk인 id와 동일하게 입력
  // params에 id(product table의)를 입력 받을 것
  makeProductNum(params) {
    return new Promise((resolve, reject) => {
      // if (!params) {
      //   reject(new Error(`Not allowed null (params). ${params}`));
      // }

      const productNum = params + 1;
      logger.info(`(makeProductNum.productNum) ${params}, ${productNum}`);

      resolve(productNum);
    });
  },
  // 주문 상세 번호 생성 함수
  // 생성 규칙: orderNumber + _ _ _ + productNumber(4자리)
  makeOrderDetailNum(orderNumber, productNumber) {
    return new Promise((resolve, reject) => {
      // if (!params) {
      //   reject(new Error(`Not allowed null (params). ${params}`));
      // }
      Math.random(); // 0 to 1
      const arry = [];
      let theRandomNum = null;
      let i = 1;
      for (i = 1; i < 4;) {
        arry[i] = Math.floor(Math.random() * 10);
        theRandomNum += arry[i] * (10 ** (i - 1));
        logger.info(`(makeOrderNum.RandomNum) ${i}, ${arry[i]}, ${theRandomNum}`);
        i += 1;
      }

      const orderDetailNum = (orderNumber * 10000000) + (theRandomNum * 10000) + productNumber;
      logger.info(`(makeOrderDetailNum.orderDetailNum) ${orderDetailNum}`);

      resolve(orderDetailNum);
    });
  },
};

module.exports = makeNums;

/* 랜던 숫자 생성기
Math.random(); // 0 to 1
const arry = [];
let theRandomNum = null;
let i = 1;
for (i = 1; i < 7;) {
  arry[i] = Math.floor(Math.random() * 10);
  theRandomNum += arry[i] * (10 ** (i - 1));
  logger.info(`(makeOrderNum.RandomNum) ${i}, ${arry[i]}, ${theRandomNum}`);
  i += 1;
}
*/
