const crypto = require('crypto');
const logger = require('./logger');

const iterations = 1000;

const hashUtil = {
  // hash 함수 생성
  makePasswordHash(password) {
    // logger.info(`(makePasswordHash) ${password}`); 정상작동 확인
    return new Promise((resolve, reject) => {
      if (!password) {
        reject(new Error(`Not allowed null (password). ${password}`));
      }

      // 1. salt 생성
      const salt = crypto.randomBytes(64).toString('base64');
      // logger.info(`(./lib/hashUtil/makePasswordHash<slat>) ${salt}`); 정상작동 확인

      // 2. hash 생성
      crypto.pbkdf2(password, salt, iterations, 64, 'sha256', (err, derivedkey) => {
        if (err) throw err;

        const hash = derivedkey.toString('hex');
        const encryptedPassword = `${salt}.${hash}`;
        logger.info(`(./lib/hashUtil/makePasswordHash<encryptedPassword>) ${encryptedPassword}`);

        resolve(encryptedPassword);
      });
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

module.exports = hashUtil;
