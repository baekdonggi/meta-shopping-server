const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const productimagefileService = require('../service/productimagefileService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      fileNumber: req.body.fileNumber,
      productNumber: req.body.productNumber,
      orginFileName: req.body.orginFileName,
      storedFileName: req.body.storedFileName,
      storedThumbNail: req.body.storedThumbNail,
      delegateThumbNail: req.body.delegateThumbNail,
      fileSize: req.body.fileSize,
      createDate: req.body.createDate,
      deleteCheck: req.body.deleteCheck,
    };
    logger.info(`(productimagefile.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.fileNumber) {
      const err = new Error('Not allowed null (fileNumber)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await productimagefileService.reg(params);
    logger.info(`(productimagefile.reg.result) ${JSON.stringify(result)}`);

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
      fileNumber: req.body.fileNumber,
      productNumber: req.body.productNumber,
      orginFileName: req.body.orginFileName,
      storedFileName: req.body.storedFileName,
      storedThumbNail: req.body.storedThumbNail,
      delegateThumbNail: req.body.delegateThumbNail,
      fileSize: req.body.fileSize,
      createDate: req.body.createDate,
      deleteCheck: req.body.deleteCheck,
    };
    logger.info(`(productimagefile.list.params) ${JSON.stringify(params)}`);

    const result = await productimagefileService.list(params);
    logger.info(`(productimagefile.list.result) ${JSON.stringify(result)}`);

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
    logger.info(`(productimagefile.info.params) ${JSON.stringify(params)}`);

    const result = await productimagefileService.info(params);
    logger.info(`(productimagefile.info.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
