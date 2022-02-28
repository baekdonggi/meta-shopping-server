const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const cartService = require('../service/cartService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      cartNumber: req.body.cartNumber,
      productNumber: req.body.productNumber,
      cartValue: req.body.cartValue,
      productCount: req.body.productCount,
    };
    logger.info(`(cart.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.cartNumber) {
      const err = new Error('Not allowed null (cartNumber)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await cartService.reg(params);
    logger.info(`(cart.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 리스트 조회
router.get('/', async (req, res) => {
  try {
    const params = {
      cartNumber: req.body.cartNumber,
    };
    logger.info(`(cart.list.params) ${JSON.stringify(params)}`);

    const result = await cartService.list(params);
    logger.info(`(cart.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 상세정보 조회
router.get('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(cart.info.params) ${JSON.stringify(params)}`);

    const result = await cartService.info(params);
    logger.info(`(cart.info.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 수정
router.put('/:id', async (req, res) => {
  try {
    const params = {
      cartNumber: req.body.cartNumber,
      productNumber: req.body.productNumber,
      cartValue: req.body.cartValue,
      productCount: req.body.productCount,
    };
    logger.info(`(cart.update.params) ${JSON.stringify(params)}`);

    const result = await cartService.edit(params);
    logger.info(`(cart.update.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 삭제
router.delete('/:id', async (req, res) => {
  try {
    const params = {
      cartNumber: req.body.cartNumber,
      productNumber: req.body.productNumber,
      cartValue: req.body.cartValue,
      productCount: req.body.productCount,
    };
    logger.info(`(cart.delete.params) ${JSON.stringify(params)}`);

    const result = await cartService.delete(params);
    logger.info(`(cart.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
