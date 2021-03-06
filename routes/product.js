const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const productService = require('../service/productService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      productNumber: req.body.productNumber,
      categoryCode: req.body.categoryCode,
      productName: req.body.productName,
      productPrice: req.body.productPrice,
      productStock: req.body.productStock,
      productDesc: req.body.productDesc,
      productDate: req.body.productDate,
      productHits: req.body.productHits,
      filePaths: req.body.filePaths,
      color: req.body.color,

    };
    logger.info(`(product.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.productNumber) {
      const err = new Error('Not allowed null (productNumber)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await productService.reg(params);
    logger.info(`(product.reg.result) ${JSON.stringify(result)}`);

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
      productNumber: req.query.productNumber,
      categoryCode: req.query.categoryCode,

    };
    logger.info(`(product.list.params) ${JSON.stringify(params)}`);

    const result = await productService.list(params);
    logger.info(`(product.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 상세정보 조회
router.get('/:productNumber', async (req, res) => {
  try {
    const params = {
      productNumber: req.params.productNumber,
    };
    logger.info(`(productNumber.info.params) ${JSON.stringify(params)}`);

    const result = await productService.info(params);
    logger.info(`(productNumber.info.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 수정
router.put('/:productNumber', async (req, res) => {
  try {
    const params = {
      productNumber: req.params.productNumber,

    };
    logger.info(`(product.update.params) ${JSON.stringify(params)}`);

    const result = await productService.edit(params);
    logger.info(`(product.update.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 삭제
router.delete('/:productNumber', async (req, res) => {
  try {
    const params = {
      productNumber: req.params.productNumber,
    };
    logger.info(`(product.delete.params) ${JSON.stringify(params)}`);

    const result = await productService.delete(params);
    logger.info(`(product.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
