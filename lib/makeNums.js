const logger = require('./logger');

const makeNums = {
  // 주문번호 생성 함수
  // 생성 규칙: YYMMDD+______ ('_' => '0~9', 즉 10^6)
  makeOrderNum(params) {
    // logger.info(`(makePasswordHash) ${password}`); 정상작동 확인
    return new Promise((resolve, reject) => {
      // if (!params) {
      //   reject(new Error(`Not allowed null (params). ${params}`));
      // }
      const now = new Date();
      const todayYear = now.getFullYear();
      const todayMonth = (now.getMonth() + 1) > 9 ? (now.getMonth() + 1) : `0${now.getMonth() + 1}`;
      const todayDate = now.getDate() > 9 ? now.getDate() : `0${now.getDate()}`;
      const strYear = todayYear.toString();
      const date = strYear.slice(2, 4) + todayMonth + todayDate;

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
      // const theRandomNum = Math.floor(Math.random() * 10); // 0 to 9

      const orderNum = date + theRandomNum;
      logger.info(`(makeOrderNum.orderNum) ${orderNum}`);

      resolve(orderNum);
    });
  },
  // 비밀번호 확인
  checkPasswordHash(password, encryptedPassword) {
    return new Promise((resolve, reject) => {
      if (!password || !encryptedPassword) {
        reject(new Error('Not allowed null (password)..'));
      }

      // 1. salt와 hash 분리
      const encryptedPasswordSplit = encryptedPassword.split('.');
      const salt = encryptedPasswordSplit[0];
      const encryptedHash = encryptedPasswordSplit[1];

      // 2. 입력된 password로부터 hash생성
      crypto.pbkdf2(password, salt, iterations, 64, 'sha256', (err, derivedkey) => {
        if (err) throw err;

        const hash = derivedkey.toString('hex');

        // 입력된 password와 암호화된 password를 비교
        if (hash === encryptedHash) resolve(true); else resolve(false);
      });
    });
  },
};

module.exports = makeNums;
