const express = require('express');
const User = require('../models/user');

const logger = require('../lib/logger');

const router = express.Router();
const userService = require('../service/userService');

// 조회
router.route('/')
  .get(async (req, res, next) => {
    try {
      const params = {
        userId: req.query.userId,
        userPassword: req.query.userPassword,
        userName: req.query.userName,
        userPhone: req.query.userPhone,
        userEmail: req.query.userEmail,
        userNickname: req.query.userNickname,
        userProfile: req.query.userProfile,
        emailCheck: req.query.emailCheck,
        userGender: req.query.userGender,
        userRole: req.query.userRole,
        userGrade: req.query.userGrade,
      };
      // const params = await User.findAll();
      // res.json(params);
      logger.info(`(user.list.params) ${JSON.stringify(params)}`);

      const result = await userService.list(params);
      logger.info(`(user.list.result) ${JSON.stringify(result)}`);

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
      // console.error(err);
      // next(err);
    }
  })
  .post(async (req, res, next) => {
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
      };
      // const params = { name: req.body.name };
      // const { name } = params ?

      // const params = { name: 1 }
      // const { name } = params
      // console.log(name) // 1
      logger.info(`(user.reg.params) ${JSON.stringify(params)}`);

      // 입력값 null 체크
      if (!params.userId || !params.userPassword || !params.userName || !params.userPhone
        || !params.userEmail || !params.userNickname || !params.userProfile || !params.emailCheck
        || !params.userGender || !params.userRole || !params.userGrade) {
        const err = new Error('Not allowed null (Id, Password, Name, Phone, Email, Nickname, Profile, EmailCheck, Gender, Role, Grade)');
        logger.error(err.toString());

        res.status(500).json({ err: err.toString() });
      }

      // 비즈니스 로직 호출
      const result = await userService.reg(params);
      logger.info(`(user.reg.result) ${JSON.stringify(result)}`);

      // 최종 응답
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ err: err.toString() });
    }
  });

module.exports = router;
