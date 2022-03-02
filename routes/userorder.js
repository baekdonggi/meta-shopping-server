const express = require('express');

const logger = require('../lib/logger');

const router = express.Router();
const userorderService = require('../service/userorderService');

router.route('/')
// 전체 주문 리스트 조회
  .get(async (req, res) => {
    try {
      const params = {
        userId: req.query.userId,
        orderDate: req.query.orderDate,
        address1: req.query.address1,
        address2: req.query.address2,
        address3: req.query.address3,
        receiverName: req.query.receiverName,
        receiverPhone: req.query.receiverPhone,
        orderNumber: req.query.orderNumber,
      };
      logger.info(`(userorder.list.params) ${JSON.stringify(params)}`);

      const result = await userorderService.list(params);
      logger.info(`(userorder.list.result) ${JSON.stringify(result)}`);

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ err0: err.toString() });
      // console.error(err);
      // next(err);
    }
  })
// 사용자 정보 입력(회원등록)
  .post(async (req, res) => {
    try {
      const params = {
        userId: req.body.userId,
        orderDate: req.body.orderDate,
        address1: req.body.address1,
        address2: req.body.address2,
        address3: req.body.address3,
        receiverName: req.body.receiverName,
        receiverPhone: req.body.receiverPhone,
        orderNumber: req.body.orderNumber,
      };
      logger.info(`(userorder.reg.params1) ${JSON.stringify(params)}`);

      // 입력값 null 체크
      /* if (!params.userId || !params.orderDate || !params.address1 || !params.address2
        || !params.receiverName || !params.receiverPhone || !params.orderNumber
      ) {
        const err = new Error('Not allowed null (userId, orderDate, address1~3, receiverName&Phone, orderNumber)');
        logger.error(err.toString());

        res.status(500).json({ err1: err.toString() });
      } */

      // 비즈니스 로직 호출
      const result = await userorderService.reg(params);
      logger.info(`(userorder.reg.result2) ${JSON.stringify(result)}`);

      // 최종 응답
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ err2: err.toString() });
    }
  });

router.route('/:id')
// 특정 사용자 조회
  .get(async (req, res) => {
    try {
      const params = {
        id: req.params.id,
      };
      logger.info(`(userorder.info.params) ${JSON.stringify(params)}`);

      const result = await userorderService.info(params);
      logger.info(`(userorder.info.result) ${JSON.stringify(result)}`);

      // 최종 응답
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ err: err.toString() });
    }
  })
// 특정 사용자 정보 수정
  .put(async (req, res) => {
    try {
      const params = {
        id: req.body.id,
        userId: req.body.userId,
        orderDate: req.body.orderDate,
        address1: req.body.address1,
        address2: req.body.address2,
        address3: req.body.address3,
        receiverName: req.body.receiverName,
        receiverPhone: req.body.receiverPhone,
        orderNumber: req.body.orderNumber,
      };
      logger.info(`(userorder.update.params) ${JSON.stringify(params)}`);

      // 입력값 null 체크
      /* if (!params.userId || !params.orderDate || !params.address1 || !params.address2
        || !params.receiverName || !params.receiverPhone || !params.orderNumber
      ) {
        const err = new Error('Not allowed null (userId, orderDate, address1~3, receiverName/Phone, orderNumber)');
        logger.error(err.toString());

        res.status(500).json({ err1: err.toString() });
      } */

      const result = await userorderService.edit(params);
      logger.info(`(userorder.update.result) ${JSON.stringify(result)}`);

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
      logger.info(`(userorder.delete.params) ${JSON.stringify(params)}`);

      const result = await userorderService.del(params);
      logger.info(`(userorder.delete.result) ${JSON.stringify(result)}`);

      // 최종 응답
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ err: err.toString() });
    }
  });

module.exports = router;
