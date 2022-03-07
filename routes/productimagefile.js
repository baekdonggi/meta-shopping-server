const express = require('express');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, 'upload/');
  },
  filename(req, file, callback) {
    const extension = path.extname(file.originalname);
    const basename = path.basename(file.originalname, extension);
    callback(null, `${basename}-${Date.now()}${extension}`);
  },
});

// 1. 미들웨어 등록
const upload = multer({
  storage,
});
const router = express.Router();
const logger = require('../lib/logger');
const productimagefileService = require('../service/productimagefileService');

// 등록
router.post('/', upload.single('imgFile'), async (req, res) => {
  try {
    const params = {
      productNumber: req.body.productNumber,
      filename: req.file.filename,
      mimetype: req.file.mimetype,
      path: req.file.path,
      size: req.file.size,
      // createDate: req.file.createDate,
      // deleteCheck: req.file.deleteCheck,
    };
    logger.info(`(productimagefile.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.filename) {
      const err = new Error('Not allowed null (productNumber)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await productimagefileService.reg(params);
    logger.info(`(productimagefile.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(params);
    // console.log(req.file);
    logger.log(req.file);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 리스트 조회
router.get('/show', async (req, res) => {
  try {
    const params = {
      productNumber: req.body.productNumber,
      filename: req.body.filename,
      mimetype: req.body.mimetype,
      path: req.body.path,
      size: req.body.size,

    };
    logger.info(`(filename.list.params) ${JSON.stringify(params)}`);

    const result = await productimagefileService.list(params);
    logger.info(`(filename.list.result) ${JSON.stringify(result)}`);

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
    logger.info(`(filename.info.params) ${JSON.stringify(params)}`);

    const result = await productimagefileService.info(params);
    logger.info(`(filename.info.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
