const crypto = require('crypto');

const iterations = 1000;

const hashUtil = {
  // hash 함수 생성
  makePasswordHash(password) {
    return new Promise((resolve, reject) => {
      if (!password) {
        reject(new Error('Not allowed null (password)'));
      }

      // 1. salt 생성

      // 2. hash 생성
    });
  },
};
