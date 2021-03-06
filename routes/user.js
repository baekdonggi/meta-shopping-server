const express = require('express');

const logger = require('../lib/logger');

const router = express.Router();
const userService = require('../service/userService');

router.route('/')
// 사용자 list 조회
  .get(async (req, res) => {
    try {
      const params = {
        userId: req.body.userId,
        // userId: req.query.userId,
        // userPassword: req.query.userPassword,
        // userName: req.query.userName,
        // userPhone: req.query.userPhone,
        // userEmail: req.query.userEmail,
        // userNickname: req.query.userNickname,
        // userProfile: req.query.userProfile,
        // emailCheck: req.query.emailCheck,
        // userGender: req.query.userGender,
        // userRole: req.query.userRole,
        // userGrade: req.query.userGrade,
        // userAddress1: req.query.userAddress1,
        // userAddress2: req.query.userAddress2,
        // userAddress3: req.query.userAddress3,
      };
      logger.info(`(user.list.params) ${JSON.stringify(params)}`);

      const result = await userService.list(params);
      logger.info(`(user.list.result) ${JSON.stringify(result)}`);

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ err0: err.toString() });
    }
  })
  // 사용자 회원가입
  .post(async (req, res) => {
    try {
      const params = {
        userId: req.body.userId,
        userPassword: req.body.userPassword,
        userName: req.body.userName,
        userPhone: req.body.userPhone,
        userEmail: req.body.userEmail,
        userNickname: req.body.userNickname,
        userProfile: req.body.userProfile,
        emailCheck: req.body.emailCheck,
        userGender: req.body.userGender,
        userRole: req.body.userRole,
        userGrade: req.body.userGrade,
        userAddress1: req.body.userAddress1,
        userAddress2: req.body.userAddress2,
        userAddress3: req.body.userAddress3,
      };
      logger.info(`(user.reg.params) ${JSON.stringify(params)}`);

      // 입력값 null 체크
      /* if (!params.userId || !params.userPassword || !params.userName || !params.userPhone
        || !params.userEmail || !params.userNickname || !params.userProfile || !params.emailCheck
        || !params.userGender || !params.userRole || !params.userGrade) {
        const err = new Error('Not allowed null (Id, Password, Name, Phone, Email, Nickname, Profile, EmailCheck, Gender, Role, Grade)');
        logger.error(err.toString());

        res.status(500).json({ err1: err.toString() });
      } */

      // 비즈니스 로직 호출
      const result = await userService.reg(params);
      logger.info(`(user.reg.result) ${JSON.stringify(result)}`);

      // 최종 응답
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ err2: err.toString() });
    }
  });
router.route('/idcheck/:userId')
// 회원가입 시, 사용자 id 중복 체크
  .post(async (req, res) => {
    try {
      const params = {
        userId: req.params.userId,
      };
      logger.info(`(user.idCheck.params) ${JSON.stringify(params)}`);

      // 비즈니스 로직 호출
      const result = await userService.idCheck(params);
      logger.info(`(user.idCheck.result) ${JSON.stringify(result)}`);

      // 최종 응답
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ err2: err.toString() });
    }
  });
/* router.route('/pwdcheck/:userPassword')
// 사용자 마이페이지 비밀번호 체크
  .post(async (req, res) => {
    try {
      const params = {
        userId: req.params.userId,
      };
      logger.info(`(user.idCheck.params1) ${JSON.stringify(params)}`);

      // 비즈니스 로직 호출
      const result = await userService.idCheck(params);
      logger.info(`(user.idCheck.result2) ${JSON.stringify(result)}`);

      // 최종 응답
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ err2: err.toString() });
    }
  }); */
router.route('/:id')
// 특정 사용자 info 조회
  .get(async (req, res) => {
    try {
      const params = {
        id: req.params.id,
      };
      logger.info(`(user.info.params) ${JSON.stringify(params)}`);

      const result = await userService.info(params);
      logger.info(`(user.info.result) ${JSON.stringify(result)}`);

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ err: err.toString() });
    }
  })
  // 특정 사용자 info 수정
  .put(async (req, res) => {
    try {
      const params = {
        id: req.params.id,
        userId: req.body.userId,
        userPassword: req.body.userPassword,
        userName: req.body.userName,
        userPhone: req.body.userPhone,
        userEmail: req.body.userEmail,
        userNickname: req.body.userNickname,
        userProfile: req.body.userProfile,
        emailCheck: req.body.emailCheck,
        userGender: req.body.userGender,
        userRole: req.body.userRole,
        userGrade: req.body.userGrade,
        userAddress1: req.body.userAddress1,
        userAddress2: req.body.userAddress2,
        userAddress3: req.body.userAddress3,
      };
      logger.info(`(user.update.params) ${JSON.stringify(params)}`);

      // 입력값 null 체크
      /* if (!params.userId || !params.userPassword || !params.userName || !params.userPhone
        || !params.userEmail || !params.userNickname || !params.userProfile || !params.emailCheck
        || !params.userGender || !params.userRole || !params.userGrade) {
        const err = new Error('Not allowed null (params)');
        logger.error(err.toString());

        res.status(500).json({ err1: err.toString() });
      } */

      // 비즈니스 로직 호출
      const result = await userService.edit(params);
      logger.info(`(user.update.params) ${JSON.stringify(result)}`);

      // 최종 응답
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ err: err.toString() });
    }
  })
  .delete(async (req, res) => {
    try {
      const params = {
        id: req.params.id,
      };
      logger.info(`(user.delete.params) ${JSON.stringify(params)}`);

      const result = await userService.del(params);
      logger.info(`(user.delete.result) ${JSON.stringify(result)}`);

      // 최종 응답
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ err: err.toString() });
    }
  });

module.exports = router;
