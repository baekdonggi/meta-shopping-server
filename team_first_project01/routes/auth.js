const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const tokenUtil = require('../lib/tokenUtil');
const userService = require('../service/userService');

// login 진행
router.post('/token', async (req, res) => {
  try {
    const params = {
      userId: req.body.userId,
      userPassword: req.body.userPassword,
    };
    logger.info(`(auth.token.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.userId || !params.userPassword) {
      const err = new Error('Not allowed null (userId, Password)');
      logger.error(err.toString());
    }

    // 비즈니스 로직 호출
    const result = await userService.login(params);
    logger.info(`(auth.token.result) ${JSON.stringify(result)}`);

    // 토큰 생성
    const token = tokenUtil.makeToken(result);
    res.set('token', token); // header 세팅

    // 최종 응답
    res.status(200).json({ token: 'success' });
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
