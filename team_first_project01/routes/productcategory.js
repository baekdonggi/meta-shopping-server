const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const productcategoryService = require('../service/productcategoryService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      categoryCode: req.body.categoryCode,
      categoryName: req.body.categoryName,
      categoryRefCode: req.body.categoryRefCode,

    };
    logger.info(`(productcategory.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.categoryCode) {
      const err = new Error('Not allowed null (categoryCode)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await productcategoryService.reg(params);
    logger.info(`(productcategory.reg.result) ${JSON.stringify(result)}`);

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
      categoryCode: req.body.categoryCode,
      categoryName: req.body.categoryName,
      categoryRefCode: req.body.categoryRefCode,

    };
    logger.info(`(productcategory.list.params) ${JSON.stringify(params)}`);

    const result = await productcategoryService.list(params);
    logger.info(`(productcategory.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
