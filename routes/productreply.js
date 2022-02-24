const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const productreplyService = require('../service/productreplyService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      replyNumber: req.body.replyNumber,
      productNumber: req.body.productNumber,
      content: req.body.content,
      writerNickname: req.body.writerNickname,
      reportingDate: req.body.reportingDate,
      replyOriginNumber: req.body.replyOriginNumber,
      replyOrder: req.body.replyOrder,
      replyDepth: req.body.replyDepth,
    };
    logger.info(`(productreply.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.replyNumber) {
      const err = new Error('Not allowed null (replyNumber)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await productreplyService.reg(params);
    logger.info(`(productreply.reg.result) ${JSON.stringify(result)}`);

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
      replyNumber: req.body.replyNumber,
    };
    logger.info(`(productreply.list.params) ${JSON.stringify(params)}`);

    const result = await productreplyService.list(params);
    logger.info(`(productreply.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 상세정보 조회
router.get('/:replyNumber', async (req, res) => {
  try {
    const params = {
      replyNumber: req.body.replyNumber,
      productNumber: req.body.productNumber,
      content: req.body.content,
      writerNickname: req.body.writerNickname,
      reportingDate: req.body.reportingDate,
      replyOriginNumber: req.body.replyOriginNumber,
      replyOrder: req.body.replyOrder,
      replyDepth: req.body.replyDepth,
    };
    logger.info(`(productreply.info.params) ${JSON.stringify(params)}`);

    const result = await productreplyService.info(params);
    logger.info(`(productreply.info.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 수정
router.put('/:replyNumber', async (req, res) => {
  try {
    const params = {
      replyNumber: req.body.replyNumber,
      productNumber: req.body.productNumber,
      content: req.body.content,
      writerNickname: req.body.writerNickname,
      reportingDate: req.body.reportingDate,
      replyOriginNumber: req.body.replyOriginNumber,
      replyOrder: req.body.replyOrder,
      replyDepth: req.body.replyDepth,
    };
    logger.info(`(productreply.update.params) ${JSON.stringify(params)}`);

    const result = await productreplyService.edit(params);
    logger.info(`(productreply.update.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 삭제
router.delete('/:replyNumber', async (req, res) => {
  try {
    const params = {
      replyNumber: req.body.replyNumber,
      productNumber: req.body.productNumber,
      content: req.body.content,
      writerNickname: req.body.writerNickname,
      reportingDate: req.body.reportingDate,
      replyOriginNumber: req.body.replyOriginNumber,
      replyOrder: req.body.replyOrder,
      replyDepth: req.body.replyDepth,
    };
    logger.info(`(productreply.delete.params) ${JSON.stringify(params)}`);

    const result = await productreplyService.delete(params);
    logger.info(`(productreply.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
